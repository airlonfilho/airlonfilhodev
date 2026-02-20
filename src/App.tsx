import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Rocket,
  Code2,
  MessageCircle,
  Instagram,
  Globe
} from 'lucide-react';

const BentoBlock = ({ className, children, href }: any) => {
  const BlockTag = href ? motion.a : motion.div;
  
  return (
    <BlockTag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`bg-zinc-800/50 border border-zinc-700/50 rounded-3xl p-5 md:p-6 flex flex-col justify-between overflow-hidden shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </BlockTag>
  );
};

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4 md:p-6 lg:p-8 font-sans">
      
      {/* Grid Principal: 2 colunas no mobile, 6 no desktop */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 w-full auto-rows-[160px] md:auto-rows-[200px]">
        
        {/* Bloco 1: Perfil (Ocupa 2 colunas no mobile, 2 no desktop) */}
        <BentoBlock className="col-span-2 md:col-span-2 row-span-2 flex flex-col justify-end relative">
          <div className="absolute top-5 left-5 md:top-6 md:left-6 flex space-x-2">
            <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium border border-purple-400/30">
              <Rocket size={12} className="animate-bounce" />
              Inovando & Criando
            </span>
          </div>
          
          <div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-700/50 rounded-full mb-3 md:mb-4 border-2 border-zinc-600/50 flex items-center justify-center overflow-hidden">
              <img src="https://avatars.githubusercontent.com/u/32520985?v=4" alt="Airlon Filho" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-white">Airlon Filho</h1>
            <p className="text-sm md:text-base text-zinc-300 font-medium mb-4">Full Stack Developer | Angular & Spring Boot</p>
            
            <div className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Briefcase size={14} className="md:w-4 md:h-4 text-zinc-500" /> Dev na Capgemini
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={14} className="md:w-4 md:h-4 text-zinc-500" /> ADS (UFCA)
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="md:w-4 md:h-4 text-zinc-500" /> Brasil
              </div>
            </div>
          </div>
        </BentoBlock>

        {/* Blocos 2-4: GitHub, LinkedIn, Portfolio (3 na mesma linha) */}
        <div className="col-span-2 md:col-span-4 grid grid-cols-3 gap-3 md:gap-4">
          {/* GitHub */}
          <BentoBlock href="https://github.com/airlonfilho" className="col-span-1 row-span-1 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 group">
            <div className="h-full flex flex-col justify-center items-center gap-2">
              <div className="bg-white/10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors">
                <Github size={20} className="md:w-7 md:h-7" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">GitHub</span>
            </div>
          </BentoBlock>

          {/* LinkedIn */}
          <BentoBlock href="https://linkedin.com/in/airlonfilho" className="col-span-1 row-span-1 bg-gradient-to-br from-blue-900/20 to-blue-800/20 group border-blue-500/20">
            <div className="h-full flex flex-col justify-center items-center gap-2">
              <div className="bg-blue-500/20 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Linkedin size={20} className="md:w-7 md:h-7" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">LinkedIn</span>
            </div>
          </BentoBlock>

          {/* Portfolio */}
          <BentoBlock href="https://airlonfilho.dev" className="col-span-1 row-span-1 bg-gradient-to-br from-emerald-900/20 to-emerald-800/20 group border-emerald-500/20">
            <div className="h-full flex flex-col justify-center items-center gap-2">
              <div className="bg-emerald-500/20 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Globe size={20} className="md:w-7 md:h-7" />
              </div>
              <span className="text-[10px] md:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">Portfolio</span>
            </div>
          </BentoBlock>
        </div>

        {/* Bloco 5: WhatsApp */}
        <BentoBlock href="https://wa.me/5588996644768" className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-green-900/20 to-green-800/20 group relative overflow-hidden border-green-500/20">
          <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <MessageCircle size={80} className="md:w-[100px] md:h-[100px]" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="bg-green-500/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-green-300 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <MessageCircle size={16} className="md:w-5 md:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-white">WhatsApp</h3>
              <p className="text-[10px] md:text-sm text-zinc-300 font-medium leading-tight">Contato direto</p>
            </div>
          </div>
        </BentoBlock>

        {/* Bloco 6: Instagram */}
        <BentoBlock href="https://instagram.com/airlonfilho" className="col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-pink-900/20 to-purple-900/20 group relative overflow-hidden border-pink-500/20">
          <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <Instagram size={80} className="md:w-[100px] md:h-[100px]" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-pink-300 group-hover:from-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all">
              <Instagram size={16} className="md:w-5 md:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-white">Instagram</h3>
              <p className="text-[10px] md:text-sm text-zinc-300 font-medium leading-tight">Siga-me</p>
            </div>
          </div>
        </BentoBlock>

        {/* Bloco 7: Concurseia */}
        <BentoBlock href="https://github.com/airlonfilho/concurseia" className="col-span-2 md:col-span-3 row-span-1 group">
          <div className="flex items-start justify-between">
            <div className="bg-purple-500/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-4 text-purple-300 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Code2 size={16} className="md:w-5 md:h-5" />
            </div>
            <span className="text-[10px] md:text-xs font-mono text-zinc-300 bg-zinc-900/80 px-2 py-1 rounded-md">Next.js • IA</span>
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg text-white">Concurseia</h3>
            <p className="text-xs md:text-sm text-zinc-300 mt-1 line-clamp-2">SaaS com IA para auxiliar na preparação para concursos públicos.</p>
          </div>
        </BentoBlock>

        {/* Bloco 8: Psicoagenda */}
        <BentoBlock href="https://github.com/airlonfilho/psicoagenda" className="col-span-2 md:col-span-3 row-span-1 group">
          <div className="flex items-start justify-between">
            <div className="bg-cyan-500/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 md:mb-4 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              <Code2 size={16} className="md:w-5 md:h-5" />
            </div>
            <span className="text-[10px] md:text-xs font-mono text-zinc-300 bg-zinc-900/80 px-2 py-1 rounded-md">TypeScript • React</span>
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg text-white">Psicoagenda</h3>
            <p className="text-xs md:text-sm text-zinc-300 mt-1 line-clamp-2">Sistema de agendamento para profissionais de psicologia.</p>
          </div>
        </BentoBlock>

      </div>
    </div>
  );
}