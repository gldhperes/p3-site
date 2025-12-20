const navItems = ['Início', 'Sobre Nós', 'Serviços', 'Eventos', 'Contato'];

// Images
// import camera_img from "../../assets/cam.webp";

import cameras_img from "../assets/cam.webp";
import alarme_img from "../assets/alarms.webp";
import monitoramento_img from "../assets/monitoring.webp";
import acesso_img from "../assets/turnstile.webp";
import cerca_img from "../assets/cerca.png";



import {
    Camera,
    Bell,
    Clock,
    Fingerprint,
    Zap,
    Settings,

    Phone,
    Shield,
    Wifi,
    Cloud,
    Smartphone,
    Lock,
    AlertTriangle,
    Eye,
    Users,
    Building,
    Home
} from 'lucide-react';


const services = [
    {
        title: 'Câmeras IP',
        link: 'cameras-ip',
        icon: Camera,
        subtitle: 'Monitoramento Inteligente em Alta Definição',
        subDescription: 'Monitoramento em alta definição com acesso remoto via smartphone e gravação em nuvem.',
        description: 'Nossas câmeras IP oferecem qualidade de imagem excepcional com resolução Full HD e 4K, permitindo que você monitore sua propriedade de qualquer lugar do mundo através do seu smartphone ou computador.',
        image: cameras_img,
        features: [
            { icon: Eye, title: 'Resolução 4K Ultra HD', description: 'Imagens cristalinas com detalhes impressionantes' },
            { icon: Cloud, title: 'Gravação em Nuvem', description: 'Armazenamento seguro com acesso de qualquer lugar' },
            { icon: Smartphone, title: 'Acesso Remoto', description: 'Monitore pelo app no celular ou tablet' },
            { icon: Shield, title: 'Visão Noturna', description: 'Monitoramento 24h com infravermelho avançado' },
            { icon: Wifi, title: 'Conexão Sem Fio', description: 'Instalação flexível via Wi-Fi ou cabo' },
            { icon: Bell, title: 'Detecção de Movimento', description: 'Alertas instantâneos no seu celular' }
        ],
        benefits: [
            'Monitoramento em tempo real de qualquer lugar',
            'Gravações armazenadas por até 30 dias',
            'Detecção inteligente de pessoas e veículos',
            'Áudio bidirecional para comunicação',
            'Compatível com assistentes virtuais',
            'Instalação profissional inclusa'
        ],
        applications: [
            { icon: Home, title: 'Residências', description: 'Proteja sua família e seu lar' },
            { icon: Building, title: 'Empresas', description: 'Segurança para seu negócio' },
            { icon: Users, title: 'Condomínios', description: 'Monitoramento de áreas comuns' }
        ]
    },


    {
        title: 'Alarmes Inteligentes',
        link: 'alarmes-inteligentes',
        icon: Bell,
        subtitle: 'Proteção Proativa com Tecnologia de Ponta',
        subDescription: 'Sistemas de alarme com sensores de última geração e notificações instantâneas.',
        description: 'Sistemas de alarme com sensores de última geração que detectam intrusões, fumaça, gás e alagamentos. Receba notificações instantâneas e mantenha sua propriedade segura 24 horas por dia.',
        image: alarme_img,
        features: [
            { icon: AlertTriangle, title: 'Sensores de Presença', description: 'Detecção de movimento por infravermelho' },
            { icon: Bell, title: 'Sirene Potente', description: 'Alarme sonoro de até 120dB' },
            { icon: Smartphone, title: 'App de Controle', description: 'Arme e desarme pelo celular' },
            { icon: Shield, title: 'Anti-Sabotagem', description: 'Proteção contra violação do sistema' },
            { icon: Wifi, title: 'Conexão Múltipla', description: 'Wi-Fi, 4G e linha telefônica' },
            { icon: Lock, title: 'Bateria Backup', description: 'Funciona mesmo sem energia' }
        ],
        benefits: [
            'Notificações instantâneas no celular',
            'Integração com câmeras e controle de acesso',
            'Monitoramento de portas e janelas',
            'Sensores de quebra de vidro',
            'Proteção contra incêndio e vazamento de gás',
            'Suporte técnico 24 horas'
        ],
        applications: [
            { icon: Home, title: 'Casas', description: 'Proteção completa para residências' },
            { icon: Building, title: 'Lojas', description: 'Segurança para comércios' },
            { icon: Users, title: 'Escritórios', description: 'Ambiente corporativo protegido' }
        ]
    },


    {
        title: 'Monitoramento 24h',
        link: 'monitoramento-24h',
        icon: Clock,
        subtitle: 'Central de Vigilância Sempre Ativa',
        subDescription: 'Central de monitoramento ativa 24 horas, 7 dias por semana, com resposta imediata.',
        description: 'Nossa central de monitoramento opera 24 horas por dia, 7 dias por semana, com profissionais treinados prontos para acionar as autoridades ou equipe de resposta rápida em caso de emergência.',
        image: monitoramento_img,
        features: [
            { icon: Eye, title: 'Vigilância Constante', description: 'Operadores monitorando 24/7' },
            { icon: Phone, title: 'Resposta Imediata', description: 'Acionamento rápido de autoridades' },
            { icon: Shield, title: 'Equipe Tática', description: 'Resposta armada disponível' },
            { icon: Cloud, title: 'Central Redundante', description: 'Backup em múltiplas localidades' },
            { icon: Users, title: 'Profissionais Certificados', description: 'Equipe altamente treinada' },
            { icon: Bell, title: 'Múltiplos Alertas', description: 'SMS, ligação e push notification' }
        ],
        benefits: [
            'Tempo de resposta inferior a 60 segundos',
            'Comunicação direta com polícia e bombeiros',
            'Verificação de alarmes por vídeo',
            'Relatórios mensais de ocorrências',
            'Atendimento personalizado',
            'Cobertura nacional'
        ],
        applications: [
            { icon: Home, title: 'Residencial', description: 'Tranquilidade para sua família' },
            { icon: Building, title: 'Comercial', description: 'Proteção para seu patrimônio' },
            { icon: Users, title: 'Industrial', description: 'Segurança para grandes áreas' }
        ]
    },


    {
        title: 'Controle de Acesso',
        link: 'controle-de-acesso',
        icon: Lock,
        subtitle: 'Gestão Inteligente de Entrada e Saída',
        subDescription: 'Biometria, cartões e senhas para controle total de entrada e saída.',
        description: 'Soluções avançadas de controle de acesso com biometria, reconhecimento facial, cartões de proximidade e senhas. Tenha controle total sobre quem entra e sai da sua propriedade.',
        image: acesso_img,
        features: [
            { icon: Fingerprint, title: 'Biometria Digital', description: 'Leitura precisa de impressão digital' },
            { icon: Eye, title: 'Reconhecimento Facial', description: 'Identificação por IA avançada' },
            { icon: Lock, title: 'Cartão de Proximidade', description: 'Acesso rápido e prático' },
            { icon: Smartphone, title: 'Acesso por App', description: 'Libere portas pelo celular' },
            { icon: Users, title: 'Gestão de Usuários', description: 'Cadastro ilimitado de pessoas' },
            { icon: Clock, title: 'Controle de Horários', description: 'Defina permissões por período' }
        ],
        benefits: [
            'Registro de todas as entradas e saídas',
            'Integração com ponto eletrônico',
            'Bloqueio automático em horários definidos',
            'Níveis de acesso personalizados',
            'Relatórios detalhados de movimentação',
            'Integração com câmeras e alarmes'
        ],
        applications: [
            { icon: Building, title: 'Empresas', description: 'Controle de colaboradores' },
            { icon: Users, title: 'Condomínios', description: 'Gestão de moradores e visitantes' },
            { icon: Home, title: 'Residências', description: 'Acesso seguro para sua casa' }
        ]
    },


    {
        title: 'Cerca Elétrica',
        link: 'cerca-eletrica',
        icon: Zap,
        subtitle: 'Barreira Perimetral de Alta Segurança',
        subDescription: 'Proteção perimetral com cercas elétricas de alta voltagem e alarme integrado.',
        description: 'Cercas elétricas de alta voltagem que funcionam como uma barreira física e psicológica contra invasores. Sistema integrado com alarme para máxima proteção do perímetro.',
        image: cerca_img,
        features: [
            { icon: Zap, title: 'Alta Voltagem', description: 'Choque não letal mas eficiente' },
            { icon: Bell, title: 'Alarme Integrado', description: 'Disparo ao tocar na cerca' },
            { icon: Shield, title: 'Certificação ABNT', description: 'Equipamento homologado' },
            { icon: Lock, title: 'Anti-Corte', description: 'Detecta tentativa de rompimento' },
            { icon: Cloud, title: 'Setor Múltiplo', description: 'Divisão por zonas de proteção' },
            { icon: Eye, title: 'LED Indicador', description: 'Sinalização visual de funcionamento' }
        ],
        benefits: [
            'Proteção perimetral completa',
            'Baixo custo de manutenção',
            'Funciona em qualquer clima',
            'Integração com outros sistemas',
            'Sinalização de advertência inclusa',
            'Instalação em muros ou grades'
        ],
        applications: [
            { icon: Home, title: 'Casas', description: 'Proteção do quintal e jardim' },
            { icon: Building, title: 'Indústrias', description: 'Segurança de grandes áreas' },
            { icon: Users, title: 'Sítios e Fazendas', description: 'Proteção rural eficiente' }
        ]
    },


    {
        title: 'Projetos Customizados',
        link: 'projetos-customizados',
        icon: Shield,
        subtitle: 'Soluções Sob Medida Para Sua Necessidade',
        subDescription: 'Soluções personalizadas para residências, empresas e condomínios.',
        description: 'Desenvolvemos projetos personalizados que integram câmeras, alarmes, controle de acesso e monitoramento em uma solução única e completa, adaptada às suas necessidades específicas.',
        // image: projetos_img,
        features: [
            { icon: Settings, title: 'Projeto Exclusivo', description: 'Desenvolvido para sua necessidade' },
            { icon: Users, title: 'Consultoria Técnica', description: 'Análise completa do local' },
            { icon: Shield, title: 'Integração Total', description: 'Todos os sistemas conectados' },
            { icon: Cloud, title: 'Automação', description: 'Cenários automatizados' },
            { icon: Smartphone, title: 'App Centralizado', description: 'Controle tudo em um lugar' },
            { icon: Eye, title: 'Monitoramento Unificado', description: 'Visão completa da segurança' }
        ],
        benefits: [
            'Análise de vulnerabilidades no local',
            'Projeto técnico detalhado',
            'Equipamentos de primeira linha',
            'Instalação profissional',
            'Treinamento completo de uso',
            'Suporte técnico dedicado'
        ],
        applications: [
            { icon: Building, title: 'Grandes Empresas', description: 'Soluções corporativas completas' },
            { icon: Users, title: 'Condomínios', description: 'Segurança integrada' },
            { icon: Home, title: 'Residências de Alto Padrão', description: 'Automação e segurança premium' }
        ]
    }
]

export default services;