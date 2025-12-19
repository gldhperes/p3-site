import { Shield, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  return (
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
              {[Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/grupoperesce"
                  target="_blank"
                  rel="noopener noreferrer"
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
  );
}