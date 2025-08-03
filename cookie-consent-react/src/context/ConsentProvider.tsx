import { useState, useEffect } from "react";
import { ConsentContext } from "./ConsentContext";
import type { ConsentProviderProps } from "../types/ConsentTypes";

export const ConsentProvider = ({ children, services }: ConsentProviderProps) => {
    const defaultConsent: Record<string, boolean> = {};
    services.forEach((s) => {
        defaultConsent[s.key] = !!s.required;
    });
    const [consent, setConsent] = useState<Record<string, boolean>>(defaultConsent);
    const [initialized, setInitialized] = useState<boolean>(false);
    useEffect(() => {
        const stored = localStorage.getItem("cookieConsent");
        if (stored) {
            setConsent(JSON.parse(stored));
        }
        setInitialized(true);
    }, []);

    const updateConsent = (updates: Record<string, boolean>) => {
        const merged = Object.assign({}, consent, updates);
        const newConsent = Object.keys(merged).reduce((acc, key) => {
            acc[key] = !!merged[key];
            return acc;
        }, {} as Record<string, boolean>);
        setConsent(newConsent);
        localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    };
    return (
        <ConsentContext.Provider value={{ consent, updateConsent, initialized, services }}>
            {children}
        </ConsentContext.Provider>
    );
};
