import navRoutes from "./routes.js";

const navItems = [
    { text: 'Início', href: "inicio" },
    { text: 'Sobre Nós', href: "sobre-nos" },
    { text: 'Serviços', href: "servicos" },
    { text: 'Eventos', href: navRoutes.eventos, badge: true },
    { text: 'Contato', href: "contato" }
];

export default navItems;