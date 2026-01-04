import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ArrowRight, Phone, Contact } from 'lucide-react';

// COMPONENTS
import BackToHomeComponent from '../components/BackToHomeComponent';

// UTILS
import scrollToSectionFunc from '../utils/scrollToSection';
import services from '../utils/services';
import contacts from '../utils/contacts';
import Header from '../components/sections/Header';

// Definição dos estilos CSS puros
const styles = {
  container: {
    minHeight: '100vh',
    // backgroundColor: '#0a1628',
  },

  sectionHero: {
    position: 'relative',
    paddingTop: '16rem', // pt-32
    paddingBottom: '5rem', // pb-20
    overflow: 'hidden',
  },


  heroGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,

    filter: 'blur(8px)',
    // Aumentamos um pouco a escala para o blur não mostrar as bordas brancas
    transform: 'scale(1.02)',

  },

  heroOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    background: 'linear-gradient(135deg, #0a1628 0%, #0a162875 100%)',
    zIndex: 1,
  },

  heroBlob: {
    position: 'absolute',
    top: '5rem', // top-20
    right: '2.5rem', // right-10
    width: '24rem', // w-96
    height: '24rem', // h-96
    backgroundColor: 'rgba(59, 130, 246, 0.1)', // bg-blue-500/10
    borderRadius: '9999px', // rounded-full
    filter: 'blur(3rem)', // blur-3xl
  },

  contentContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem', // px-4
    paddingRight: '1rem', // px-4
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px', // Simulação de container max-w-7xl
  },

  linkBack: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem', // gap-2
    color: '#60a5fa', // text-blue-400
    marginBottom: '2rem', // mb-8
    transitionProperty: 'color',
    transitionDuration: '150ms',
    textDecoration: 'none',
  },

  linkBackHover: {
    color: '#93c5fd', // hover:text-blue-300
  },

  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem', // gap-12
    alignItems: 'center',
  },

  iconWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem', // gap-3
    marginBottom: '1.5rem', // mb-6
  },

  iconCircle: {
    width: '4rem', // w-16
    height: '4rem', // h-16
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // bg-blue-500/20
    borderRadius: '0.75rem', // rounded-2xl
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconStyle: {
    width: '2rem', // w-8
    height: '2rem', // h-8
    color: '#60a5fa', // text-blue-400
  },

  title: {
    fontSize: '2.25rem', // text-4xl
    lineHeight: '2.5rem', // md:text-5xl, lg:text-6xl
    fontWeight: '700', // font-bold
    color: 'white', // text-white
    marginBottom: '1rem', // mb-4
    textTransform: 'uppercase',
  },

  subtitle: {
    fontSize: '1.25rem', // text-xl
    lineHeight: '1.75rem', // md:text-2xl
    color: '#60a5fa', // text-blue-400
    marginBottom: '1.5rem', // mb-6
  },

  description: {
    color: '#9ca3af', // text-gray-400
    fontSize: '1.125rem', // text-lg
    marginBottom: '2rem', // mb-8
    maxWidth: '36rem', // max-w-xl
  },

  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem', // gap-4
  },

  buttonPrimary: {
    backgroundColor: '#2563eb', // bg-blue-600
    color: 'white', // text-white
    padding: '1.5rem 2rem', // px-8 py-6
    fontSize: '1.125rem', // text-lg
    borderRadius: '0.75rem', // rounded-xl
    border: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transitionProperty: 'background-color, transform',
    transitionDuration: '150ms',
  },

  buttonPrimaryHover: {
    backgroundColor: '#1d4ed8', // hover:bg-blue-700
  },

  buttonOutline: {
    backgroundColor: 'transparent',
    color: 'white', // text-white
    padding: '1.5rem 2rem', // px-8 py-6
    fontSize: '1.125rem', // text-lg
    borderRadius: '0.75rem', // rounded-xl
    border: '1px solid #4b5563', // border-gray-600
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transitionProperty: 'background-color',
    transitionDuration: '150ms',
  },

  buttonOutlineHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // hover:bg-white/10
  },

  heroImage: {
    borderRadius: '1rem', // rounded-2xl
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
    width: '100%',
    height: 'auto',
  },

  sectionFeatures: {
    paddingTop: '5rem', // py-20
    paddingBottom: '5rem', // py-20
    backgroundColor: '#0f1f35', // bg-[#0f1f35]
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem', // mb-16
  },

  sectionSubtitle: {
    color: '#60a5fa', // text-blue-400
    fontWeight: '600', // font-semibold
    letterSpacing: '0.05em', // tracking-wider
    textTransform: 'uppercase',
    fontSize: '0.875rem', // text-sm
  },

  sectionTitle: {
    fontSize: '1.875rem', // text-3xl
    lineHeight: '2.25rem', // md:text-4xl
    fontWeight: '700', // font-bold
    color: 'white', // text-white
    marginTop: '1rem', // mt-4
  },

  featuresGrid: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '1.5rem', // gap-6
  },

  card: {
    backgroundColor: '#162a46', // bg-[#162a46]
    border: '1px solid #1e3a5a', // border-[#1e3a5a]
    height: '100%',
    borderRadius: '0.5rem', // rounded-lg (implícito)
    transitionProperty: 'border-color',
    transitionDuration: '300ms',

    width: '300px',
    minWWidth: '300px',
    maxWidth: '400px',

  },

  cardHover: {
    borderColor: 'rgba(59, 130, 246, 0.5)', // hover:border-blue-500/50
  },

  cardContent: {
    padding: '1.5rem', // p-6
  },

  cardIconWrapper: {
    width: '3rem', // w-12
    height: '3rem', // h-12
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // bg-blue-500/20
    borderRadius: '0.5rem', // rounded-xl
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem', // mb-4
  },

  cardTitle: {
    fontSize: '1.125rem', // text-lg
    fontWeight: '600', // font-semibold
    color: 'white', // text-white
    marginBottom: '0.5rem', // mb-2
  },

  cardDescription: {
    color: '#9ca3af', // text-gray-400
  },

  sectionBenefits: {
    paddingTop: '5rem', // py-20
    paddingBottom: '5rem', // py-20
    backgroundColor: '#0a1628', // bg-[#0a1628]
  },

  benefitsGrid: {
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '10rem', // gap-12
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  benefitList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem', // space-y-4
  },

  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem', // gap-4
  },

  checkCircleWrapper: {
    width: '1.5rem', // w-6
    height: '1.5rem', // h-6
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // bg-blue-500/20
    borderRadius: '9999px', // rounded-full
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '0.125rem', // mt-0.5
  },
  benefitText: {
    color: '#d1d5db', // text-gray-300
    fontSize: '1.125rem', // text-lg
  },
  applicationCardIconWrapper: {
    width: '3.5rem', // w-14
    height: '3.5rem', // h-14
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // bg-blue-500/20
    borderRadius: '0.75rem', // rounded-xl
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  applicationCardContent: {
    padding: '1.5rem', // p-6
    display: 'flex',
    alignItems: 'center',
    gap: '1rem', // gap-4
  },
  applicationCardTitle: {
    color: 'white', // text-white
    fontWeight: '600', // font-semibold
    fontSize: '1.125rem', // text-lg
  },
  applicationCardDescription: {
    color: '#9ca3af', // text-gray-400
  },
  sectionCta: {
    paddingTop: '5rem', // py-20
    paddingBottom: '5rem', // py-20
    backgroundImage: 'linear-gradient(to right, #2563eb, #1e40af)', // bg-gradient-to-r from-blue-600 to-blue-800
  },
  ctaTitle: {
    fontSize: '1.875rem', // text-3xl
    lineHeight: '2.25rem', // md:text-4xl
    fontWeight: '700', // font-bold
    color: 'white', // text-white
    marginBottom: '1rem', // mb-4
  },
  ctaDescription: {
    color: '#bfdbfe', // text-blue-100
    fontSize: '1.125rem', // text-lg
    marginBottom: '2rem', // mb-8
    maxWidth: '42rem', // max-w-2xl
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ctaButtonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem', // gap-4
  },
  ctaButtonPrimary: {
    backgroundColor: 'white', // bg-white
    color: '#2563eb', // text-blue-600
    padding: '1.5rem 2rem', // px-8 py-6
    fontSize: '1.125rem', // text-lg
    borderRadius: '0.75rem', // rounded-xl
    border: 'none',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '150ms',
  },
  ctaButtonPrimaryHover: {
    backgroundColor: '#f3f4f6', // hover:bg-gray-100
  },
  ctaButtonOutline: {
    backgroundColor: 'transparent',
    color: 'white', // text-white
    padding: '1.5rem 2rem', // px-8 py-6
    fontSize: '1.125rem', // text-lg
    borderRadius: '0.75rem', // rounded-xl
    border: '1px solid white', // border-white
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transitionProperty: 'background-color',
    transitionDuration: '150ms',
  },
  ctaButtonOutlineHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // hover:bg-white/20
  },
};




const Servico = () => {
  const route = useParams();
  const serviceId = route.id;
  const service = services.find(s => s.link === serviceId);
  // const Icon = service.icon;


  useEffect(() => {
    scrollToSectionFunc(serviceId);
  }, [serviceId]);

  return (
    <div id={serviceId} style={styles.container}>

      <Header />

      {/* Hero Section */}
      <section style={styles.sectionHero}>

        {/* Camada da Imagem com Blur */}
        <div style={{ ...styles.heroGradient, backgroundImage: `url(${service.image})` }} />

        {/* Camada da Imagem com Cor */}
        <div style={styles.heroOverlay} />


        <div style={{ ...styles.heroBlob, zIndex: 2 }} />



        <div style={styles.contentContainer}>
          <div>
            <div style={styles.heroGrid}>
              <div>
                <BackToHomeComponent />

                <h1 style={styles.title}>
                  {service.title}
                </h1>
                <p style={styles.subtitle}>
                  {service.subtitle}
                </p>
                <p style={styles.description}>
                  {service.description}
                </p>

                <div style={styles.buttonGroup}>
                  <button
                    style={{ ...styles.buttonPrimary, ...styles.buttonPrimaryHover }} // Simulação de hover
                  >
                    <Link to={"/"} style={{ color: 'inherit' }}>Solicitar Orçamento</Link>

                    <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem', transitionProperty: 'transform', transitionDuration: '150ms' }} />
                  </button>
                  <button
                    style={{ ...styles.buttonOutline, ...styles.buttonOutlineHover }} // Simulação de hover
                  >
                    <Phone style={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
                    {/* (85) 3241-4654 */}
                    <a href={contacts[0].href} style={{ color: 'inherit' }}>{contacts[0].text}</a>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.sectionFeatures}>

        <div style={styles.contentContainer}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionSubtitle}>Recursos</span>
            <h2 style={styles.sectionTitle}>
              Tecnologia de Ponta
            </h2>
          </div>

          <div style={styles.featuresGrid}>

            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (

                <div key={index}>

                  <div style={{ ...styles.card, ...styles.cardHover }}> {/* Card */}
                    <div style={styles.cardContent}> {/* CardContent */}
                      <div style={styles.cardIconWrapper}>
                        <FeatureIcon style={{ width: '1.5rem', height: '1.5rem', color: '#60a5fa' }} />
                      </div>
                      <h3 style={styles.cardTitle}>{feature.title}</h3>
                      <p style={styles.cardDescription}>{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.sectionBenefits}>

        <div style={styles.contentContainer}>

          <div style={styles.benefitsGrid}>

            <div>
              <span style={styles.sectionSubtitle}>Benefícios</span>
              <h2 style={{ ...styles.sectionTitle, marginBottom: '2rem' }}>
                Por Que Escolher Nosso Serviço?
              </h2>

              <div style={styles.benefitList}>
                {service.benefits.map((benefit, index) => (
                  <div key={index} style={styles.benefitItem}>
                    <div style={styles.checkCircleWrapper}>
                      <CheckCircle style={{ width: '1rem', height: '1rem', color: '#60a5fa' }} />
                    </div>
                    <span style={styles.benefitText}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexFlow: 'column wrap', gap: '1.5rem', justifyContent: 'center' }}>
              {service.applications.map((app, index) => {
                const ApplicationIcon = app.icon;
                return (
                  <div key={index} style={styles.card}> {/* Card */}
                    <div style={styles.applicationCardContent}> {/* CardContent */}
                      <div style={styles.applicationCardIconWrapper}>
                        <ApplicationIcon style={{ width: '1.75rem', height: '1.75rem', color: '#60a5fa' }} />
                      </div>
                      <div>
                        <h4 style={styles.applicationCardTitle}>{app.title}</h4>
                        <p style={styles.applicationCardDescription}>{app.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Servico;