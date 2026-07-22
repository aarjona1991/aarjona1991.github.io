import React from 'react'
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home, PrivacyPolicy, PrivacyPolicyES, PrivacyPolicyEN } from './pages';
import { LanguageProvider } from './contexts/LanguageContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const domNode = document.getElementById('react-app') as HTMLElement;
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <LanguageProvider>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/privacy-policy-es" element={<PrivacyPolicyES />} />
                        <Route path="/privacy-policy-en" element={<PrivacyPolicyEN />} />
                        {/* <Route path='*' element={<ErrorPage error="404" message="Not Found" />} /> */}
                    </Routes>
                </Router>
            </QueryClientProvider>
        </LanguageProvider>
    </React.StrictMode>
);