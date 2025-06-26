import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Contato() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Efeito para monitorar o progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolagem suave ao clicar no botão "Contato" - agora rola para o footer global
  const scrollToContact = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Contato | AORKIA</title>
        <meta name="description" content="Entre em contato com a AORKIA para descobrir como nossas soluções estratégicas podem impulsionar sua empresa." />
      </Head>

      <main className="bg-black text-white">
        {/* A Hero section foi removida conforme solicitação. */}
      </main>
    </>
  );
}

