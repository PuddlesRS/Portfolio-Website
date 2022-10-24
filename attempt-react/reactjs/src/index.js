import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import './index.scss';
import './Fonts/SourceSansPro-SemiBold.ttf';
import Index from "./Pages/IndexPage.js";
import Resume from "./Pages/Resume.jsx";
import Projects from './Pages/Projects.jsx';
import AboutMe from './Pages/AboutMe.jsx';

function Grid()
{
    return (
        <>
            <div className="grid-container">
                <App />
            </div>
        </>
    )
}

export default function App() {
    return (
    <>
        <BrowserRouter className="nav-router">
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Index />} />
                    <Route path="projects" element={<Projects />} />
                    < Route path="resume" element={<Resume />} />
                    <Route path="about-me" element={<AboutMe  />} />
                    <Route path="*" element={"" } />
                 </Route>
            </Routes>
        </BrowserRouter>
    </>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Grid />
    </React.StrictMode>
);


