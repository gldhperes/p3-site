import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const depoimentos = [
  {
    nome: 'Carlos Eduardo',
    cargo: 'Empresário',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    texto: 'A SecureTech transformou a segurança da minha empresa. O monitoramento 24h me dá tranquilidade total para focar no meu negócio.',
    rating: 5
  },
  {
    nome: 'Maria Fernanda',
    cargo: 'Síndica',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    texto: 'Contratamos para o condomínio e a diferença foi imediata. Equipe profissional e atenciosa, recomendo sem hesitar!',
    rating: 5
  },
  {
    nome: 'Roberto Almeida',
    cargo: 'Diretor Comercial',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    texto: 'Tecnologia de ponta e atendimento excepcional. O controle de acesso facilitou muito a gestão da nossa equipe.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % depoimentos.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="depoimentos" style={{
      padding: '120px 24px',
      background: 'linear-gradient(135deg, #0A2540 0%, #0D3A5C 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <span style={{
            display: 'inline-block',
            background: 'rgba(0, 212, 255, 0.2)',
            color: '#00D4FF',
            padding: '8px 20px',
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Depoimentos
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-1px'
          }}>
            O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                borderRadius: 24,
                padding: 48,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 6,
                marginBottom: 24
              }}>
                {[...Array(depoimentos[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p style={{
                fontSize: 24,
                color: 'white',
                lineHeight: 1.7,
                marginBottom: 32,
                fontStyle: 'italic',
                fontWeight: 300
              }}>
                "{depoimentos[currentTestimonial].texto}"
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16
              }}>
                <img
                  src={depoimentos[currentTestimonial].foto}
                  alt={depoimentos[currentTestimonial].nome}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid rgba(0, 212, 255, 0.5)'
                  }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'white'
                  }}>
                    {depoimentos[currentTestimonial].nome}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}>
                    {depoimentos[currentTestimonial].cargo}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            className="testimonial-nav"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
            className="testimonial-nav"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginTop: 32
          }}>
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: index === currentTestimonial ? 32 : 12,
                  height: 12,
                  borderRadius: 100,
                  background: index === currentTestimonial ? '#00D4FF' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}