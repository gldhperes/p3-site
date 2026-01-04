import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

// Utils
import navItems from '../../utils/navItems';


const diferenciais = [
  { icon: Award, titulo: '+15 Anos', descricao: 'de experiência no mercado', main: true },
  { icon: Users, titulo: '+2.000', descricao: 'clientes protegidos' },
  { icon: Clock, titulo: '24/7', descricao: 'suporte técnico disponível' },
  { icon: CheckCircle, titulo: '100%', descricao: 'satisfação garantida' }
];

const diferenciais2 = [
  { icon: Users, titulo: 'Equipe técnica especializada' },
  { icon: Clock, titulo: 'Atendimento 24 horas' },
  { icon: CheckCircle, titulo: 'Monitoramento profissional' }
];

const AboutSection = () => {
  return (
    <section id={navItems[1].href} style={{
      padding: '120px 24px',
      background: 'white',
      overflow: 'hidden',
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'center'

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
            <div
              id='tech-img-container'
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden'
              }}>
              <img
                id='tech-img'
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Equipe SecureTech"
                style={{
                  width: '100%',
                  height: 500,
                  objectFit: 'cover'
                }}
              />
            </div>
            {/* <div
              id='saiba-mais-btn'
              style={{
                position: 'absolute',
                bottom: -20,
                right: -20,
                background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
                borderRadius: 20,
                padding: 25,
                transition: 'all 0.3s ease',
                cursor: 'pointer',

              }}>
              <a href={navItems[1].href}
                style={{
                  display: 'flex',
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <p style={{ fontSize: 32, fontWeight: 800 }}>Saiba mais</p>
                <ArrowRight size={32} />
              </a>
            </div> */}
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
              {navItems[1].text}
            </span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 800,
              color: '#0A2540',
              marginBottom: 24,
              letterSpacing: '-1px',
              lineHeight: 1.2
            }}>
              Nossa história e missão
            </h2>
            <p style={{
              fontSize: 18,
              color: '#64748B',
              lineHeight: 1.8,
              marginBottom: 40
            }}>
              A <span style={{ fontWeight: "800" }}>P3 SEGURANÇA ELETRÔNICA</span> nasceu da necessidade de oferecer soluções mais
              eficientes, confiáveis e acessíveis em proteção patrimonial e monitoramento eletrônico.
              Desde o início, nosso propósito sempre foi claro: proteger pessoas, patrimônios e
              negócios com tecnologia, inteligência e compromisso.
            </p>

            <div
              id='saiba-mais-btn'
              style={{
                // position: 'absolute',
                // bottom: -20,
                // right: -20,
                // maxWidth: "400px",
                background: 'linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)',
                borderRadius: 20,
                padding: 25,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '4px 4px 15px rgba(2, 121, 145, 1)'

              }}>
              <a href={navItems[1].href}
                style={{
                  display: 'flex',
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.3s ease',
                }}>
                <p style={{ fontSize: 32, fontWeight: 800 }}>Saiba mais</p>
                <ArrowRight size={32} />
              </a>
            </div>


          </motion.div>
        </div>

        <motion.div
          id="diferenciais2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            width: '100%',
            marginTop: 80,
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 40,
          }}
        >
          {diferenciais.map((item, index) => (
            <div
              className="diferencial-item"
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 16,
                padding: 20,
                background: item.main ? 'linear-gradient(135deg, rgba(0, 102, 255, 1) 0%, rgba(0, 212, 255, 1) 100%)' : '#F5F7FA',
                borderRadius: 16
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                background: item.main ? '#fbff0255' : 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <item.icon size={24} color={item.main ? "#fbff02ff" : "#0066FF"} />
              </div>
              <div>
                <div style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: item.main ? '#FFFFFF' : '#0A2540'
                }}>
                  {item.titulo}
                </div>
                <div style={{
                  fontSize: 14,
                  color: item.main ? '#FFFFFF' : '#64748B'
                }}>
                  {item.descricao}
                </div>
              </div>
            </div>
          ))}

          {diferenciais2.map((item, index) => (
            <div
              className="diferencial-item"
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
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0A2540',
                }}>
                  {item.titulo}
                </div>
              </div>
            </div>
          ))}

        </motion.div>
      </div >


    </section >
  );
}

export default AboutSection;