import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Keepit() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);

      // Detectar qual seção está visível
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          const sectionId = section.getAttribute('data-section');
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Keepit com AORKIA | Backup Imutável para Microsoft 365, Google Workspace e Salesforce</title>
        <meta name="description" content="Proteja seus dados SaaS com backup imutável, recuperação granular e conformidade garantida. A AORKIA ativa a Keepit para proteção total dos seus dados críticos." />
        <meta name="theme-color" content="#0076FF" />
      </Head>

      <main className="bg-black text-white">
        {/* Seção Hero */}
        <section 
          id="hero" 
          data-section="hero"
          className="relative h-screen overflow-hidden flex items-center justify-center"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/image/backup.png)` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Logo Keepit */}
              <div className="mb-8">
                <Image 
                  src="/image/keepit_logo_aorkia.png" 
                  alt="Keepit" 
                  className="h-16 md:h-20 w-auto"
                  width={240}
                  height={80}
                  priority
                />
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
                Backup Imutável. Isolamento Real. Recuperação Garantida.
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight max-w-5xl">
                Microsoft, Google e Salesforce não garantem a recuperação dos seus dados
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl">
                A AORKIA ativa a Keepit — plataforma global de backup SaaS — para entregar proteção imutável, restauração granular e conformidade certificada com LGPD, GDPR e HIPAA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
                >
                  Descobrir Recursos
                </button>
                <button 
                  onClick={() => scrollToSection('why-keepit')}
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold text-center"
                >
                  Por que Keepit?
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('why')}
              className="text-white text-4xl"
            >
              <i className="ri-arrow-down-line"></i>
            </button>
          </div>
        </section>

        {/* Seção Por que preciso */}
        <section 
          id="why" 
          data-section="why"
          className="py-20 md:py-32 bg-white text-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Por que preciso da Keepit com AORKIA?
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  A responsabilidade sobre os dados é sua, não do provedor SaaS. Sem um backup isolado e imutável, qualquer exclusão acidental, falha interna ou ransomware pode causar perdas irreversíveis, interrupções operacionais e sanções regulatórias.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-red-600 text-2xl mt-1 mr-4">
                      <i className="ri-error-warning-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Modelo de Responsabilidade Compartilhada</h3>
                      <p className="text-gray-700">Microsoft, Google e Salesforce protegem a infraestrutura, mas você é responsável pelos seus dados.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-600 text-2xl mt-1 mr-4">
                      <i className="ri-delete-bin-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Exclusões Acidentais</h3>
                      <p className="text-gray-700">Erros humanos acontecem. Sem backup independente, a recuperação pode ser impossível.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-red-600 text-2xl mt-1 mr-4">
                      <i className="ri-virus-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ataques de Ransomware</h3>
                      <p className="text-gray-700">Criminosos visam dados SaaS. Backup imutável é sua única garantia de recuperação.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image 
                  src="/image/digital.png" 
                  alt="Proteção de Dados" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção Recursos */}
        <section 
          id="features" 
          data-section="features"
          className="py-20 md:py-32 bg-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                O que você ativa com Keepit
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Proteção completa, recuperação granular e conformidade automatizada para todo seu ecossistema SaaS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-shield-keyhole-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Backup Imutável com Air Gap</h3>
                <p className="text-gray-300 text-lg">
                  Dados isolados em nuvem independente — não podem ser corrompidos ou apagados. Proteção real contra ransomware e falhas internas.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-restart-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Restauração Granular e Instantânea</h3>
                <p className="text-gray-300 text-lg">
                  Recupere um item, uma conta ou toda a estrutura — em minutos e com total controle. Sem perda de produtividade.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-apps-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Cobertura Completa do seu Ecossistema SaaS</h3>
                <p className="text-gray-300 text-lg">
                  Proteção nativa para Microsoft 365, Google Workspace, Salesforce, Dynamics, Azure AD e muito mais.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all">
                <div className="text-primary text-4xl mb-6">
                  <i className="ri-file-shield-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Compliance Automatizado e Retenção Ilimitada</h3>
                <p className="text-gray-300 text-lg">
                  Políticas configuráveis, trilhas de auditoria completas e certificações como ISO 27001, ISAE 3402 e DORA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Calculadora ROI */}
        <section 
          id="roi-calculator" 
          data-section="roi-calculator"
          className="py-20 md:py-32 bg-gradient-to-br from-green-900 to-green-800"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Calculadora ROI Keepit
              </h2>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
                Calcule o retorno sobre investimento para sua organização com a plataforma de proteção de dados SaaS da Keepit
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Formulário da Calculadora */}
              <div className="bg-green-800/50 p-8 rounded-lg border border-green-600/30">
                <h3 className="text-2xl font-bold mb-8 text-white">Sua Organização</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-green-100 text-lg font-medium mb-3">
                      Moeda
                    </label>
                    <select 
                      className="w-full px-4 py-3 bg-green-700 border border-green-600 rounded-lg focus:border-green-400 focus:outline-none text-white"
                      defaultValue="BRL"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="BRL">BRL</option>
                      <option value="GBP">GBP</option>
                      <option value="CAD">CAD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-green-100 text-lg font-medium mb-3">
                      Número de usuários Keepit
                    </label>
                    <input
                      type="number"
                      placeholder="1000"
                      defaultValue="1000"
                      className="w-full px-4 py-3 bg-green-700 border border-green-600 rounded-lg focus:border-green-400 focus:outline-none text-white placeholder-green-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-100 text-lg font-medium mb-3">
                      Usuários SaaS que saem anualmente (%)
                    </label>
                    <input
                      type="number"
                      placeholder="10"
                      defaultValue="10"
                      className="w-full px-4 py-3 bg-green-700 border border-green-600 rounded-lg focus:border-green-400 focus:outline-none text-white placeholder-green-300"
                    />
                  </div>
                </div>
              </div>

              {/* Resultados */}
              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-green-800">Resumo do Primeiro Ano</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <div>
                      <span className="text-gray-600 text-lg">Retorno sobre Investimento (ROI)</span>
                      <div className="flex items-center mt-1">
                        <i className="ri-information-line text-gray-400 mr-1"></i>
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-green-600">163%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <div>
                      <span className="text-gray-600 text-lg">Benefícios de valor presente (PV)</span>
                      <div className="flex items-center mt-1">
                        <i className="ri-information-line text-gray-400 mr-1"></i>
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-green-600">R$ 2.353.445</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-4 border-b border-gray-200">
                    <div>
                      <span className="text-gray-600 text-lg">Valor presente líquido (NPV)</span>
                      <div className="flex items-center mt-1">
                        <i className="ri-information-line text-gray-400 mr-1"></i>
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-green-600">R$ 1.456.955</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-4">
                    <div>
                      <span className="text-gray-600 text-lg">Payback da taxa de serviço</span>
                      <div className="flex items-center mt-1">
                        <i className="ri-information-line text-gray-400 mr-1"></i>
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-green-600">5 meses</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/contato" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-all text-lg font-semibold text-center block"
                  >
                    Criar seu relatório ROI
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-green-200 text-sm max-w-4xl mx-auto">
                <strong>Disclaimer:</strong> O modelo financeiro subjacente para esta calculadora ROI foi comissionado pela Keepit e entregue pela Forrester Consulting com base em sua metodologia Total Economic Impact™. A AORKIA criou esta ferramenta e a Forrester não verificou sua precisão ou certificou seus resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Why Keepit */}
        <section 
          id="why-keepit" 
          data-section="why-keepit"
          className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Por que escolher Keepit com AORKIA?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Resiliência começa com escolhas inteligentes. A nuvem independente da Keepit oferece proteção inteligente e recuperação sem igual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Continuidade de Negócios */}
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                <div className="text-green-400 text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-shield-check-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Continuidade de Negócios, Sempre</h3>
                <p className="text-gray-300 mb-4 font-semibold text-green-400">Proteção independente de fornecedor SaaS</p>
                <p className="text-gray-300">
                  A nuvem independente da Keepit alinha-se com a regra de backup 3-2-1 e o framework NIST, armazenando backups separadamente dos seus dados primários. Garantimos acesso ininterrupto e proteção, mesmo durante downtime do fornecedor SaaS.
                </p>
              </div>

              {/* Recuperação Sem Esforço */}
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                <div className="text-green-400 text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-restart-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Recuperação Sem Esforço, Sempre</h3>
                <p className="text-gray-300 mb-4 font-semibold text-green-400">Interface intuitiva e acesso fácil</p>
                <p className="text-gray-300">
                  Recupere dados críticos ou localize arquivos específicos em segundos. Nossa interface intuitiva não requer treinamento, permitindo localizar, visualizar e restaurar dados com apenas alguns cliques.
                </p>
              </div>

              {/* Certificação Total */}
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                <div className="text-green-400 text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-award-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Certificado para Confiança Total</h3>
                <p className="text-gray-300 mb-4 font-semibold text-green-400">Segurança líder da indústria</p>
                <p className="text-gray-300">
                  Keepit atende aos mais altos padrões de segurança com certificação ISO 27001 em todas as localizações e certificação anual ISAE 3402-II. Design único cloud-native protege seus dados com imutabilidade e resistência a ransomware.
                </p>
              </div>

              {/* Dados Ilimitados */}
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                <div className="text-green-400 text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-database-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Dados Ilimitados, Preço Previsível</h3>
                <p className="text-gray-300 mb-4 font-semibold text-green-400">Modelo de custo transparente por usuário</p>
                <p className="text-gray-300">
                  Preço fixo por usuário da Keepit inclui armazenamento ilimitado de dados sempre disponíveis, ingress/egress e retenção. Sem taxas ocultas, orçamento com confiança com descontos por volume e ofertas em pacote.
                </p>
              </div>

              {/* Compliance Simplificado */}
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                <div className="text-green-400 text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-file-shield-2-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Compliance Simplificado</h3>
                <p className="text-gray-300 mb-4 font-semibold text-green-400">Suporte regulatório simplificado</p>
                <p className="text-gray-300">
                  Keepit simplifica compliance para políticas internas e regulamentações globais, oferecendo proteção confiante de dados SaaS alinhada com GDPR, NIS2, NIST e mais. Suporte para retenção de dados, continuidade e prontidão para auditoria.
                </p>
              </div>

              {/* Expertise AORKIA */}
              <div className="bg-gradient-to-br from-primary/20 to-green-600/20 p-8 rounded-lg border border-primary/30 hover:border-primary/50 transition-all group">
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-team-line"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Expertise AORKIA</h3>
                <p className="text-gray-300 mb-4 font-semibold text-primary">Ativação estratégica e suporte contínuo</p>
                <p className="text-gray-300">
                  A AORKIA não apenas implementa a Keepit — transformamos proteção de dados em vantagem estratégica. Parceiros certificados com expertise comprovada, oferecemos ativação personalizada e suporte contínuo para máximo ROI.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link 
                href="/contato" 
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all text-lg font-semibold"
              >
                <span>Ativar Keepit com AORKIA</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção Como Funciona */}
        <section 
          id="how" 
          data-section="how"
          className="py-20 md:py-32 bg-white text-black"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Como funciona a ativação com a AORKIA
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
                Processo estruturado para implementação, configuração e gestão contínua da sua proteção de dados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Mapeamento do Ambiente</h3>
                <p className="text-gray-700">
                  Análise completa dos riscos operacionais e mapeamento de todos os dados críticos
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Implantação Personalizada</h3>
                <p className="text-gray-700">
                  Configuração da Keepit adaptada às suas necessidades específicas e políticas de retenção
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Automação Completa</h3>
                <p className="text-gray-700">
                  Snapshots automáticos, auditoria contínua e planos de recuperação testados
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Suporte Estratégico</h3>
                <p className="text-gray-700">
                  Capacitação da equipe e suporte contínuo para máxima eficiência
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Diferencial */}
        <section 
          id="differential" 
          data-section="differential"
          className="py-20 md:py-32 bg-gray-900"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image 
                  src="/image/solucoesespecializadas.png" 
                  alt="Diferencial AORKIA" 
                  className="w-full h-auto rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  O diferencial AORKIA
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Na AORKIA, ativar Keepit é mais do que implementar uma tecnologia — é transformar proteção de dados em um pilar estratégico de continuidade, governança e vantagem competitiva.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-check-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expertise Certificada</h3>
                      <p className="text-gray-300">Parceiros oficiais Keepit com certificações avançadas e experiência comprovada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-check-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Suporte Estratégico</h3>
                      <p className="text-gray-300">Não apenas implementamos, mas orientamos sua estratégia de proteção de dados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary text-2xl mt-1 mr-4">
                      <i className="ri-check-line"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Resultados Mensuráveis</h3>
                      <p className="text-gray-300">Métricas claras de proteção, conformidade e tempo de recuperação</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Riscos */}
        <section 
          id="risks" 
          data-section="risks"
          className="py-20 md:py-32 bg-red-900/20 border-t border-b border-red-500/30"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-400">
                O que você pode perder sem isso
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Os riscos de não ter backup imutável são reais e podem ser devastadores para seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-900/30 p-8 rounded-lg border border-red-500/30">
                <div className="text-red-400 text-3xl mb-4">
                  <i className="ri-delete-bin-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Perda Irreversível de Dados</h3>
                <p className="text-gray-300">
                  E-mails, arquivos e históricos valiosos perdidos para sempre, sem possibilidade de recuperação
                </p>
              </div>

              <div className="bg-red-900/30 p-8 rounded-lg border border-red-500/30">
                <div className="text-red-400 text-3xl mb-4">
                  <i className="ri-scales-3-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Não Conformidade Regulatória</h3>
                <p className="text-gray-300">
                  Violação de LGPD, GDPR, HIPAA ou DORA com multas pesadas e danos reputacionais
                </p>
              </div>

              <div className="bg-red-900/30 p-8 rounded-lg border border-red-500/30">
                <div className="text-red-400 text-3xl mb-4">
                  <i className="ri-pause-circle-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Paralisação Operacional</h3>
                <p className="text-gray-300">
                  Operações interrompidas por falhas humanas ou ataques externos, com impacto direto na receita
                </p>
              </div>

              <div className="bg-red-900/30 p-8 rounded-lg border border-red-500/30">
                <div className="text-red-400 text-3xl mb-4">
                  <i className="ri-search-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">Impossibilidade de Auditoria</h3>
                <p className="text-gray-300">
                  Incapacidade de auditar e comprovar a integridade dos dados para compliance e governança
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA Final */}
        <section 
          id="cta" 
          data-section="cta"
          className="py-20 md:py-32 bg-primary"
        >
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Proteja Seus Dados com Quem Ativa Resiliência de Verdade
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto">
              Blindar seus dados SaaS não é uma opção — é uma decisão estratégica. Fale com a AORKIA e ative agora a proteção imutável com Keepit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contato" 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg transition-all text-lg font-semibold"
              >
                Falar com Especialista
              </Link>
              <Link 
                href="/solucoes" 
                className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg transition-all text-lg font-semibold"
              >
                Ver Todas as Soluções
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

