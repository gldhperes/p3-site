import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// UTILS
import services from '../../utils/services.js';
import navItems from '../../utils/navItems.js';

const ServicesSection = () => {
  return (
    <section id={navItems[2].href} style={{
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
          {services.map((service, index) => (
            <Link to={`servicos/${service.link}`} preventScrollReset={true} key={index}>
              <motion.div
                // key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="hover-lift"
                style={{
                  position: 'relative',
                  borderRadius: 20,
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 102, 255, 0.08)',
                  backgroundColor: 'white',
                  overflow: 'hidden'

                }}
              >

                <div
                  className='hover-lift--bg'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${service?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'opacity(0.1) blur(1px)',
                  }}
                ></div>


                <div
                  className='hover-lift--content'
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    borderRadius: 20,
                    padding: 25,
                    paddingBottom: 50,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
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
                    <service.icon size={32} color="#0066FF" />
                  </div>

                  <h3 style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#0A2540',
                    marginBottom: 12
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontSize: 16,
                    color: '#64748B',
                    lineHeight: 1.7,
                    marginBottom: 20
                  }}>
                    {service.subDescription}
                  </p>



                </div>

                <div
                  className="hover-lift--know-more"
                  style={{
                    position: 'absolute',
                    left: 24,
                    bottom: 24,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#0066FF',
                    fontWeight: 600,
                    fontSize: 15
                  }}
                >
                  Saiba mais <ChevronRight size={18} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section >
  );
}

export default ServicesSection;