import { motion } from 'framer-motion';
import BackToHomeComponent from '../components/BackToHomeComponent';


const styles = {
  container: {
    minHeight: '100vh',
    background: '#0a1628',
    paddingTop: '80px',
    paddingBottom: '80px'
  },
  wrapper: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    paddingTop: '40px'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(59, 130, 246, 0.15)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '50px',
    padding: '8px 16px',
    marginBottom: '20px'
  },
  badgeText: {
    color: '#60a5fa',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: 0
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '16px',
    lineHeight: '1.2'
  },
  updateDate: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  content: {
    background: '#0f1f35',
    border: '1px solid #1e3a5a',
    borderRadius: '16px',
    padding: '48px',
    marginBottom: '32px'
  },
  intro: {
    fontSize: '16px',
    color: '#d1d5db',
    lineHeight: '1.8',
    marginBottom: '40px',
    paddingBottom: '32px',
    borderBottom: '1px solid #1e3a5a'
  },
  section: {
    marginBottom: '40px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#60a5fa',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  sectionNumber: {
    width: '32px',
    height: '32px',
    background: 'rgba(59, 130, 246, 0.2)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
    flexShrink: 0
  },
  text: {
    fontSize: '15px',
    color: '#d1d5db',
    lineHeight: '1.8',
    marginBottom: '16px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '16px 0'
  },
  listItem: {
    fontSize: '15px',
    color: '#d1d5db',
    lineHeight: '1.8',
    marginBottom: '12px',
    paddingLeft: '28px',
    position: 'relative'
  },
  bullet: {
    position: 'absolute',
    left: '8px',
    top: '10px',
    width: '6px',
    height: '6px',
    background: '#60a5fa',
    borderRadius: '50%'
  },
  highlight: {
    color: '#60a5fa',
    fontWeight: '600'
  },
  divider: {
    width: '100%',
    height: '1px',
    background: '#1e3a5a',
    margin: '48px 0'
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


const TermosDeUso = () => {


  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackToHomeComponent />

          <header style={styles.header}>
            <div style={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p style={styles.badgeText}>Termos Legais</p>
            </div>
            <h1 style={styles.title}>Termos de Uso</h1>
            <p style={styles.updateDate}>Última atualização: 29 de dezembro de 2024</p>
          </header>

          <div style={styles.content}>
            <p style={styles.intro}>
              Ao acessar o site da <span style={styles.highlight}>P3 SEGURANÇA ELETRÔNICA</span>, o usuário concorda com os
              termos e condições descritos abaixo.
            </p>

            {/* Seção 1 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>1</div>
                Uso do Site
              </div>
              <p style={styles.text}>
                O conteúdo deste site é destinado à divulgação institucional e comercial dos
                serviços oferecidos pela empresa. O uso indevido das informações é proibido.
              </p>
            </motion.div>

            {/* Seção 2 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>2</div>
                Propriedade Intelectual
              </div>
              <p style={styles.text}>
                Todos os textos, imagens, marcas, logotipos e conteúdos são de propriedade da <span style={styles.highlight}>P3
                  SEGURANÇA ELETRÔNICA</span>, sendo vedada a reprodução sem autorização prévia.
              </p>
            </motion.div>

            {/* Seção 3 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>3</div>
                Responsabilidades
              </div>
              <p style={styles.text}>A empresa não se responsabiliza por:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Danos decorrentes de falhas técnicas ou indisponibilidade do site
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Conteúdos de sites de terceiros acessados por links externos
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Uso indevido das informações pelo usuário
                </li>
              </ul>
            </motion.div>

            {/* Seção 4 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>4</div>
                Informações e Orçamentos
              </div>
              <p style={styles.text}>
                As informações exibidas no site têm caráter informativo. Valores, prazos e
                condições comerciais estão sujeitos à análise técnica e confirmação formal.
              </p>
            </motion.div>

            {/* Seção 5 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>5</div>
                Modificações
              </div>
              <p style={styles.text}>
                A <span style={styles.highlight}>P3 SEGURANÇA ELETRÔNICA</span> reserva-se o direito de alterar estes Termos de Uso
                a qualquer momento, sem aviso prévio.
              </p>
            </motion.div>

            {/* Divider */}
            <div style={styles.divider} />

            {/* Política de Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ ...styles.sectionTitle, fontSize: '24px', marginBottom: '24px', justifyContent: 'center' }}>
                🍪 Política de Cookies
              </h2>

              <p style={styles.text}>
                Utilizamos cookies para melhorar o desempenho e a experiência de navegação em nosso site.
              </p>

              <div style={{ ...styles.section, marginTop: '32px' }}>
                <h3 style={{ ...styles.sectionTitle, fontSize: '18px' }}>
                  O que são cookies?
                </h3>
                <p style={styles.text}>
                  Cookies são pequenos arquivos armazenados no navegador do usuário que ajudam
                  a entender como o site é utilizado.
                </p>
              </div>

              <div style={styles.section}>
                <h3 style={{ ...styles.sectionTitle, fontSize: '18px' }}>
                  Tipos de cookies utilizados:
                </h3>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <div style={styles.bullet} />
                    <strong style={{ color: '#e5e7eb' }}>Cookies essenciais:</strong> garantem o funcionamento correto do site
                  </li>
                  <li style={styles.listItem}>
                    <div style={styles.bullet} />
                    <strong style={{ color: '#e5e7eb' }}>Cookies de desempenho:</strong> analisam visitas e comportamento de navegação
                  </li>
                  <li style={styles.listItem}>
                    <div style={styles.bullet} />
                    <strong style={{ color: '#e5e7eb' }}>Cookies de marketing:</strong> auxiliam em campanhas e anúncios (quando aplicável)
                  </li>
                </ul>
              </div>

              <p style={styles.text}>
                O usuário pode desativar os cookies diretamente em seu navegador, ciente de que
                isso pode impactar a experiência no site.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TermosDeUso;