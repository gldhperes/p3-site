import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Camera,
  ArrowRight,
  Phone,
  Clock,
  Video,
  Wifi,
  Monitor,
  Headphones,
  ArrowLeft,
  MapPin,
  Eye,
  Check,
} from 'lucide-react';

// COMPONENTS
import ContactSection from '../components/sections/ContactSection';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a1628',
    fontFamily: "'Inter', sans-serif",
    color: '#ffffff',
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
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, #0a1628, rgba(10, 22, 40, 0.9), transparent)',
  },

  iconSize: {
    width: '2rem',
    height: '2rem',
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
    boxSizing: 'border-box',
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
    marginTop: 0,
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
    textDecoration: 'none',
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
    textDecoration: 'none',
  },
  sectionPadding: {
    padding: '80px 0',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#162a46',
    border: '1px solid #1e3a5a',
    borderRadius: '1rem',
    overflow: 'hidden',
    transition: 'all 0.3s',
  },
  iconWrapper: {
    width: '3.5rem',
    height: '3.5rem',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  stepCard: {
    textAlign: 'center',
    position: 'relative',
  },
  stepIconWrapper: {
    width: '5rem',
    height: '5rem',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    position: 'relative',
  },
  stepBadge: {
    position: 'absolute',
    top: '-0.5rem',
    right: '-0.5rem',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#2563eb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
  },
  checkWrapper: {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '0.25rem',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },
  galleryItem: {
    borderRadius: '1rem',
    overflow: 'hidden',
    height: '250px',
  },
  galleryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  }
};


const Icons = [
  <Phone style={{ ...styles.iconSize }} />,
  <MapPin style={{ ...styles.iconSize }} />,
  <Camera style={{ ...styles.iconSize }} />,
  <Eye style={{ ...styles.iconSize }} />
];

const benefits = [
  "Equipamentos de última geração",
  "Monitoramento em tempo real",
  "Equipe técnica especializada",
  "Suporte 24/7 durante o evento",
  "Gravação em alta definição",
  "Conectividade redundante"
];

const galleryImages = [
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop'
];


const steps = [
  { step: '01', title: 'Contato', description: 'Entre em contato e nos conte sobre seu evento', icon: Phone },
  { step: '02', title: 'Planejamento', description: 'Visitamos o local e planejamos a cobertura', icon: MapPin },
  { step: '03', title: 'Instalação', description: 'Montamos os equipamentos antes do evento', icon: Camera },
  { step: '04', title: 'Monitoramento', description: 'Acompanhamos tudo durante o evento', icon: Eye }
];


const eventTypes = [
  { title: 'Shows e Festivais', description: 'Cobertura completa de grandes eventos com múltiplas câmeras', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop' },
  { title: 'Eventos Corporativos', description: 'Segurança discreta e eficiente para convenções e conferências', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop' },
  { title: 'Casamentos e Festas', description: 'Monitoramento elegante sem interferir na celebração', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
  { title: 'Eventos Esportivos', description: 'Câmeras estratégicas para controle de multidões', image: 'https://images.unsplash.com/photo-1461896836934-0c1e2f7c?w=600&h=400&fit=crop' }
];

const features = [
  { icon: <Camera style={{ ...styles.iconSize }} />, title: 'Câmeras HD/4K', description: 'Equipamentos de última geração com resolução cristalina' },
  { icon: <Video style={{ ...styles.iconSize }} /> , title: 'Gravação Contínua', description: 'Registro completo de todo o evento para análise posterior' },
  { icon: <Wifi style={{ ...styles.iconSize }} />, title: 'Transmissão em Tempo Real', description: 'Acompanhe tudo ao vivo de qualquer dispositivo' },
  { icon: <Monitor style={{ ...styles.iconSize }} />, title: 'Central de Monitoramento', description: 'Equipe dedicada acompanhando cada câmera' },
  { icon: <Headphones style={{ ...styles.iconSize }} />, title: 'Comunicação Integrada', description: 'Rádios e sistema de comunicação com sua equipe' },
  { icon: <Clock style={{ ...styles.iconSize }} />, title: 'Suporte 24h', description: 'Técnicos disponíveis durante todo o evento' }
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
          <div style={{ maxWidth: '800px' }}>
            <Link to={'/'} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgb(147, 197, 253)',
              marginBottom: '2rem',
              textDecoration: 'none',
              fontSize: '1rem'
            }}>
              <ArrowLeft size={16} />
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
              <button style={styles.btnPrimary}>
                Solicitar Orçamento
                <ArrowRight size={20} />
              </button>
              <button style={styles.btnOutline}>
                <Phone size={20} />
                (85) 3241-4654
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ ...styles.sectionPadding, backgroundColor: '#0f1f35' }}>
        <div style={styles.contentContainer}>
          <div style={styles.sectionTitle}>
            <span style={{ color: '#60a5fa', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nossos Serviços</span>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>Cobertura Completa Para Qualquer Evento</h2>
          </div>

          <div style={styles.grid3}>
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
      </section>

      {/* Technology Features */}
      <section style={styles.sectionPadding}>
        <div style={styles.contentContainer}>
          <div style={styles.sectionTitle}>
            <h2 style={{ fontSize: '2.5rem', color: 'white' }}>Tecnologia Profissional</h2>
          </div>

          <div style={styles.grid4}>
            {features.map((feature, index) => {

              return (
                <div key={index} style={{ ...styles.card, padding: '2rem' }}>
                  <div style={styles.iconWrapper}>
                    {feature.icon}
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.125rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
                  <p style={{ color: '#9ca3af' }}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ ...styles.sectionPadding, backgroundColor: '#0f1f35' }}>
        <div style={styles.contentContainer}>
          <div style={styles.sectionTitle}>
            <span style={{ color: '#60a5fa', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Como Funciona</span>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>Processo Simples e Eficiente</h2>
          </div>

          <div style={styles.grid4}>
            {steps.map((item, index) => {
              return (
                <div key={index} style={styles.stepCard}>
                  <div style={styles.stepIconWrapper}>

                    {Icons[index]}

                    <div style={styles.stepBadge}>{item.step}</div>
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#9ca3af' }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.sectionPadding}>
        <div style={styles.contentContainer}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
                alt="Monitoramento"
                style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '-1.5rem',
                backgroundColor: '#2563eb',
                padding: '1.5rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Camera size={32} color="white" />
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>+50</div>
                  <div style={{ color: '#bfdbfe', fontSize: '0.875rem' }}>Câmeras Disponíveis</div>
                </div>
              </div>
            </div>

            <div>
              <span style={{ color: '#60a5fa', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Diferenciais</span>
              <h2 style={{ fontSize: '2.5rem', color: 'white', margin: '1rem 0 2rem' }}>Por Que Nos Escolher?</h2>

              <div>
                {benefits.map((benefit, index) => (
                  <div key={index} style={styles.benefitItem}>
                    <div style={styles.checkWrapper}>
                      <Check size={14} color="#60a5fa" />
                    </div>
                    <span style={{ color: '#d1d5db', fontSize: '1.125rem' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ ...styles.sectionPadding, backgroundColor: '#0f1f35' }}>
        <div style={styles.contentContainer}>
          <div style={styles.sectionTitle}>
            <span style={{ color: '#60a5fa', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Galeria</span>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginTop: '1rem' }}>Nossos Equipamentos em Ação</h2>
          </div>

          <div style={styles.galleryGrid}>
            {galleryImages.map((img, index) => (
              <div key={index} style={styles.galleryItem}>
                <img src={img} alt={`Galeria ${index}`} style={styles.galleryImg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
