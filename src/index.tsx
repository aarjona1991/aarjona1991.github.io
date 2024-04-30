import React from 'react'
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home } from './pages';

const domNode = document.getElementById('react-app') as HTMLElement;
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path='*' element={<ErrorPage error="404" message="Not Found" />} /> */}
            </Routes>
        </Router>
    </React.StrictMode>
);