export declare class AuthResponseDto {
    accessToken: string;
    refreshToken: string;
    user: {
        id: string;
        email: string;
        roles: string[];
    };
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
