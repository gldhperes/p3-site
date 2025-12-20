import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

// Utils
import navItems from '../../utils/navItems';


const diferenciais = [
  { icon: Award, titulo: '+15 Anos', descricao: 'de experiência no mercado' },
  { icon: Users, titulo: '+2.000', descricao: 'clientes protegidos' },
  { icon: Clock, titulo: '24/7', descricao: 'suporte técnico disponível' },
  { icon: CheckCircle, titulo: '100%', descricao: 'satisfação garantida' }
];

const AboutSection = () => {
  return (
    <section id={navItems[1].href} style={{
      padding: '120px 24px',
      background: 'white',
      overflow: 'hidden'
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
            <div
              id='experience-badge'
              style={{
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
              // display: 'grid',
              // gridTemplateColumns: '1fr 1fr',
              // gap: 24
              display: 'flex ',
              flexFlow: 'row wrap',
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
  );
}

export default AboutSection;