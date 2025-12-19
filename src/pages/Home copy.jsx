import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Camera, 
  Bell, 
  Lock, 
  Zap, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  ChevronRight,
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  ChevronLeft
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicos = [
    {
      icon: Camera,
      titulo: 'Câmeras IP',
      descricao: 'Monitoramento em alta definição com acesso remoto via smartphone e gravação em nuvem.'
    },
    {
      icon: Bell,
      titulo: 'Alarmes Inteligentes',
      descricao: 'Sistemas de alarme com sensores de última geração e notificações instantâneas.'
    },
    {
      icon: Clock,
      titulo: 'Monitoramento 24h',
      descricao: 'Central de monitoramento ativa 24 horas, 7 dias por semana, com resposta imediata.'
    },
    {
      icon: Lock,
      titulo: 'Controle de Acesso',
      descricao: 'Biometria, cartões e senhas para controle total de entrada e saída.'
    },
    {
      icon: Zap,
      titulo: 'Cerca Elétrica',
      descricao: 'Proteção perimetral com cercas elétricas de alta voltagem e alarme integrado.'
    },
    {
      icon: Shield,
      titulo: 'Projetos Customizados',
      descricao: 'Soluções personalizadas para residências, empresas e condomínios.'
    }
  ];

  const diferenciais = [
    { icon: Award, titulo: '+15 Anos', descricao: 'de experiência no mercado' },
    { icon: Users, titulo: '+2.000', descricao: 'clientes protegidos' },
    { icon: Clock, titulo: '24/7', descricao: 'suporte técnico disponível' },
    { icon: CheckCircle, titulo: '100%', descricao: 'satisfação garantida' }
  ];

  const depoimentos = [
    {
      nome: 'Carlos Eduardo',
      cargo: 'Empresário',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      texto: 'A SecureTech transformou a segurança da minha empresa. O monitoramento 24h me dá tranquilidade total para focar no meu negócio.',
      rating: 5
    },
    {
      nome: 'Maria Fernanda',
      cargo: 'Síndica',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      texto: 'Contratamos para o condomínio e a diferença foi imediata. Equipe profissional e atenciosa, recomendo sem hesitar!',
      rating: 5
    },
    {
      nome: 'Roberto Almeida',
      cargo: 'Diretor Comercial',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      texto: 'Tecnologia de ponta e atendimento excepcional. O controle de acesso facilitou muito a gestão da nossa equipe.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % depoimentos.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Retornaremos em breve.');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* CSS Global */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
        }
        
        ::selection {
          background: #0066FF;
          color: white;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0066FF 0%, #00D4FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.15);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 102, 255, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 14px 30px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
        }
        
        input, textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #E2E8F0;
          border-radius: 12px;
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s ease;
          background: white;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #0066FF;
          box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.1);
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 0 40px rgba(37, 211, 102, 0.6); }
        }
      `}</style>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 0',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 48,
              height: 48,
              background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Shield size={28} color="white" />
            </div>
            <div>
              <div style={{ 
                fontSize: 22, 
                fontWeight: 800, 
                color: 'white',
                letterSpacing: '-0.5px'
              }}>
                SecureTech
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Segurança Eletrônica
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40
          }} className="desktop-nav">
            {['Início', 'Serviços', 'Sobre Nós', 'Depoimentos', 'Contato'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Header CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="header-cta">
            <a href="tel:+5511999999999" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'white',
              textDecoration: 'none',
              fontSize: 15,
              fontWeight: 500
            }}>
              <Phone size={18} />
              <span>(11) 99999-9999</span>
            </a>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('contato')}
              style={{ padding: '12px 24px', fontSize: 14 }}
            >
              Orçamento Grátis
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
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16
              }}
            >
              {['Início', 'Serviços', 'Sobre Nós', 'Depoimentos', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: 'inherit'
                  }}
                >
                  {item}
                </button>
              ))}
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('contato')}
                style={{ marginTop: 16, justifyContent: 'center' }}
              >
                Solicitar Orçamento
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="início" style={{
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
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)
          `
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
            <div style={{
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
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: '-2px'
            }}>
              Tecnologia e{' '}
              <span className="gradient-text">Confiança</span>
              {' '}em Segurança Eletrônica
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
                onClick={() => scrollToSection('serviços')}
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

          <motion.div
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

            {/* Floating Card */}
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
          </motion.div>
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

      {/* Serviços Section */}
      <section id="serviços" style={{
        padding: '120px 24px',
        background: '#F5F7FA'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 80 }}
          >
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
              color: '#0066FF',
              padding: '8px 20px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Nossos Serviços
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: '#0A2540',
              marginBottom: 20,
              letterSpacing: '-1px'
            }}>
              Soluções Completas em Segurança
            </h2>
            <p style={{
              fontSize: 18,
              color: '#64748B',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Oferecemos as melhores tecnologias do mercado para proteger 
              sua residência, empresa ou condomínio.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 32
          }}>
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="hover-lift"
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: 36,
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 102, 255, 0.08)'
                }}
              >
                <div style={{
                  width: 72,
                  height: 72,
                  background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24
                }}>
                  <servico.icon size={32} color="#0066FF" />
                </div>
                <h3 style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#0A2540',
                  marginBottom: 12
                }}>
                  {servico.titulo}
                </h3>
                <p style={{
                  fontSize: 16,
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: 20
                }}>
                  {servico.descricao}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#0066FF',
                  fontWeight: 600,
                  fontSize: 15
                }}>
                  Saiba mais <ChevronRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós / Diferenciais */}
      <section id="sobre-nós" style={{
        padding: '120px 24px',
        background: 'white'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center'
          }} className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Equipe SecureTech"
                  style={{
                    width: '100%',
                    height: 500,
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: -30,
                right: -30,
                background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
                borderRadius: 20,
                padding: 28,
                color: 'white'
              }}>
                <div style={{ fontSize: 48, fontWeight: 800 }}>+15</div>
                <div style={{ fontSize: 16, opacity: 0.9 }}>Anos de experiência</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                color: '#0066FF',
                padding: '8px 20px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Sobre Nós
              </span>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                color: '#0A2540',
                marginBottom: 24,
                letterSpacing: '-1px',
                lineHeight: 1.2
              }}>
                Proteção de Qualidade Para Quem Você Ama
              </h2>
              <p style={{
                fontSize: 18,
                color: '#64748B',
                lineHeight: 1.8,
                marginBottom: 40
              }}>
                A SecureTech nasceu da paixão por tecnologia e do compromisso 
                em oferecer soluções de segurança que realmente funcionam. 
                Com mais de 15 anos no mercado, já protegemos milhares de 
                famílias e empresas em todo o Brasil.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 24
              }}>
                {diferenciais.map((item, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: 20,
                      background: '#F5F7FA',
                      borderRadius: 16
                    }}
                  >
                    <div style={{
                      width: 52,
                      height: 52,
                      background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.icon size={24} color="#0066FF" />
                    </div>
                    <div>
                      <div style={{
                        fontSize: 24,
                        fontWeight: 800,
                        color: '#0A2540'
                      }}>
                        {item.titulo}
                      </div>
                      <div style={{
                        fontSize: 14,
                        color: '#64748B'
                      }}>
                        {item.descricao}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" style={{
        padding: '120px 24px',
        background: 'linear-gradient(135deg, #0A2540 0%, #0D3A5C 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <span style={{
              display: 'inline-block',
              background: 'rgba(0, 212, 255, 0.2)',
              color: '#00D4FF',
              padding: '8px 20px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Depoimentos
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-1px'
            }}>
              O Que Nossos Clientes Dizem
            </h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 24,
                  padding: 48,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 6,
                  marginBottom: 24
                }}>
                  {[...Array(depoimentos[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={24} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <p style={{
                  fontSize: 24,
                  color: 'white',
                  lineHeight: 1.7,
                  marginBottom: 32,
                  fontStyle: 'italic',
                  fontWeight: 300
                }}>
                  "{depoimentos[currentTestimonial].texto}"
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16
                }}>
                  <img
                    src={depoimentos[currentTestimonial].foto}
                    alt={depoimentos[currentTestimonial].nome}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '3px solid rgba(0, 212, 255, 0.5)'
                    }}
                  />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'white'
                    }}>
                      {depoimentos[currentTestimonial].nome}
                    </div>
                    <div style={{
                      fontSize: 14,
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}>
                      {depoimentos[currentTestimonial].cargo}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              style={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              className="testimonial-nav"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              style={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
              className="testimonial-nav"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              marginTop: 32
            }}>
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: index === currentTestimonial ? 32 : 12,
                    height: 12,
                    borderRadius: 100,
                    background: index === currentTestimonial ? '#00D4FF' : 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" style={{
        padding: '120px 24px',
        background: '#F5F7FA'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: 80,
            alignItems: 'start'
          }} className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                color: '#0066FF',
                padding: '8px 20px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Fale Conosco
              </span>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                color: '#0A2540',
                marginBottom: 20,
                letterSpacing: '-1px',
                lineHeight: 1.2
              }}>
                Solicite Seu Orçamento Gratuito
              </h2>
              <p style={{
                fontSize: 18,
                color: '#64748B',
                lineHeight: 1.8,
                marginBottom: 40
              }}>
                Entre em contato conosco e descubra a melhor solução 
                de segurança para suas necessidades. Nossa equipe está 
                pronta para atendê-lo!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { icon: Phone, label: 'Telefone', value: '(11) 99999-9999', href: 'tel:+5511999999999' },
                  { icon: Mail, label: 'E-mail', value: 'contato@securetech.com.br', href: 'mailto:contato@securetech.com.br' },
                  { icon: MapPin, label: 'Endereço', value: 'Av. Paulista, 1000 - São Paulo, SP', href: '#' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: 20,
                      background: 'white',
                      borderRadius: 16,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0, 102, 255, 0.08)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.borderColor = '#0066FF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.08)';
                    }}
                  >
                    <div style={{
                      width: 52,
                      height: 52,
                      background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <item.icon size={24} color="#0066FF" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, color: '#64748B', marginBottom: 4 }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: '#0A2540' }}>
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'white',
                  borderRadius: 24,
                  padding: 48,
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
                }}
              >
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: '#0A2540',
                  marginBottom: 32
                }}>
                  Preencha o formulário
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0A2540',
                      marginBottom: 8
                    }}>
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      required
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#0A2540',
                        marginBottom: 8
                      }}>
                        E-mail
                      </label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#0A2540',
                        marginBottom: 8
                      }}>
                        Telefone
                      </label>
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0A2540',
                      marginBottom: 8
                    }}>
                      Mensagem
                    </label>
                    <textarea
                      placeholder="Como podemos ajudá-lo?"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '18px 32px',
                      fontSize: 17,
                      marginTop: 8
                    }}
                  >
                    Enviar Mensagem
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0A2540',
        padding: '80px 24px 32px'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 48,
            marginBottom: 60
          }}>
            {/* Logo e Descrição */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={28} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>SecureTech</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Segurança Eletrônica
                  </div>
                </div>
              </div>
              <p style={{
                fontSize: 15,
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.7
              }}>
                Soluções completas em segurança eletrônica para 
                residências, empresas e condomínios.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#0066FF'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                  >
                    <Icon size={20} color="white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 style={{
                fontSize: 16,
                fontWeight: 700,
                color: 'white',
                marginBottom: 24
              }}>
                Links Rápidos
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Início', 'Serviços', 'Sobre Nós', 'Depoimentos', 'Contato'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: 15,
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color 0.3s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00D4FF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h4 style={{
                fontSize: 16,
                fontWeight: 700,
                color: 'white',
                marginBottom: 24
              }}>
                Nossos Serviços
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Câmeras IP', 'Alarmes Inteligentes', 'Monitoramento 24h', 'Controle de Acesso', 'Cerca Elétrica'].map((item) => (
                  <span
                    key={item}
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: 15
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Contato */}
            <div>
              <h4 style={{
                fontSize: 16,
                fontWeight: 700,
                color: 'white',
                marginBottom: 24
              }}>
                Contato
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: Phone, text: '(11) 99999-9999' },
                  { icon: Mail, text: 'contato@securetech.com.br' },
                  { icon: MapPin, text: 'Av. Paulista, 1000\nSão Paulo, SP' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <item.icon size={20} color="#00D4FF" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: 15,
                      whiteSpace: 'pre-line'
                    }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 32,
            textAlign: 'center'
          }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 14
            }}>
              © 2024 SecureTech Segurança Eletrônica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 64,
          height: 64,
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'transform 0.3s ease',
          animation: 'pulse-glow 2s infinite'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={32} color="white" fill="white" />
      </a>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid, .about-grid, .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          
          .hero-image {
            order: -1;
          }
          
          .testimonial-nav {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-nav, .header-cta {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          section {
            padding: 80px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}