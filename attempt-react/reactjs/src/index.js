import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import './index.scss';
import './Fonts/SourceSansPro-SemiBold.ttf';
import Index from "./Pages/IndexPage.js";
import Resume from "./Pages/Resume.jsx";
import ProjectsPage from './Pages/ProjectsPage.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import DoesNotExist from './Pages/DoesNotExist.js';
import IndProjects from './Pages/IndProjects';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Ryan Smith - Portfolio</title>
            </Helmet>
        <BrowserRouter className="nav-router">
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Index />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route exact path='/:id' exact element={<IndProjects />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="about-me" element={<AboutMe />} />
                    <Route path="*" element={<DoesNotExist /> } />
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


