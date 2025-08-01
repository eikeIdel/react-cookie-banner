import './App.css';
import {
  ConsentProvider,
  CookieBanner,
  ConsentGate,
} from '@eked/cookie-consent-react';

function App() {
  return (
    <>
      <ConsentProvider services={[
        {key: 'functional', label: 'Functional', required: true},
        {key: 'analytics', label: 'Analytics', required: false},
        {key: 'marketing', label: 'Marketing', required: false},
        ]}>
        <CookieBanner/>
        <ConsentGate service="functional">
        <h1>Hello</h1>
        </ConsentGate>
        <ConsentGate service="analytics">
          <p>This content is only visible if you consent to analytics cookies.</p>
        </ConsentGate>
        <ConsentGate service="marketing">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7fd81%3A0xf577c8b6e6e6e6e6!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1620212345678!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ConsentGate>
      </ConsentProvider>
    </>
  );
}

export default App;
