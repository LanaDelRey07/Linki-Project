import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

type DemoResponse<T = any> = Promise<{ data: T }>;

const createDemoApi = () => {
  let profile: any = null;

  const nowIso = () => new Date().toISOString();
  const makeTokens = (user: { id: string; email: string; roles: string[] }) => ({
    accessToken: `demo-access-${user.id}`,
    refreshToken: `demo-refresh-${user.id}`,
    user,
  });

  const getUser = () => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  };

  const setUser = (user: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('access_token', `demo-access-${user.id}`);
    localStorage.setItem('refresh_token', `demo-refresh-${user.id}`);
  };

  const ensureProfile = (userId: string) => {
    if (!profile || profile.userId !== userId) {
      profile = {
        id: `profile-${userId}`,
        userId,
        onboardingCompleted: false,
        currentStep: 1,
        completedSteps: [],
        createdAt: nowIso(),
        updatedAt: nowIso(),
        identification: null,
        emergencyContacts: [],
        background: null,
      };
    }
    return profile;
  };

  const api = {
    async get(url: string): DemoResponse {
      if (url === '/patient/profile') {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        return { data };
      }
      return { data: null };
    },
    async post(url: string, payload?: any): DemoResponse {
      if (url === '/auth/register' || url === '/auth/login') {
        const user = {
          id: crypto.randomUUID(),
          email: payload?.email || 'demo@linki.local',
          roles: [payload?.role || 'PATIENT'],
        };
        setUser(user);
        return { data: makeTokens(user) };
      }

      if (url === '/auth/refresh') {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        return { data: makeTokens(user) };
      }

      if (url.startsWith('/patient/profile/step-1')) {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        data.identification = {
          id: data.identification?.id || crypto.randomUUID(),
          ...payload,
          createdAt: data.identification?.createdAt || nowIso(),
          updatedAt: nowIso(),
        };
        data.currentStep = 1;
        data.completedSteps = Array.from(new Set([...(data.completedSteps || []), 1]));
        data.updatedAt = nowIso();
        return { data: data.identification };
      }

      if (url.startsWith('/patient/profile/step-2')) {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        data.emergencyContacts = (payload?.contacts || []).map((contact: any) => ({
          id: crypto.randomUUID(),
          ...contact,
        }));
        data.currentStep = 2;
        data.completedSteps = Array.from(new Set([...(data.completedSteps || []), 2]));
        data.updatedAt = nowIso();
        return { data: data.emergencyContacts };
      }

      if (url.startsWith('/patient/profile/step-3')) {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        data.background = {
          id: data.background?.id || crypto.randomUUID(),
          ...data.background,
          ...payload,
        };
        data.currentStep = 3;
        data.completedSteps = Array.from(new Set([...(data.completedSteps || []), 3]));
        data.updatedAt = nowIso();
        return { data: data.background };
      }

      if (url.startsWith('/patient/profile/step-4')) {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        data.background = {
          id: data.background?.id || crypto.randomUUID(),
          ...data.background,
          ...payload,
        };
        data.currentStep = 4;
        data.completedSteps = Array.from(new Set([...(data.completedSteps || []), 4]));
        data.updatedAt = nowIso();
        return { data: data.background?.familyHistory || [] };
      }

      if (url.startsWith('/patient/profile/step-5')) {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        data.background = {
          id: data.background?.id || crypto.randomUUID(),
          ...data.background,
          ...payload,
        };
        data.currentStep = 5;
        data.completedSteps = Array.from(new Set([...(data.completedSteps || []), 5]));
        data.updatedAt = nowIso();
        return { data: payload };
      }

      if (url.startsWith('/patient/profile/step-6')) {
        const user = getUser();
        if (!user) return Promise.reject({ response: { status: 401 } });
        const data = ensureProfile(user.id);
        data.background = {
          id: data.background?.id || crypto.randomUUID(),
          ...data.background,
          ...payload,
        };
        data.currentStep = 6;
        data.completedSteps = Array.from(new Set([...(data.completedSteps || []), 6]));
        data.updatedAt = nowIso();
        return { data: payload };
      }

      return { data: null };
    },
    async patch(url: string, payload?: any): DemoResponse {
      return this.post(url, payload);
    },
  } as any;

  return api;
};

const api = DEMO_MODE
  ? createDemoApi()
  : axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

if (!DEMO_MODE) {
  api.interceptors.request.use((config: any) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  api.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem('refresh_token');
          if (refreshToken) {
            const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
              refreshToken,
            });

            localStorage.setItem('access_token', data.accessToken);
            localStorage.setItem('refresh_token', data.refreshToken);

            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            return api(originalRequest);
          }
        } catch {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          if (typeof window !== 'undefined') {
            window.location.href = '/auth/login';
          }
        }
      }

      return Promise.reject(error);
    },
  );
}

export default api;
