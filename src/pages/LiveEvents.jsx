import { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import navRoutes from '../utils/routes';
import { ArrowLeft } from 'lucide-react';
import LiveBadge from '../components/LiveBadge';

const eventos = [
    {
        id: 1,
        nome: 'Festival de Verão 2024',
        local: 'Parque Ibirapuera - São Paulo',
        status: 'ao_vivo',
        videoUrl: '', // URL do stream será adicionada aqui
        thumbnail: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop'
    },
    {
        id: 2,
        nome: 'Conferência Tech Summit',
        local: 'Centro de Convenções - Rio de Janeiro',
        status: 'ao_vivo',
        videoUrl: '',
        thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop'
    },
    {
        id: 3,
        nome: 'Show Sertanejo',
        local: 'Arena José Miguel - Fortaleza',
        status: 'ao_vivo',
        videoUrl: '',
        thumbnail: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop'
    },
    {
        id: 4,
        nome: 'Casamento Marina & João',
        local: 'Hotel Fasano - São Paulo',
        status: 'offline',
        videoUrl: '',
        thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop'
    }
];


const styles = {
    container: {
        minHeight: '100vh',
        background: '#0a1628',
        paddingTop: '80px'
    },
    hero: {
        position: 'relative',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0a1628 100%)',
        overflow: 'hidden'
    },
    heroBlur1: {
        position: 'absolute',
        top: '20px',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'rgba(59, 130, 246, 0.15)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
    },
    heroBlur2: {
        position: 'absolute',
        bottom: '20px',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'rgba(239, 68, 68, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
    },
    heroContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(239, 68, 68, 0.2)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '50px',
        padding: '8px 16px',
        marginBottom: '24px'
    },
    liveDot: {
        width: '8px',
        height: '8px',
        background: '#ef4444',
        borderRadius: '50%',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    badgeText: {
        color: '#fca5a5',
        fontSize: '14px',
        fontWeight: '600',
        margin: 0
    },
    h1: {
        fontSize: 'clamp(32px, 6vw, 56px)',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '16px',
        lineHeight: '1.2'
    },
    subtitle: {
        fontSize: '18px',
        color: '#9ca3af',
        maxWidth: '600px',
        lineHeight: '1.6',
        margin: 0
    },
    mainSection: {
        padding: '60px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
    },
    sectionHeader: {
        marginBottom: '40px'
    },
    sectionTitle: {
        fontSize: '14px',
        color: '#60a5fa',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        marginBottom: '12px'
    },
    sectionSubtitle: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#ffffff',
        margin: 0
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '24px',
        '@media (maxWidth: 768px)': {
            gridTemplateColumns: '1fr'
        }
    },
    eventCard: {
        background: '#162a46',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #1e3a5a',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    eventCardHover: {
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        borderColor: '#3b82f6'
    },
    videoContainer: {
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 aspect ratio
        background: '#000',
        overflow: 'hidden'
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    thumbnail: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    liveIndicator: {
        position: 'absolute',
        top: '16px',
        left: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(239, 68, 68, 0.95)',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    eventInfo: {
        padding: '20px'
    },
    eventName: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '8px',
        lineHeight: '1.3'
    },
    eventLocation: {
        fontSize: '14px',
        color: '#9ca3af',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        margin: 0
    },
    offlineBadge: {
        position: 'absolute',
        top: '16px',
        left: '16px',
        background: 'rgba(107, 114, 128, 0.95)',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    modal: {
        background: '#162a46',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '1200px',
        maxHeight: '90vh',
        overflow: 'auto',
        border: '1px solid #1e3a5a'
    },
    modalHeader: {
        padding: '24px',
        borderBottom: '1px solid #1e3a5a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#fff',
        margin: 0
    },
    closeButton: {
        background: 'transparent',
        border: 'none',
        color: '#9ca3af',
        fontSize: '28px',
        cursor: 'pointer',
        padding: '0',
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        transition: 'all 0.2s'
    },
    modalVideo: {
        width: '100%',
        aspectRatio: '16/9',
        background: '#000'
    },
    modalInfo: {
        padding: '24px'
    },
};

const LiveEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);



    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroBlur1} />
                <div style={styles.heroBlur2} />

                <div style={styles.heroContent}>
                    <Link to={navRoutes.eventos} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'rgb(147, 197, 253)',
                        marginBottom: '2rem',
                        textDecoration: 'none',
                        fontSize: '1rem'
                    }}>
                        <ArrowLeft size={16} />
                        Voltar para Eventos
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={styles.badge}>
                            <div style={styles.liveDot} />
                            <p style={styles.badgeText}>Transmissão ao Vivo</p>
                        </div>

                        <h1 style={styles.h1}>Eventos ao Vivo</h1>
                        <p style={styles.subtitle}>
                            Acompanhe em tempo real os eventos monitorados por nossas câmeras de segurança profissionais.
                            Transmissão em alta definição 24/7.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section style={styles.mainSection}>
                <div style={styles.sectionHeader}>
                    <p style={styles.sectionTitle}>Ao Vivo Agora</p>
                    <h2 style={styles.sectionSubtitle}>Transmissões Ativas</h2>
                </div>



                <div style={styles.grid}>
                    {eventos.map((evento, index) => (
                        <motion.div
                            key={evento.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={styles.eventCard}
                            onMouseEnter={(e) => {
                                Object.assign(e.currentTarget.style, styles.eventCardHover);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#1e3a5a';
                            }}
                            onClick={() => setSelectedEvent(evento)}
                        >



                            {/* Video/Thumbnail Container */}
                            <div style={styles.videoContainer}>
                                {evento.videoUrl ? (
                                    <video
                                        style={styles.video}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={evento.videoUrl} type="application/x-mpegURL" />
                                        {/* Para RTSP convertido para HLS */}
                                        {/* ou type="video/mp4" para streams MP4 */}
                                    </video>
                                ) : (
                                    <img
                                        src={evento.thumbnail}
                                        alt={evento.nome}
                                        style={styles.thumbnail}
                                    />
                                )}

                                {evento.status === 'ao_vivo' ? (
                                    <LiveBadge />
                                ) : (
                                    <div style={styles.offlineBadge}>OFFLINE</div>
                                )}
                            </div>

                            {/* Event Info */}
                            <div style={styles.eventInfo}>

                                <h3 style={styles.eventName}>{evento.nome}</h3>
                                <p style={styles.eventLocation}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {evento.local}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Modal para visualização em tela cheia */}
            {selectedEvent && (
                <motion.div
                    style={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedEvent(null)}
                >
                    <motion.div
                        style={styles.modal}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={styles.modalHeader}>
                            <h2 style={styles.modalTitle}>{selectedEvent.nome}</h2>
                            <button
                                style={styles.closeButton}
                                onClick={() => setSelectedEvent(null)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#9ca3af';
                                }}
                            >
                                ×
                            </button>
                        </div>

                        <video
                            style={styles.modalVideo}
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src={selectedEvent.videoUrl || selectedEvent.thumbnail} type="application/x-mpegURL" />
                            {/* Placeholder: quando videoUrl estiver disponível, o stream será exibido aqui */}
                        </video>

                        <div style={styles.modalInfo}>
                            <p style={styles.eventLocation}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {selectedEvent.local}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* CSS Animations */}
            <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
        </div>
    );
}

export default LiveEvents;