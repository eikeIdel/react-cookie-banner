import { createContext } from "react";
import type { ConsentContextValue } from "../types/ConsentTypes";

export const ConsentContext = createContext<ConsentContextValue | undefined>(undefined);
