'use client'

import Image from "next/image";
import Logo from "../_assets/Logo.svg";
import { londrinaSolid } from "../_lib/fonts";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) return 'underline';
  };

  return (
    <nav className={`container flex justify-between py-8 ${londrinaSolid.className}`}>
      <Link href="/">
        <Image src={Logo} alt="Logo image" />
      </Link>

      <ul className="flex gap-6 text-3xl">
        <li className={isActive(pathname, 'services')}>
          <Link href="/services">Serviços</Link>
        </li>
        <li className={isActive(pathname, 'about')}>
          <Link href="/about">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/contact">
            <span className={isActive(pathname, 'contact')}>
              Contatos
            </span> <br />
            <span className="flex items-center gap-1 text-xs text-zinc-400 font-extralight">
              <FaWhatsapp />
              +55 11 99999-9999
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
