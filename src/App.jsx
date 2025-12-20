import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './utils/routes.js';

// PAGES
import Home from './pages/Home.jsx'
import Servicos from './pages/Servicos.jsx';
import Eventos from './pages/Eventos.jsx';

// COMPONENTS
import Header from './components/sections/Header.jsx';
import Footer from './components/sections/Footer.jsx';
import WhatsAppButton from './components/sections/WhatsAppButton.jsx';
// import GlobalStyles from './components/sections/GlobalStyles.jsx';


function App() {


  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>


      {/* <GlobalStyles /> */}

      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.servicos} element={<Servicos />} />
          <Route path={routes.eventos} element={<Eventos />} />

        </Routes>

        <WhatsAppButton />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
