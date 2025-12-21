import { BrowserRouter, Routes, Route } from 'react-router-dom';
import navRoutes from './utils/routes.js';

// PAGES
import Home from './pages/Home.jsx'
import Servicos from './pages/Servicos.jsx';
import Eventos from './pages/Eventos.jsx';

// COMPONENTS
import Footer from './components/sections/Footer.jsx';
import WhatsAppButton from './components/sections/WhatsAppButton.jsx';


function App() {


  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>


      {/* <GlobalStyles /> */}

      <BrowserRouter>
        <Routes>
          <Route path={navRoutes.home} element={<Home />} />
          <Route path={navRoutes.servicos} element={<Servicos />} />
          <Route path={navRoutes.eventos} element={<Eventos />} />

        </Routes>

        <WhatsAppButton />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
