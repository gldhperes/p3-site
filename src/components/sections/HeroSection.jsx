import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';

import Tecnico_img from '../../assets/tecnico.jpg';

// UTILS
import navItems from '../../utils/navItems.js';



const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={navItems[0].href} style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A2540 0%, #0D3A5C 50%, #0A2540 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>

      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        // backgroundImage: `
        //   radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
        //   radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)
        // `
        backgroundImage: `url(${Tecnico_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        filter: 'blur(5px)'
      }} />

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.5
      }} />

      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '120px 24px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }} className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0, 102, 255, 0.2)',
            padding: '8px 16px',
            borderRadius: 100,
            marginBottom: 24
          }}>
            <div style={{
              width: 8,
              height: 8,
              background: '#00D4FF',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ color: '#00D4FF', fontSize: 14, fontWeight: 500 }}>
              Proteção 24 horas por dia
            </span>
          </div> */}

          <h1 style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-2px',
            fontStyle: 'uppercase'
          }}>
            Protegendo{' '}
            <span className="gradient-text">seu patrimônio</span>
            {' '}24h por dia
          </h1>

          <p style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 540
          }}>
            Proteja o que é mais importante para você com soluções inteligentes
            de segurança. Monitoramento, câmeras e alarmes com a mais alta tecnologia.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contato')}
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection('servicos')}
            >
              Conheça os Serviços
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'flex',
            gap: 32,
            marginTop: 60,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            {[
              { value: '+15', label: 'Anos de Experiência' },
              { value: '+2k', label: 'Clientes Protegidos' },
              { value: '24/7', label: 'Monitoramento' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#00D4FF',
                  letterSpacing: '-1px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 4
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
          className="hero-image"
        >
          <div style={{
            position: 'relative',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
              alt="Sistema de segurança moderno"
              style={{
                width: '100%',
                height: 500,
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(10, 37, 64, 0.4) 100%)'
            }} />
          </div>

          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              background: 'white',
              borderRadius: 16,
              padding: 20,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: 16
            }}
          >
            <div style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Camera size={28} color="white" />
            </div>
            <div>
              <div style={{ fontSize: 14, color: '#64748B' }}>Câmeras Ativas</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#0A2540' }}>2.847</div>
            </div>
          </motion.div>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}
      >
        <div style={{
          width: 30,
          height: 50,
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: 20,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 8
        }}>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 6,
              height: 6,
              background: '#00D4FF',
              borderRadius: '50%'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;