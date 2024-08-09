import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 text-zinc-500">
      <section className="container flex items-center gap-5">
        <p>Sandro Luz Tattoo Shop</p>
        <span className="text-base leading-3 text-yellow-400">&#8226;</span>

        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        <span className="text-base leading-3 text-yellow-400">&#8226;</span>

        <p className="flex items-center gap-1">
          <FaWhatsapp />
          +55 11 99999 9999
        </p>
      </section>
    </footer>
  );
}
