import navRoutes from "./routes.js";

const navItems = [
    { text: 'Home', href: navRoutes.home },
    { text: 'Quem somos', href: navRoutes.about },
    { text: 'Serviços', href: "servicos" },
    { text: 'Eventos', href: navRoutes.eventos, badge: true },
    { text: 'Contato', href: "contato" }
];

export default navItems;