import { useCookieConsent } from "../context/useCookieConsent";
import { ConsentGateProps } from "../types/ConsentTypes";

const ConsentGate = ({ service, fallback, children }: ConsentGateProps) => {
    const { consent } = useCookieConsent();
    if (consent[service]) return children;
    return (
        fallback || (
            <div className="bg-gray-100 p-4 text-center text-sm">
                Der Dienst <strong>{service}</strong> wurde nicht aktiviert.
            </div>
        )
    );
};
export default ConsentGate;
