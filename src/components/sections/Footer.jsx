import { Instagram, Shield, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

import navRoutes from '../../utils/routes.js';

// IMAGES
import p3logo from '../../assets/P3-logo1.png';

// UTILS
import services from "../../utils/services.js";
import contacts from '../../utils/contacts.js';


const style = {
  contacLink: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 15,
    "&:hover": { color: '#00D4FF' },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}>
                <a href={navRoutes.home}>
                  <img src={p3logo} alt="Logo"
                    style={{
                      width: "180px",
                      height: "70px",
                      objectFit: "contain"
                    }} />
                </a>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexFlow: 'column',
              gap: 12,
              fontSize: 15,
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 1.7
            }}>

              <p style={{ fontSize: 15, }}>
                Soluções completas em segurança eletrônica para
                residências, empresas e condomínios.
              </p>

              <p style={{ fontSize: 12, }}>
                CNPJ: 20.040.171/0001-51
              </p>

            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>

              <a
                href="https://www.instagram.com/p3seguranca/"
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
                <Instagram size={20} color="white" />
              </a>

              <a
                href="https://www.facebook.com/p/P3-Segurança-Eletrônica-100084428342233/"
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
                <Facebook size={20} color="white" />
              </a>

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

              {services.map((service, index) => (
                <Link to={`servicos/${service.link}`} preventScrollReset={true} key={index}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 15,
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.3s ease',
                    fontFamily: 'inherit',
                    textTransform: 'capitalize',
                  }}

                  onMouseEnter={(e) => e.currentTarget.style.color = '#00D4FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                >

                  {service?.title}
                </Link>
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

              {contacts.map((item, index) => (
                <Link to={item?.href} key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: 15,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00D4FF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                >
                  <item.icon size={20} color="#00D4FF" style={{ marginTop: 2, flexShrink: 0 }} />

                  {item.text}

                </Link>

              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          id="footer-bottom"
          style={{
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: 32,
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 40,

          }}>
          <div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 14
            }}>
              © {year} P3 Segurança Eletrônica. Todos os direitos reservados. Feito por &#8201;

              <a href="https://guilhermeperes.com.br" target='_blank' className="credits-link" >
                Guilherme Peres
              </a>

            </p>
          </div>



          <div className="footer-links">
            <a href={navRoutes.termosdeuso} className="footer-link">Termos de Uso</a>
            <a href={navRoutes.privacidade} className="footer-link">Política de Privacidade</a>
          </div>
        </div>


      </div >

    </footer >
  );
}

export default Footer;