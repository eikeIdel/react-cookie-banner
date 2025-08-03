export interface ConsentService {
  key: string;
  label: string;
  required?: boolean;
}

export interface ConsentProviderProps {
  children: React.ReactNode;
  services: ConsentService[];
}

export type ConsentMap = Record<string, boolean>;

export interface ConsentContextValue {
  consent: ConsentMap;
  updateConsent: (updates: Record<string, boolean>) => void;
  initialized: boolean;
  services: ConsentService[];
}

export interface ConsentGateProps {
  service: string;
  fallback?: React.ReactNode | string;
  children: React.ReactNode;
}
