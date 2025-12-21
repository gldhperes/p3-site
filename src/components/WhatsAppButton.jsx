import BadgeComponent from "./BadgeComponent";


export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 64,
        height: 64,
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex',

        alignItems: 'center',
        justifyContent: 'center',

        boxShadow: '0 6px 24px rgba(37, 211, 102, 0.4)',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
        animation: 'pulse-glow 2s infinite'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <BadgeComponent size={"18px"} top={"0px"} right={"0px"} />

      <ion-icon name="logo-whatsapp" size="large"></ion-icon>
    </a>
  );
}