import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

// UTILS
import contacts from '../../utils/contacts';
import navItems from '../../utils/navItems';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Retornaremos em breve.');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <section id={navItems[4]?.href} style={{
      padding: '120px 24px',
      background: '#F5F7FA',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 80,
          alignItems: 'start'
        }} className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
              Fale Conosco
            </span>

            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 800,
              color: '#0A2540',
              marginBottom: 20,
              letterSpacing: '-1px',
              lineHeight: 1.2
            }}>
              Solicite Seu Orçamento
            </h2>

            <p style={{
              fontSize: 18,
              color: '#64748B',
              lineHeight: 1.8,
              marginBottom: 30
            }}>
              Entre em contato conosco e descubra a melhor solução
              de segurança para suas necessidades. Nossa equipe está
              pronta para atendê-lo!
            </p>

            <div
              style={{
                width: "100%",
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 16,
                padding: 20,
                background: 'white',
                borderRadius: 16,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 102, 255, 0.08)',
                marginBottom: 40,
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
                <Clock size={24} color="#0066FF" />
              </div>

              <div style={{ fontSize: 18, color: '#64748B', marginBottom: 4 }}>
                <p style={{ fontWeight: 600, color: '#0A2540' }}>Atendimento:</p>
                <p>Segunda a Sexta: 08h–12h | 14h–18h</p>
                <p>Sábado: 08h–12h</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24, }}>
              {contacts.map((item, index) => (
                <a
                  className='contact-cards'
                  key={index}
                  href={item?.href}
                  target='_blank'
                  style={{
                    width: "100%",
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: 20,
                    background: 'white',
                    borderRadius: 16,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 102, 255, 0.08)',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.borderColor = '#0066FF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.08)';
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
                    <div style={{ fontSize: 18, color: '#64748B', marginBottom: 4 }}>
                      {item.text}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: '#0A2540' }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              id='contact-form'
              style={{
                background: 'white',
                borderRadius: 24,
                padding: 48,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
              }}
            >
              <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#0A2540',
                marginBottom: 32
              }}>
                Solicite uma visita
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#0A2540',
                    marginBottom: 8
                  }}>
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0A2540',
                      marginBottom: 8
                    }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0A2540',
                      marginBottom: 8
                    }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="telefone com DDD"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#0A2540',
                    marginBottom: 8
                  }}>
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Como podemos ajudá-lo?"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '18px 32px',
                    fontSize: 17,
                    marginTop: 8
                  }}
                >
                  Enviar Mensagem
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;