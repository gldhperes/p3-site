import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackToHomeComponent from '../components/BackToHomeComponent';

const PoliticaPrivacidade = () => {
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
      background: 'rgba(34, 197, 94, 0.15)',
      border: '1px solid rgba(34, 197, 94, 0.3)',
      borderRadius: '50px',
      padding: '8px 16px',
      marginBottom: '20px'
    },
    badgeText: {
      color: '#4ade80',
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
    subtitle: {
      fontSize: '16px',
      color: '#9ca3af',
      maxWidth: '700px',
      margin: '0 auto 8px',
      lineHeight: '1.6'
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
      color: '#4ade80',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    sectionNumber: {
      width: '32px',
      height: '32px',
      background: 'rgba(34, 197, 94, 0.2)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: '700',
      color: '#4ade80',
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
      background: '#4ade80',
      borderRadius: '50%'
    },
    highlight: {
      color: '#4ade80',
      fontWeight: '600'
    },
    infoBox: {
      background: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.2)',
      borderRadius: '12px',
      padding: '20px',
      marginTop: '24px'
    },
    infoTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#4ade80',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    backLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#4ade80',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '32px',
      transition: 'color 0.2s'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <BackToHomeComponent />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header style={styles.header}>
            <div style={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p style={styles.badgeText}>LGPD - Lei 13.709/2018</p>
            </div>
            <h1 style={styles.title}>Política de Privacidade</h1>
            <p style={styles.subtitle}>
              Protegendo seus dados pessoais com transparência e segurança
            </p>
            <p style={styles.updateDate}>Última atualização: 29 de dezembro de 2024</p>
          </header>

          <div style={styles.content}>
            <p style={styles.intro}>
              A <span style={styles.highlight}>P3 SEGURANÇA ELETRÔNICA</span> respeita a privacidade e a proteção dos dados 
              pessoais de seus clientes, parceiros e usuários, comprometendo-se a tratar essas 
              informações de forma transparente, segura e em conformidade com a <span style={styles.highlight}>Lei Geral de 
              Proteção de Dados – LGPD (Lei nº 13.709/2018)</span>.
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
                Coleta de Dados Pessoais
              </div>
              <p style={styles.text}>
                Coletamos dados pessoais fornecidos voluntariamente pelo usuário por meio de:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Formulários de contato
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Solicitação de orçamento
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Atendimento via WhatsApp, telefone ou e-mail
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Navegação no site (cookies)
                </li>
              </ul>
              <p style={styles.text}>
                Os dados podem incluir: nome, telefone, e-mail, endereço, empresa e outras 
                informações necessárias para atendimento e prestação de serviços.
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
                Finalidade do Uso dos Dados
              </div>
              <p style={styles.text}>Os dados coletados são utilizados para:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Entrar em contato com o usuário
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Elaborar propostas e orçamentos
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Prestação de serviços contratados
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Suporte técnico e atendimento
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Cumprimento de obrigações legais
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Comunicação institucional e comercial
                </li>
              </ul>
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
                Compartilhamento de Dados
              </div>
              <p style={styles.text}>
                A <span style={styles.highlight}>P3 SEGURANÇA ELETRÔNICA</span> não vende nem comercializa dados pessoais. Os 
                dados poderão ser compartilhados apenas quando necessário para:
              </p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Cumprimento de obrigação legal
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Execução de serviços contratados
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Parcerias técnicas ou operacionais, sempre respeitando a LGPD
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
                Armazenamento e Segurança
              </div>
              <p style={styles.text}>
                Adotamos medidas técnicas e administrativas para proteger os dados pessoais 
                contra acessos não autorizados, vazamentos, perdas ou alterações indevidas.
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
                Direitos do Titular dos Dados
              </div>
              <p style={styles.text}>O titular dos dados pode, a qualquer momento:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Solicitar acesso aos seus dados
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Corrigir dados incompletos ou incorretos
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Solicitar exclusão dos dados, quando permitido por lei
                </li>
                <li style={styles.listItem}>
                  <div style={styles.bullet} />
                  Revogar consentimentos
                </li>
              </ul>
              
              <div style={styles.infoBox}>
                <div style={styles.infoTitle}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  Como exercer seus direitos
                </div>
                <p style={{...styles.text, margin: 0, fontSize: '14px'}}>
                  As solicitações devem ser feitas pelos canais oficiais de contato da empresa.
                </p>
              </div>
            </motion.div>

            {/* Seção 6 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>6</div>
                Cookies
              </div>
              <p style={styles.text}>
                Utilizamos cookies para melhorar a experiência do usuário, analisar métricas de 
                acesso e otimizar conteúdos. O usuário pode gerenciar o uso de cookies 
                diretamente em seu navegador.
              </p>
            </motion.div>

            {/* Seção 7 */}
            <motion.div
              style={styles.section}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div style={styles.sectionTitle}>
                <div style={styles.sectionNumber}>7</div>
                Alterações desta Política
              </div>
              <p style={styles.text}>
                Esta Política de Privacidade pode ser atualizada a qualquer momento para 
                adequação legal ou melhoria dos processos.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PoliticaPrivacidade;