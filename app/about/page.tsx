import Image from 'next/image';
import Portrait from '@/app/_assets/Portrait.png';
import { islandMoments } from '../_lib/fonts';

export default function About() {
  return (
    <main className="relative flex-1">

      <h1 className='mt-12 text-3xl font-black'>
        Prazer, sou <span className='text-yellow-300'>Sando Luz</span>
      </h1>

      <section className="font-light text-zinc-400 max-w-3xl space-y-4 mt-8">
        <p>Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele. Com mais de 10 anos de experiência no mundo da tatuagem, dedico-me a transformar visões e emoções em arte corporal que expressa quem você é e o que você ama.</p>
        <p>Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço atentamente os desejos e as histórias de meus clientes para que cada peça seja única e pessoal. Especializo-me em vários estilos, desde o delicado traço fino até composições mais robustas e coloridas, garantindo que cada design não só atenda, mas supere as expectativas.</p>
        <p>Além da dedicação à arte, a segurança e o conforto são prioridades no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso quanto aos protocolos de higiene e segurança, garantindo uma experiência segura e confortável para todos.</p>
        <p>Visite meu estúdio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajudá-lo a contar sua história de uma maneira única e eterna. Agende sua consulta e vamos juntos criar algo extraordinário!</p>
      </section>

      <h1 className={`mt-8 text-4xl ${islandMoments.className}`}>Sandro Luz</h1>

      <Image
        className="absolute bottom-0 right-0 w-80"
        src={Portrait}
        alt="Sandro Luz Portrait"
      />
    </main>
  );
}
