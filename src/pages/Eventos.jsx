import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Camera,

  ArrowRight,
  Phone,
  Mail,
  Clock,
  Video,
  Wifi,

  Monitor,
  Headphones,
  ArrowLeft,
  Columns,

} from 'lucide-react';

// COMPONENTS
import ContactSection from '../components/sections/ContactSection';

// Estilos em CSS Puro (Inline)
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a1628',
    fontFamily: "'Inter', sans-serif",
  },
  heroSection: {
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  heroImage: {
    width: 'full',
    height: 'full',
    objectFit: 'cover',
    opacity: 0.3,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, #0a1628, rgba(10, 22, 40, 0.9), transparent)',
  },
  heroBlob: {
    position: 'absolute',
    top: '10rem',
    right: '5rem',
    width: '24rem',
    height: '24rem',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    zIndex: 1,
  },
  contentContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    position: 'relative',
    zIndex: 10,
    width: '100%',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '9999px',
    padding: '0.5rem 1rem',
    marginBottom: '1.5rem',
  },
  h1: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  p: {
    color: '#9ca3af',
    fontSize: '1.125rem',
    lineHeight: 1.6,
    marginBottom: '2rem',
    maxWidth: '40rem',
  },
  btnPrimary: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    border: 'none',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background 0.3s',
  },
  btnOutline: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.75rem',
    border: '1px solid #4b5563',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background 0.3s',
  },
  card: {
    backgroundColor: '#162a46',
    border: '1px solid #1e3a5a',
    borderRadius: '1rem',
    overflow: 'hidden',
    transition: 'all 0.3s',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '1rem',
  },
  textarea: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    minHeight: '100px',
    resize: 'none',
    marginBottom: '1rem',
  }
};

const eventTypes = [
  { title: 'Shows e Festivais', description: 'Cobertura completa de grandes eventos com múltiplas câmeras', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop' },
  { title: 'Eventos Corporativos', description: 'Segurança discreta e eficiente para convenções e conferências', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop' },
  { title: 'Casamentos e Festas', description: 'Monitoramento elegante sem interferir na celebração', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
  { title: 'Eventos Esportivos', description: 'Câmeras estratégicas para controle de multidões', image: 'https://images.unsplash.com/photo-1461896836934-0c1e2f7c?w=600&h=400&fit=crop' }
];

const features = [
  { icon: Camera, title: 'Câmeras HD/4K', description: 'Equipamentos de última geração com resolução cristalina' },
  { icon: Video, title: 'Gravação Contínua', description: 'Registro completo de todo o evento para análise posterior' },
  { icon: Wifi, title: 'Transmissão em Tempo Real', description: 'Acompanhe tudo ao vivo de qualquer dispositivo' },
  { icon: Monitor, title: 'Central de Monitoramento', description: 'Equipe dedicada acompanhando cada câmera' },
  { icon: Headphones, title: 'Comunicação Integrada', description: 'Rádios e sistema de comunicação com sua equipe' },
  { icon: Clock, title: 'Suporte 24h', description: 'Técnicos disponíveis durante todo o evento' }
];

export default function Eventos() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop"
            alt="Evento"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
          />
          <div style={styles.heroOverlay} />
        </div>

        <div style={styles.heroBlob} />

        <div style={styles.contentContainer}>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >

            {/* Corrija esse style */}
            <Link to={'/'} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgb(147, 197, 253)',
              marginBottom: '2rem',
              transitionProperty: 'color',
              transitionDuration: '150ms',
              textDecoration: 'none'
              }}>


            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            Voltar para Home
          </Link>


          <div style={styles.badge}>

            <Camera size={16} color="#60a5fa" />
            <span style={{ color: '#93c5fd', fontSize: '0.875rem', fontWeight: '500' }}>Segurança Eletrônica para Eventos</span>
          </div>


          <h1 style={styles.h1}>
            Proteção Inteligente Para Seus <span style={{ color: '#60a5fa' }}>Eventos</span>
          </h1>

          <p style={styles.p}>
            Oferecemos soluções completas de monitoramento por câmeras para eventos de todos os portes.
            Tecnologia de ponta para garantir a segurança de seus convidados e patrimônio.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              style={styles.btnPrimary}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </button>
            <button style={styles.btnOutline}>
              <Phone size={20} />
              (85) 3241-4654
            </button>
          </div>
        </motion.div>
    </div>
      </section >

    {/* Services Overview */ }
    < section style = {{ padding: '80px 0', backgroundColor: '#0f1f35' }
}>
  <div style={styles.contentContainer}>
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <span style={{ color: '#60a5fa', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nossos Serviços</span>
      <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>Cobertura Completa Para Qualquer Evento</h2>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      {eventTypes.map((event, index) => (
        <div key={index} style={styles.card}>
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{event.title}</h3>
            <p style={{ color: '#9ca3af' }}>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
      </section >

  {/* Features Section */ }
  < section style = {{ padding: '80px 0' }}>
    <div style={styles.contentContainer}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white' }}>Tecnologia Profissional</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ ...styles.card, padding: '2rem' }}>
            <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: 'rgba(59, 130, 246, 0.2)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyCenter: 'center', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <feature.icon size={28} color="#60a5fa" />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
            <p style={{ color: '#9ca3af' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
      </section >

  {/* Contact Form Section */ }
  < ContactSection />
    </div >
  );
}
