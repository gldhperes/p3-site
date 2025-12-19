import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Bell, Clock, Lock, Zap, Shield, ChevronRight } from 'lucide-react';

// Images
import camera_img from "../../../public/cam.webp";
import alarme_img from "../../../public/alarms.webp";
import monitoramento_img from "../../../public/monitoring.webp";
import acesso_img from "../../../public/turnstile.webp";
// import acesso_img from "../../../public/turnstile.avif";
import cerca_img from "../../../public/cerca.png";


const servicos = [
  {
    icon: Camera,
    titulo: 'Câmeras IP',
    descricao: 'Monitoramento em alta definição com acesso remoto via smartphone e gravação em nuvem.',
    image: camera_img,
  },
  {
    icon: Bell,
    titulo: 'Alarmes Inteligentes',
    descricao: 'Sistemas de alarme com sensores de última geração e notificações instantâneas.',
    image: alarme_img,
  },
  {
    icon: Clock,
    titulo: 'Monitoramento 24h',
    descricao: 'Central de monitoramento ativa 24 horas, 7 dias por semana, com resposta imediata.',
    image: monitoramento_img,
  },
  {
    icon: Lock,
    titulo: 'Controle de Acesso',
    descricao: 'Biometria, cartões e senhas para controle total de entrada e saída.',
    image: acesso_img,
  },
  {
    icon: Zap,
    titulo: 'Cerca Elétrica',
    descricao: 'Proteção perimetral com cercas elétricas de alta voltagem e alarme integrado.',
    image: cerca_img,
  },
  {
    icon: Shield,
    titulo: 'Projetos Customizados',
    descricao: 'Soluções personalizadas para residências, empresas e condomínios.',
    // image: "../../assets/cameras.jpg",
  }
];

export default function ServicesSection() {
  return (
    <section id="serviços" style={{
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
          {servicos.map((servico, index) => (

            <motion.div
              key={index}
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
                  backgroundImage: `url(${servico?.image})`,
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
                  <servico.icon size={32} color="#0066FF" />
                </div>

                <h3 style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#0A2540',
                  marginBottom: 12
                }}>
                  {servico.titulo}
                </h3>

                <p style={{
                  fontSize: 16,
                  color: '#64748B',
                  lineHeight: 1.7,
                  marginBottom: 20
                }}>
                  {servico.descricao}
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

          ))}
        </div>
      </div>
    </section >
  );
}