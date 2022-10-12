import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import './index.css';
import './Fonts/SourceSansPro-SemiBold.ttf';
import IndexGrid from "./Components/IndexGrid.js";
import ResumeGrid from "./Components/ResumeGrid.js";
import ProjectGrid from './Components/ProjectsGrid.js';

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<IndexGrid />} />
                <Route path="projects" element={<ProjectGrid />} />
                < Route path="resume" element={<ResumeGrid />} />
                <Route path="about-me" element={""} />
                <Route path="*" element={"" } />
             </Route>
        </Routes>
    </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


