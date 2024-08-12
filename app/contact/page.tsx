import Image from "next/image";
import ContactImage from '../_assets/contact.png';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex gap-10 justify-between">
      <section>
        <h1 className="font-black text-3xl mt-12">Entre em <span className="text-yellow-400">contato</span></h1>

        <p className="text-sm font-extralight text-zinc-400 mt-12">
          Clique no botão abaixo e envie uma mensagem. <br />
          Vamos conversar!
        </p>

        <Link target="_blank" href={`https://wa.me/5511999999999?text=Ol%C3%A1%20Sandro!%20Desejo%20fazer%20um%20or%C3%A7amento.`}>
          <button className="mt-12 flex items-center gap-2 p-4 bg-zinc-700 border-b-4 border-zinc-800 rounded-md">
            <FaWhatsapp className="w-8 h-8" />

            <div>
              <p className="text-sm">Enviar mensagem</p>
              <p className="items-center text-xs text-zinc-400 font-extralight">+55 11 99999-9999</p>
            </div>
          </button>
        </Link>
      </section>

      <Image
        src={ContactImage}
        alt="Tattoo Artist Working"
        width={700}
      />
    </main>
  );
}
