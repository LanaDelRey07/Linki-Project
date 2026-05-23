import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  private users = new Map<string, {
    id: string;
    email: string;
    passwordHash: string;
    roles: { role: string }[];
    isActive: boolean;
    emailVerifiedAt: Date | null;
  }>();

  private sessionUsers = new Map<string, {
    id: string;
    email: string;
    roles: { role: string }[];
    isActive: boolean;
  }>();

  constructor(private jwtService: JwtService) {}

  async register(dto: RegisterDto): Promise<AuthResponseDto> {
    if (this.users.has(dto.email)) {
      throw new ConflictException('El correo ya está registrado');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const user = {
      id: randomUUID(),
      email: dto.email,
      passwordHash,
      roles: [{ role: dto.role }],
      isActive: true,
      emailVerifiedAt: null,
    };

    this.users.set(dto.email, user);

    this.sessionUsers.set(user.id, {
      id: user.id,
      email: user.email,
      roles: user.roles,
      isActive: user.isActive,
    });

    return this.generateTokens(user.id, user.email, user.roles);
  }

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const user = this.users.get(dto.email);

    if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Cuenta desactivada');
    }

    if (!user.emailVerifiedAt) {
      user.emailVerifiedAt = new Date();
      this.users.set(user.email, user);
    }

    this.sessionUsers.set(user.id, {
      id: user.id,
      email: user.email,
      roles: user.roles,
      isActive: user.isActive,
    });

    return this.generateTokens(user.id, user.email, user.roles);
  }

  async refreshToken(refreshToken: string): Promise<AuthResponseDto> {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_SECRET,
      });

      const user = this.sessionUsers.get(payload.sub)
        || [...this.users.values()].find((entry) => entry.id === payload.sub);

      if (!user || !user.isActive) {
        throw new UnauthorizedException();
      }

      return this.generateTokens(user.id, user.email, user.roles);
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
  }

  private generateTokens(
    userId: string,
    email: string,
    roles: { role: string }[],
  ): AuthResponseDto {
    const rolesList = roles.map((r) => r.role);

    const payload = { sub: userId, email, roles: rolesList };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: process.env.JWT_EXPIRATION || '15m',
    } as any);

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION || '7d',
    } as any);

    return {
      accessToken,
      refreshToken,
      user: { id: userId, email, roles: rolesList },
    };
  }
}
