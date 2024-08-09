import Image from "next/image";
import { londrinaSolid } from "./_lib/fonts";
import Portrait from '@/app/_assets/Portrait.png';

export default function Home() {
  return (
    <>
      <main className="relative flex flex-1">
        <h1 className={`absolute text-[400px] text-zinc-800 -left-20 leading-tight top-0 -z-10 ${londrinaSolid.className}`}>
          Tattoo
        </h1>

        <section className="pt-56 font-black uppercase text-zinc-600 text-8xl">
          <h2>Inspire-se</h2>
          <h2>Expresse-se</h2>
          <h2 className="text-yellow-400">Tatua-se</h2>
        </section>

        <Image
          className="absolute bottom-0 right-0 w-80 grayscale"
          src={Portrait}
          alt="Sandro Luz Portrait"
        />
      </main>
    </>
  );
}
