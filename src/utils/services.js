// Images
import cameras_img from "../assets/cam.webp";
import alarme_img from "../assets/alarms.webp";
import monitoramento_img from "../assets/monitoring.webp";
import acesso_img from "../assets/turnstile.webp";
import cerca_img from "../assets/cerca.png";
import event_cameras from "../assets/event-cameras.png";
import interfone from "../assets/interfony.jpg";
import portao_automatico from "../assets/automatic-motor.jpg";



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
    Home,
    MonitorPlay
} from 'lucide-react';


const services = [
    {
        title: 'cftv',
        link: 'cftv',
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
        title: 'alarmes residenciais e empresariais',
        link: 'alarmes',
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
        title: 'Monitoramento Eletrônico 24h',
        link: 'monitoramento',
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
        title: 'Cercas Elétricas',
        link: 'cercas-eletricas',
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
        title: 'portões automáticos',
        link: 'portoes-automaticos',
        image: portao_automatico,
        icon: Shield,
        subtitle: 'Automação, Conforto e Segurança no Seu Dia a Dia',
        subDescription: 'Automação de portões com tecnologia confiável, garantindo praticidade, segurança e durabilidade.',
        description: 'Oferecemos soluções completas em automação de portões para residências, empresas e condomínios. Trabalhamos com equipamentos robustos e de alta performance, proporcionando mais conforto no acesso, segurança reforçada e operação silenciosa, com instalação e manutenção especializada.',
        features: [
            { icon: Shield, title: 'Segurança Reforçada', description: 'Sistemas que evitam acessos não autorizados' },
            { icon: Settings, title: 'Automação Inteligente', description: 'Abertura e fechamento práticos e rápidos' },
            { icon: Smartphone, title: 'Controle Remoto', description: 'Acesso facilitado por controles e dispositivos' },
            { icon: Lock, title: 'Travas de Segurança', description: 'Mais proteção contra invasões' },
            { icon: Clock, title: 'Funcionamento Confiável', description: 'Equipamentos duráveis para uso contínuo' },
            { icon: Users, title: 'Uso Residencial e Comercial', description: 'Soluções adaptadas para cada necessidade' }
        ],
        benefits: [
            'Mais conforto e praticidade no acesso',
            'Aumento significativo da segurança',
            'Equipamentos de alta durabilidade',
            'Redução de riscos de invasão',
            'Manutenção especializada',
            'Soluções sob medida para cada projeto'
        ],
        applications: [
            { icon: Home, title: 'Residências', description: 'Conforto e segurança para o dia a dia' },
            { icon: Building, title: 'Empresas', description: 'Controle eficiente de acesso veicular' },
            { icon: Users, title: 'Condomínios', description: 'Mais organização e segurança coletiva' }
        ]
    },

    {
        title: "interfonia",
        link: 'interfonia',
        image: interfone,
        icon: Phone,
        subtitle: 'Comunicação Clara com Mais Controle e Segurança',
        subDescription: 'Soluções em interfonia para controle de acesso eficiente e comunicação segura.',
        description: 'Nossos sistemas de interfonia oferecem comunicação rápida e segura entre ambientes, permitindo o controle de entrada de visitantes com muito mais praticidade. Ideal para residências, empresas e condomínios que buscam organização, comodidade e segurança no dia a dia.',
        features: [
            { icon: Phone, title: 'Comunicação Instantânea', description: 'Contato rápido entre ambientes internos e externos' },
            { icon: Lock, title: 'Controle de Acesso', description: 'Liberação segura de visitantes' },
            { icon: Building, title: 'Uso Versátil', description: 'Ideal para casas, empresas e condomínios' },
            { icon: Shield, title: 'Mais Segurança', description: 'Redução de acessos indevidos' },
            { icon: Users, title: 'Integração com Portões', description: 'Funciona em conjunto com automação' },
            { icon: Settings, title: 'Instalação Profissional', description: 'Sistema configurado para sua necessidade' }
        ],
        benefits: [
            'Comunicação rápida e eficiente',
            'Mais segurança no controle de visitantes',
            'Integração com portões e fechaduras',
            'Organização no fluxo de entrada',
            'Maior comodidade no dia a dia',
            'Solução ideal para diversos ambientes'
        ],
        applications: [
            { icon: Home, title: 'Residências', description: 'Controle seguro de visitantes' },
            { icon: Building, title: 'Empresas', description: 'Organização e segurança no acesso' },
            { icon: Users, title: 'Condomínios', description: 'Comunicação prática entre moradores e portaria' }
        ]
    },

    {
        title: "monitoramento de eventos",
        link: 'monitoramento-de-eventos',
        image: event_cameras,
        icon: MonitorPlay,
        subtitle: 'Acompanhamento em Tempo Real para Ação Imediata',
        subDescription: 'Monitoramento contínuo de eventos e ocorrências com resposta rápida e eficaz.',
        description: 'O monitoramento de eventos permite o acompanhamento em tempo real de ocorrências detectadas pelos sistemas de segurança, possibilitando ações imediatas conforme protocolos definidos. Essa solução garante maior controle, redução de riscos e mais tranquilidade em situações críticas.',
        features: [
            { icon: Eye, title: 'Monitoramento Contínuo', description: 'Acompanhamento em tempo real das ocorrências' },
            { icon: Bell, title: 'Identificação de Eventos', description: 'Detecção rápida de situações anormais' },
            { icon: Shield, title: 'Ação Conforme Protocolo', description: 'Resposta imediata e organizada' },
            { icon: Users, title: 'Equipe Especializada', description: 'Atendimento profissional e confiável' },
            { icon: Cloud, title: 'Registro de Ocorrências', description: 'Histórico detalhado de eventos' },
            { icon: Clock, title: 'Atuação 24h', description: 'Monitoramento constante e ininterrupto' }
        ],
        benefits: [
            'Identificação rápida de eventos suspeitos',
            'Ação imediata diante de ocorrências',
            'Redução de riscos e perdas',
            'Monitoramento contínuo e confiável',
            'Mais segurança e tranquilidade',
            'Integração com sistemas de alarme e CFTV'
        ],
        applications: [
            { icon: Building, title: 'Empresas', description: 'Gestão eficiente de ocorrências' },
            { icon: Users, title: 'Eventos', description: 'Segurança reforçada em tempo real' },
            { icon: Home, title: 'Residências', description: 'Mais tranquilidade para a família' }
        ]

    },


]

export default services;