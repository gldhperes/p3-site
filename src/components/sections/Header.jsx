import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Phone, Menu, X } from 'lucide-react';

// IMAGES
import p3logo from '../../assets/P3-logo1.png';
// 
// COMPONENTS
import BadgeComponent from '../BadgeComponent.jsx';

// UTILS
import scrollToSectionFunc from '../../utils/scrollToSection.js';
import contacts from '../../utils/contacts.js';
import navItems from '../../utils/navItems.js';
import navRoutes from '../../utils/routes.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [_navItems, setNavItems] = useState(navItems);

  const location = useLocation();
  // console.log(location.pathname);




  useEffect(() => {

    if (location.pathname !== '/') {
      setNavItems([]);
      scrollToSectionFunc('top');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
  if (section === navRoutes.eventos) {
    window.location.href = navRoutes.eventos.toLowerCase();
  } else {
    setIsMenuOpen(false);

    // espera o menu fechar (tempo da animação)
    setTimeout(() => {
      scrollToSectionFunc(section);
    }, 300); // ajuste conforme sua animação
  }
};

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        // right: 0,
        zIndex: 1000,
        padding: '16px 8px',
        background: isScrolled ? 'rgba(10, 37, 64, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
          <a href={navRoutes.home}>
            <img src={p3logo} alt="Logo"
              style={{
                width: "240px",
                height: "80px",
                objectFit: "contain"
              }} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
          gap: 25
        }} className="desktop-nav">
          {_navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.href.toLowerCase())}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                position: 'relative',
                textTransform: 'uppercase',

              }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              {item.text}

              {item?.badge === true && <BadgeComponent size={12} top={"-5px"} right={"-12px"} />}
            </button>
          ))}
        </nav>

        {/* Header CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="header-cta">
          <a href={contacts[0].href} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'white',
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 500
          }}>
            <Phone size={18} />
            <span>{contacts[0].text}</span>
          </a>
          <button
            className="btn-primary"
            onClick={() => handleNavClick('contato')}
            style={{ padding: '12px 24px', fontSize: 14 }}
          >
            Solicite um Orçamento
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: 8
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10, 37, 64, 0.98)',
              borderRadius: 15,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginTop: 10,
            }}
          >
            {_navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href.toLowerCase())}
                style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 12, color: 'rgba(255,255,255,0.7)', cursor: 'pointer', position: 'relative' }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >
                {item?.badge === true && <BadgeComponent size={12} top={"-5px"} left={"60px"} />}
                {item.text}
              </button>
            ))}


            <button
              className="btn-primary"
              onClick={() => handleNavClick('contato')}
              style={{ marginTop: 16, justifyContent: 'center' }}
            >
              Solicitar Orçamento
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;