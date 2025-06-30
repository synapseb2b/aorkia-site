import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function BackupSaaSEstrategico() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [sectionBackgrounds, setSectionBackgrounds] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Detectar quais seções devem ter background image
      const sections = [
        'risco-real',
        'responsabilidade', 
        'resiliencia',
        'pilares',
        'cobertura',
        'desafios',
        'confianca',
        'depoimentos',
        'certificacoes'
      ];

      const newBackgrounds = {};
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Ativar background quando a seção está visível
          newBackgrounds[sectionId] = rect.top < window.innerHeight && rect.bottom > 0;
        }
      });

      setSectionBackgrounds(newBackgrounds);

      // Detectar seção ativa
      const allSections = document.querySelectorAll('[data-section]');
      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getSectionBackground = (sectionId) => {
    return sectionBackgrounds[sectionId] ? 'opacity-20' : 'opacity-0';
  };

  return (
    <>
      <Head>
        <title>Backup SaaS Estratégico - Keepit | AORKIA</title>
        <meta name="description" content="Proteção Imutável. Recuperação Rápida. Conformidade Garantida. A AORKIA ativa a Keepit para backup SaaS estratégico com proteção real contra ransomware." />
        <meta name="keywords" content="backup saas, keepit, proteção imutável, recuperação rápida, conformidade, LGPD, GDPR, ransomware, Microsoft 365, Google Workspace, Salesforce" />
        <link rel="canonical" href="https://aorkia.com/backup_saas_estrategico" />
      </Head>

      {/* Barra de Progresso */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="min-h-screen bg-white relative">
        {/* Hero Section */}
        <section id="hero" data-section="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/video/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          
          <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Backup SaaS Estratégico
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 text-center">
              Proteção Imutável. Recuperação Rápida. Conformidade Garantida.
            </p>
            <p className="text-lg md:text-xl mb-10 text-center max-w-4xl mx-auto">
              Microsoft, Google e Salesforce não protegem seus dados contra exclusões, erros humanos ou ransomware. A AORKIA ativa a Keepit — líder global em backup SaaS — para garantir recuperação granular, backups 100% imutáveis e conformidade com LGPD e GDPR.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="#risco-real" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Veja o Risco Real
              </Link>
              <Link href="/contato" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-600 transition duration-300">
                Ativar Proteção Agora
              </Link>
            </div>
          </div>
        </section>

        {/* O Risco Real por trás da Proteção Nativa */}
        <section id="risco-real" data-section="risco-real" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('risco-real')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              O Risco Real por trás da Proteção Nativa
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Ferramentas Nativas */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-500 shadow-lg">
                    <h3 className="text-2xl font-bold text-red-700 mb-8 text-center">
                      Ferramentas Nativas (Microsoft 365 / Google)
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Retenção Limitada:</h4>
                        <p className="text-gray-600 text-center">Apenas 30-90 dias de histórico, insuficiente para recuperação de longo prazo.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Sem Proteção contra Ransomware:</h4>
                        <p className="text-gray-600 text-center">Dados podem ser corrompidos ou criptografados por ataques.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Recuperação Complexa:</h4>
                        <p className="text-gray-600 text-center">Processo manual, demorado e sem garantias de integridade.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Responsabilidade do Cliente:</h4>
                        <p className="text-gray-600 text-center">Fornecedores deixam claro que a proteção dos dados é sua responsabilidade.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backup SaaS com Keepit */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-500 shadow-lg">
                    <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">
                      Backup SaaS com Keepit
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Backup Imutável:</h4>
                        <p className="text-gray-600 text-center">Dados protegidos em nuvem independente, impossível de corromper ou apagar.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Recuperação Granular:</h4>
                        <p className="text-gray-600 text-center">Restaure qualquer item em minutos, de um e-mail a uma conta completa.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Conformidade Garantida:</h4>
                        <p className="text-gray-600 text-center">Atende LGPD, GDPR e outras regulamentações com trilhas de auditoria.</p>
                      </div>
                      
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">Suporte Especializado:</h4>
                        <p className="text-gray-600 text-center">Equipe AORKIA para implementação e gestão contínua.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Responsabilidade é Sua. A Microsoft Confirma. */}
        <section id="responsabilidade" data-section="responsabilidade" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('responsabilidade')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <i className="ri-shield-cross-line text-6xl text-white/80"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  A Responsabilidade é Sua. A Microsoft Confirma.
                </h3>
                <blockquote className="text-lg md:text-xl text-white/90 italic leading-relaxed mb-6">
                  "A Microsoft não garante que será possível recuperar dados excluídos após o período de retenção. É responsabilidade do cliente implementar soluções de backup adequadas."
                </blockquote>
                <p className="text-sm text-white/70 font-medium">
                  Fonte: Documentação Oficial Microsoft 365
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Não é só um Backup. É a Resiliência que salva o seu negócio. */}
        <section id="resiliencia" data-section="resiliencia" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('resiliencia')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                Não é só um Backup. É a Resiliência que salva o seu negócio.
              </h2>
              
              <div className="relative">
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl"></div>
                
                <div className="relative z-10 p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                          Diante do risco iminente de perda de dados em nuvem e das pesadas multas da LGPD, uma simples ferramenta de backup é insuficiente.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 shadow-lg">
                        <p className="text-xl font-bold text-white text-center">
                          A resposta precisa ser uma estratégia.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                          A AORKIA entrega essa estratégia completa: ativamos a Keepit e implementamos seu backup imutável, com soberania de dados no Brasil, como um pilar fundamental de continuidade e governança.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 shadow-2xl text-white text-center">
                        <div className="text-5xl mb-4">
                          <i className="ri-shield-check-line"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Resultado Garantido</h3>
                        <p className="text-lg leading-relaxed">
                          Recuperação instantânea e tranquilidade da conformidade total para o seu negócio.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Os Pilares da Proteção Real */}
        <section id="pilares" data-section="pilares" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('pilares')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Os Pilares da Proteção Real
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 1º Pilar */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-shield-keyhole-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Backup Imutável com Air Gap</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Seus backups são armazenados em uma nuvem privada e independente, com tecnologia verificada por blockchain que garante a imutabilidade.
                </p>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Desta forma, nenhum ataque de ransomware pode alcançá-los ou corrompê-los, exatamente por estarem isolados da sua rede (Air Gap)!
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-green-700 mb-1">
                    Risco de paralisação por ransomware é mitigado.
                  </p>
                  <p className="text-sm font-medium text-green-700">
                    Em caso de ataque, a recuperação dos seus dados é 100% garantida, protegendo a receita e a reputação da empresa.
                  </p>
                </div>
              </div>

              {/* 2º Pilar */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-restart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Restauração Granular e Instantânea</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Uma interface de busca inteligente permite localizar e restaurar qualquer item – de um único e-mail a uma conta inteira do Salesforce – em minutos, sem scripts complexos.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-green-700 mb-1">
                    O tempo de inatividade (downtime) é drasticamente reduzido.
                  </p>
                  <p className="text-sm font-medium text-green-700">
                    A produtividade da equipe é mantida, pois a recuperação de um erro humano não paralisa a operação.
                  </p>
                </div>
              </div>

              {/* 3º Pilar */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Soberania de Dados no Brasil</h3>
                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                  Garantia de que seus dados residem em uma nuvem privada e independente, com duas cópias replicadas em datacenters distintos localizados em São Paulo.
                </p>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  Isso assegura soberania total dos dados em território nacional, atendendo plenamente aos requisitos mais rigorosos da LGPD.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-2">
                    O que na prática isto significa para o seu negócio:
                  </p>
                  <p className="text-sm font-medium text-green-700 mb-1">
                    Risco de multas por não conformidade é eliminado.
                  </p>
                  <p className="text-sm font-medium text-green-700">
                    Simplifica auditorias e garante que a empresa cumpra as regulamentações de proteção de dados mais rigorosas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cobertura Completa */}
        <section id="cobertura" data-section="cobertura" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('cobertura')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Cobertura Completa do seu Ecossistema SaaS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto items-center">
              <div className="flex flex-col items-center">
                <Image src="/icon/microsoft_365.png" alt="Microsoft 365" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Microsoft 365</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/gcp.png" alt="Google Workspace" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Google Workspace</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/salesforce.png" alt="Salesforce" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Salesforce</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/zendesk.png" alt="Zendesk" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Zendesk</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/microsoft_dynamics_365.png" alt="Dynamics 365" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Dynamics 365</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/icon/azure_devops.png" alt="Azure DevOps" width={60} height={60} className="mb-2" />
                <span className="text-sm font-medium text-gray-700 text-center">Azure DevOps</span>
              </div>
            </div>
          </div>
        </section>

        {/* Uma Solução. Respostas para Cada Desafio Estratégico. */}
        <section id="desafios" data-section="desafios" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('desafios')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Uma Solução. Respostas para Cada Desafio Estratégico.
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Desafio 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="ri-error-warning-line text-2xl text-red-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ransomware atingiu nossa infraestrutura SaaS</h3>
                    <p className="text-gray-600 mb-4">Como recuperar rapidamente sem pagar resgate?</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-green-700 font-medium">
                        <strong>Solução Keepit:</strong> Backup imutável com Air Gap garante que seus dados estejam protegidos em nuvem independente. Recuperação completa em horas, não semanas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desafio 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-unfollow-line text-2xl text-orange-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Funcionário deletou dados críticos por engano</h3>
                    <p className="text-gray-600 mb-4">Como recuperar informações específicas sem afetar o restante?</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-green-700 font-medium">
                        <strong>Solução Keepit:</strong> Restauração granular permite recuperar desde um único e-mail até contas completas em minutos, com busca inteligente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desafio 3 */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="ri-shield-cross-line text-2xl text-purple-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Auditoria LGPD está chegando</h3>
                    <p className="text-gray-600 mb-4">Como comprovar conformidade e controle de dados?</p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-green-700 font-medium">
                        <strong>Solução Keepit:</strong> Dados no Brasil, trilhas de auditoria completas e certificações ISO 27001, ISAE 3402 garantem conformidade total.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confiança Validada pelo Mercado Global */}
        <section id="confianca" data-section="confianca" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('confianca')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              Confiança Validada pelo Mercado Global
            </h2>
            
            {/* Clientes Globais */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Clientes Globais</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
                <div className="flex flex-col items-center">
                  <Image src="/icon/porsche.png" alt="Porsche" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/oxford_university.png" alt="Oxford University" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/alpla.png" alt="Alpla" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/hdi.png" alt="HDI" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>

            {/* Clientes Nacionais */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-8">Clientes Nacionais</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
                <div className="flex flex-col items-center">
                  <Image src="/icon/arezzo.png" alt="Arezzo" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/banco_bv.png" alt="Banco BV" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/db_diagnosticos.png" alt="DB Diagnósticos" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/icon/itausa.png" alt="ITAUSA" width={80} height={60} className="mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600">
                Mais de <strong className="text-primary">15.000 empresas</strong> em <strong className="text-primary">74 países</strong> confiam na Keepit
              </p>
            </div>
          </div>
        </section>

        {/* O que os Clientes que ativaram Keepit dizem? */}
        <section id="depoimentos" data-section="depoimentos" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('depoimentos')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O que os Clientes que ativaram Keepit dizem?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Depoimento 1 - ALPLA */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "A Keepit nos permite escalar nosso negócio facilmente, adicionando novos usuários do Microsoft 365 sem custos ocultos."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Stefan Toefferl</p>
                  <p className="text-sm text-gray-600">Engenheiro Sênior de Data Center, ALPLA</p>
                </div>
              </div>

              {/* Depoimento 2 - Porsche */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "Estávamos procurando uma solução SaaS e não queríamos fazer o backup de todos os dados localmente (on-premise). O backup em nuvem da Keepit, simples e fácil de usar, entregou o que estávamos procurando."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Michael Bojko</p>
                  <p className="text-sm text-gray-600">Engenheiro de Sistemas na Porsche Informatik</p>
                </div>
              </div>

              {/* Depoimento 3 - HDI */}
              <div className="p-6 rounded-lg border-2 border-green-500 bg-transparent text-center">
                <div className="text-4xl text-green-600 mb-4">
                  <i className="ri-double-quotes-l"></i>
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "Temos as mais altas necessidades de proteção de dados, pois lidamos com dados ativos, dados pessoais para seguros de vida e seguros privados. Temos um intervalo de tempo muito curto para 'voltar à ativa' em caso de um desastre."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Philipp Poppe</p>
                  <p className="text-sm text-gray-600">HDI Cloud, Gerente de Produto de Serviços Essenciais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificações e Recursos */}
        <section id="certificacoes" data-section="certificacoes" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background Image Transition */}
          <div 
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${getSectionBackground('certificacoes')}`}
            style={{
              backgroundImage: 'url(/image/backup_vertical.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="relative bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Certificações e Recursos
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <Image src="/icon/iso_27001.png" alt="ISO 27001" width={60} height={60} className="mb-2" />
                    <span className="text-white text-sm font-medium">ISO 27001</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src="/icon/isae_3402.png" alt="ISAE 3402" width={60} height={60} className="mb-2" />
                    <span className="text-white text-sm font-medium">ISAE 3402</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="ri-shield-check-line text-4xl text-white mb-2"></i>
                    <span className="text-white text-sm font-medium">GDPR</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <i className="ri-government-line text-4xl text-white mb-2"></i>
                    <span className="text-white text-sm font-medium">LGPD</span>
                  </div>
                </div>
                
                <p className="text-lg text-white/90 leading-relaxed">
                  Máxima segurança e conformidade com as principais certificações internacionais e regulamentações brasileiras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que o Mercado Diz: Análise do Gartner Peer Insights */}
        <section id="gartner" data-section="gartner" className="py-16 md:py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">
              O que o Mercado Diz: Análise do Gartner Peer Insights
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 border border-gray-200">
                <div className="text-center mb-8">
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex text-yellow-400 text-3xl">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                    <span className="ml-3 text-2xl font-bold text-gray-800">4.8/5</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">Avaliação média no Gartner Peer Insights</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <p className="text-gray-700">dos usuários recomendam a Keepit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                    <p className="text-gray-700">em facilidade de uso</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <blockquote className="text-lg text-gray-700 italic text-center">
                    "A Keepit oferece a melhor solução de backup SaaS do mercado. Interface intuitiva, recuperação rápida e suporte excepcional."
                  </blockquote>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Fonte: Gartner Peer Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cta-final" data-section="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-primary to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Pronto para Blindar Seus Dados SaaS?
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Não deixe seus dados vulneráveis. A AORKIA ativa a Keepit e implementa a proteção imutável que sua empresa precisa. Converse com nossos especialistas agora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-block px-8 py-4 bg-white text-primary rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Falar com Especialista
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-block px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Voltar ao Topo
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

