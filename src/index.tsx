import React from 'react'
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home, PrivacyPolicy, PrivacyPolicyES, PrivacyPolicyEN } from './pages';
import { LanguageProvider } from './contexts/LanguageContext';

const domNode = document.getElementById('react-app') as HTMLElement;
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/privacy-policy-es" element={<PrivacyPolicyES />} />
                    <Route path="/privacy-policy-en" element={<PrivacyPolicyEN />} />
                    {/* <Route path='*' element={<ErrorPage error="404" message="Not Found" />} /> */}
                </Routes>
            </Router>
        </LanguageProvider>
    </React.StrictMode>
);