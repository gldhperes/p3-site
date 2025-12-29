import { Routes, Route, useLocation } from 'react-router-dom';

import navRoutes from './utils/routes.js';

// PAGES
import Home from './pages/Home.jsx'
import Servicos from './pages/Servicos.jsx';
import Eventos from './pages/Eventos.jsx';
import LiveEvents from './pages/LiveEvents.jsx';
import About from './pages/About.jsx';
import TermosDeUso from './pages/TermosDeUso.jsx';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.jsx';

// COMPONENTS
import Footer from './components/sections/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ContactSection from './components/sections/ContactSection.jsx';


const Layout = () => {

    const location = useLocation();

    const hideContactSection =
        location.pathname === navRoutes.termosdeuso ||
        location.pathname === navRoutes.privacidade;

    return (
        <>
            <Routes>
                <Route path={navRoutes.home} element={<Home />} />
                <Route path={navRoutes.servicos} element={<Servicos />} />
                <Route path={navRoutes.eventos} element={<Eventos />} />
                <Route path={navRoutes.live} element={<LiveEvents />} />
                <Route path={navRoutes.about} element={<About />} />

                <Route path={navRoutes.termosdeuso} element={<TermosDeUso />} />
                <Route path={navRoutes.privacidade} element={<PoliticaPrivacidade />} />
            </Routes>

            {!hideContactSection && <ContactSection />}
            <WhatsAppButton />
            <Footer />
        </>
    )
}

export default Layout