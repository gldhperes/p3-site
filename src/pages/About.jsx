import { motion } from 'framer-motion';
import Header from '../components/sections/Header';


const styles = {
  container: {
    minHeight: '100vh',
    background: '#0a1628',
  },
  hero: {
    position: 'relative',
    padding: '180px 20px 60px',
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
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none'
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
    textAlign: 'center'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(59, 130, 246, 0.2)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '50px',
    padding: '8px 16px',
    marginBottom: '24px'
  },
  badgeText: {
    color: '#60a5fa',
    fontSize: '14px',
    fontWeight: '600',
    margin: 0
  },
  h1: {
    fontSize: 'clamp(36px, 6vw, 56px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '16px',
    lineHeight: '1.2'
  },
  subtitle: {
    fontSize: '18px',
    color: '#9ca3af',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  mainSection: {
    padding: '80px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  contentBlock: {
    marginBottom: '80px'
  },
  sectionTitle: {
    fontSize: '14px',
    color: '#60a5fa',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '16px'
  },
  sectionHeading: {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '32px',
    lineHeight: '1.2'
  },
  paragraph: {
    fontSize: '17px',
    color: '#d1d5db',
    lineHeight: '1.8',
    marginBottom: '20px'
  },
  highlight: {
    color: '#60a5fa',
    fontWeight: '600'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '48px'
  },
  card: {
    background: '#162a46',
    border: '1px solid #1e3a5a',
    borderRadius: '16px',
    padding: '32px',
    transition: 'all 0.3s ease'
  },
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    borderColor: '#3b82f6'
  },
  cardIcon: {
    width: '48px',
    height: '48px',
    background: 'rgba(59, 130, 246, 0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    fontSize: '24px'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '12px'
  },
  cardText: {
    fontSize: '16px',
    color: '#9ca3af',
    lineHeight: '1.6',
    margin: 0
  },
  valuesList: {
    listStyle: 'none',
    padding: 0,
    margin: '32px 0 0 0'
  },
  valueItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '20px',
    fontSize: '17px',
    color: '#d1d5db'
  },
  checkIcon: {
    width: '24px',
    height: '24px',
    background: 'rgba(34, 197, 94, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px'
  },
  differentialsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginTop: '40px'
  },
  differentialItem: {
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '12px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'all 0.3s ease'
  },
  differentialIcon: {
    fontSize: '28px',
    flexShrink: 0
  },
  differentialText: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1.4',
    margin: 0
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#60a5fa',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '32px',
    transition: 'color 0.2s'
  }
};

const About = () => {

  return (

    <div style={styles.container}>
      < Header />
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBlur1} />
        <div style={styles.heroBlur2} />

        <div style={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.badge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <p style={styles.badgeText}>P3 Segurança Eletrônica</p>
            </div>

            <h1 style={styles.h1}>Quem Somos</h1>
            <p style={styles.subtitle}>
              Proteção, tecnologia e confiança. Conheça nossa história, valores e o compromisso
              que mantemos com a segurança de nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.mainSection}>
        {/* Nossa História */}
        <motion.div
          style={styles.contentBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={styles.sectionTitle}>Nossa História</p>
          <h2 style={styles.sectionHeading}>Como Tudo Começou</h2>

          <p style={styles.paragraph}>
            A <span style={styles.highlight}>P3 SEGURANÇA ELETRÔNICA</span> nasceu da necessidade de oferecer soluções mais
            eficientes, confiáveis e acessíveis em proteção patrimonial e monitoramento eletrônico.
            Desde o início, nosso propósito sempre foi claro: <span style={styles.highlight}>proteger pessoas, patrimônios e
              negócios com tecnologia, inteligência e compromisso</span>.
          </p>

          <p style={styles.paragraph}>
            Fundada por profissionais com experiência no setor de segurança privada, a empresa
            surgiu para atender a um mercado cada vez mais exigente, que demanda não apenas
            equipamentos, mas <span style={styles.highlight}>soluções completas</span>, integradas e personalizadas. Ao longo dos anos,
            investimos continuamente em tecnologia de ponta, capacitação técnica e processos de
            modernização, garantindo alto padrão de qualidade em cada projeto entregue.
          </p>

          <p style={styles.paragraph}>
            Com atuação em residências, comércios, condomínios e empresas de diversos portes,
            consolidamos nossa reputação por meio de <span style={styles.highlight}>atendimento próximo, instalações bem
              executadas e suporte técnico ágil</span>. Trabalhamos com sistemas modernos de CFTV,
            alarmes, controle de acesso, cercas elétricas, portões automáticos e monitoramento
            remoto, sempre seguindo as normas técnicas e as melhores práticas do mercado.
          </p>

          <p style={styles.paragraph}>
            Mais do que fornecer segurança eletrônica, acreditamos em construir <span style={styles.highlight}>relações de
              confiança de longo prazo</span> com nossos clientes. Cada projeto é desenvolvido de forma
            estratégica, considerando o risco, o ambiente e a real necessidade de proteção.
          </p>

          <p style={styles.paragraph}>
            Hoje, a <span style={styles.highlight}>P3 SEGURANÇA ELETRÔNICA</span> é referência em seu segmento, mantendo o
            compromisso com a inovação, a ética e a excelência operacional. Seguimos evoluindo
            para entregar tranquilidade, proteção e segurança em todos os momentos.
          </p>
        </motion.div>

        {/* Missão, Visão e Valores */}
        <motion.div
          style={styles.contentBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={styles.sectionTitle}>Nossos Pilares</p>
          <h2 style={styles.sectionHeading}>Missão, Visão e Valores</h2>

          <div style={styles.grid}>
            {/* Missão */}
            <motion.div
              style={styles.card}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#1e3a5a';
              }}
            >
              <div style={styles.cardIcon}>🎯</div>
              <h3 style={styles.cardTitle}>Missão</h3>
              <p style={styles.cardText}>
                Oferecer soluções eficientes em segurança eletrônica, protegendo pessoas e
                patrimônios com tecnologia, qualidade e atendimento especializado.
              </p>
            </motion.div>

            {/* Visão */}
            <motion.div
              style={styles.card}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#1e3a5a';
              }}
            >
              <div style={styles.cardIcon}>👁️</div>
              <h3 style={styles.cardTitle}>Visão</h3>
              <p style={styles.cardText}>
                Ser referência regional em segurança eletrônica, reconhecida pela confiabilidade,
                inovação e excelência no atendimento.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div
              style={styles.card}
              whileHover={{ y: -4 }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#1e3a5a';
              }}
            >
              <div style={styles.cardIcon}>⭐</div>
              <h3 style={styles.cardTitle}>Valores</h3>
              <ul style={styles.valuesList}>
                <li style={styles.valueItem}>
                  <div style={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Compromisso com a segurança do cliente
                </li>
                <li style={styles.valueItem}>
                  <div style={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Ética e transparência nas relações
                </li>
                <li style={styles.valueItem}>
                  <div style={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Qualidade técnica e profissional
                </li>
                <li style={styles.valueItem}>
                  <div style={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Inovação constante
                </li>
                <li style={styles.valueItem}>
                  <div style={styles.checkIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Atendimento ágil e personalizado
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          style={styles.contentBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={styles.sectionTitle}>Por Que Nos Escolher</p>
          <h2 style={styles.sectionHeading}>Nossos Diferenciais</h2>

          <div style={styles.differentialsList}>
            <motion.div
              style={styles.differentialItem}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={styles.differentialIcon}>🎯</div>
              <p style={styles.differentialText}>
                Soluções Personalizadas em Segurança Eletrônica
              </p>
            </motion.div>

            <motion.div
              style={styles.differentialItem}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={styles.differentialIcon}>🚀</div>
              <p style={styles.differentialText}>
                Tecnologia Atualizada e Equipamentos Modernos
              </p>
            </motion.div>

            <motion.div
              style={styles.differentialItem}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={styles.differentialIcon}>💼</div>
              <p style={styles.differentialText}>
                Atendimento Comercial Consultivo
              </p>
            </motion.div>

            <motion.div
              style={styles.differentialItem}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={styles.differentialIcon}>🔧</div>
              <p style={styles.differentialText}>
                Instalação Profissional e Manutenção Especializada
              </p>
            </motion.div>

            <motion.div
              style={styles.differentialItem}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
              }}
            >
              <div style={styles.differentialIcon}>⚡</div>
              <p style={styles.differentialText}>
                Suporte Técnico Eficiente e Personalizado
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default About;