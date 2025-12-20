import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Video,
  Wifi,
  Eye,
  Monitor,
  Headphones,
  Calendar,
  MapPin,
  Star,
  Zap
} from 'lucide-react';

const eventTypes = [
  {
    title: 'Shows e Festivais',
    description: 'Cobertura completa de grandes eventos com múltiplas câmeras',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop'
  },
  {
    title: 'Eventos Corporativos',
    description: 'Segurança discreta e eficiente para convenções e conferências',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  },
  {
    title: 'Casamentos e Festas',
    description: 'Monitoramento elegante sem interferir na celebração',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop'
  },
  {
    title: 'Eventos Esportivos',
    description: 'Câmeras estratégicas para controle de multidões',
    image: 'https://images.unsplash.com/photo-1461896836934- voices-of-color-in-one-sentence-f3c30c1e2f7c?w=600&h=400&fit=crop'
  }
];

const features = [
  {
    icon: Camera,
    title: 'Câmeras HD/4K',
    description: 'Equipamentos de última geração com resolução cristalina'
  },
  {
    icon: Video,
    title: 'Gravação Contínua',
    description: 'Registro completo de todo o evento para análise posterior'
  },
  {
    icon: Wifi,
    title: 'Transmissão em Tempo Real',
    description: 'Acompanhe tudo ao vivo de qualquer dispositivo'
  },
  {
    icon: Monitor,
    title: 'Central de Monitoramento',
    description: 'Equipe dedicada acompanhando cada câmera'
  },
  {
    icon: Headphones,
    title: 'Comunicação Integrada',
    description: 'Rádios e sistema de comunicação com sua equipe'
  },
  {
    icon: Clock,
    title: 'Suporte 24h',
    description: 'Técnicos disponíveis durante todo o evento'
  }
];

const benefits = [
  'Instalação e desmontagem sem interferir no evento',
  'Câmeras discretas e de design moderno',
  'Cobertura de todas as áreas críticas',
  'Detecção inteligente de comportamentos suspeitos',
  'Integração com equipe de segurança local',
  'Relatório completo pós-evento com gravações'
];

const stats = [
  { value: '+500', label: 'Eventos Monitorados' },
  { value: '100%', label: 'Satisfação' },
  { value: '24/7', label: 'Suporte Técnico' },
  { value: '+50', label: 'Câmeras Disponíveis' }
];

export default function Eventos() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop"
            alt="Evento"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-transparent" />
        </div>
        
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Segurança Eletrônica para Eventos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Proteção Inteligente Para Seus{' '}
              <span className="text-blue-400">Eventos</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
              Oferecemos soluções completas de monitoramento por câmeras para eventos de todos os portes. 
              Tecnologia de ponta para garantir a segurança de seus convidados e patrimônio.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                (11) 99999-9999
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0f1f35]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Cobertura Completa Para Qualquer Evento
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Desde pequenas festas até grandes festivais, temos a solução ideal de monitoramento para o seu evento.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#162a46] border-[#1e3a5a] overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#162a46] to-transparent" />
                  </div>
                  <CardContent className="p-6 relative -mt-12">
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Recursos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Tecnologia Profissional
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Equipamentos e serviços de alta qualidade para garantir a melhor cobertura do seu evento.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#162a46] border-[#1e3a5a] h-full hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0f1f35]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Como Funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Processo Simples e Eficiente
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contato', description: 'Entre em contato e nos conte sobre seu evento', icon: Phone },
              { step: '02', title: 'Planejamento', description: 'Visitamos o local e planejamos a cobertura', icon: MapPin },
              { step: '03', title: 'Instalação', description: 'Montamos os equipamentos antes do evento', icon: Camera },
              { step: '04', title: 'Monitoramento', description: 'Acompanhamos tudo durante o evento', icon: Eye }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative">
                    <item.icon className="w-8 h-8 text-blue-400" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
                alt="Monitoramento de Eventos"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl p-6 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <Camera className="w-8 h-8 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">+50</div>
                    <div className="text-blue-200 text-sm">Câmeras Disponíveis</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-8">
                Por Que Nos Escolher?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#0f1f35]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Galeria</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Nossos Equipamentos em Ação
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop',
              'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop'
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl"
              >
                <img 
                  src={img}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto Para Proteger Seu Próximo Evento?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Entre em contato agora e solicite um orçamento personalizado. 
                Nossa equipe está pronta para atender sua demanda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Telefone</div>
                    <div className="font-semibold">(11) 99999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">E-mail</div>
                    <div className="font-semibold">eventos@securetech.com.br</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Solicite um Orçamento</h3>
                  <form className="space-y-4">
                    <Input 
                      placeholder="Nome Completo" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                    />
                    <Input 
                      type="email"
                      placeholder="E-mail" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                    />
                    <Input 
                      placeholder="Telefone" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                    />
                    <Input 
                      type="date"
                      placeholder="Data do Evento" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                    />
                    <Textarea 
                      placeholder="Conte-nos sobre seu evento" 
                      rows={3}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 resize-none"
                    />
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 h-12 text-lg font-semibold">
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}