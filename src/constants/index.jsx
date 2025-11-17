import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";

import manutencaoJardins from "../assets/feature-images/manutencao-jardins.jpg";
import construcaoJardins from "../assets/feature-images/construcao-jardins.jpg";
import palmeira from "../assets/feature-images/palmeira.jpg";
import pestControl from "../assets/feature-images/pest-control.jpg";
import pools from "../assets/feature-images/pools.jpg";
import rega from "../assets/feature-images/sistema-de-rega.jpg";


export const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre-nos" },
  { label: "Contactos", href: "#contactos" },
];

export const features = [
    {
    image: construcaoJardins,
    title: "Construção de Jardins",
    description:
      "Projetamos e criamos jardins personalizados, combinando plantas, relvados e elementos decorativos conforme o estilo desejado.",
  },
  {
    image: manutencaoJardins,
    title: "Manutenção de Jardins",
    description:
      "Cuidamos do seu jardim com cortes regulares, limpeza e tratamento das plantas para manter o espaço sempre saudável e bonito.",
  },
  {
    image: palmeira,
    title: "Poda e Abate em Altura",
    description:
      "Realizamos podas seguras em árvores altas, removendo ramos secos ou perigosos e promovendo o crescimento saudável.",
  },
  {
    image: pestControl,
    title: "Controlo de Pragas",
    description:
      "Aplicamos soluções eficazes para eliminar e prevenir pragas, protegendo plantas, jardins e áreas externas com segurança.",
  },
  {
    image: rega,
    title: "Reparação e Manutenção de Sistemas de Rega",
    description:
      "Instalamos e ajustamos sistemas de rega eficientes, garantindo economia de água e hidratação adequada para todas as áreas verdes.",
  },
  {
    image: pools,
    title: "Manutenção de Piscinas",
    description:
      "Cuidamos da limpeza, equilíbrio químico e bom funcionamento dos equipamentos para manter a piscina sempre pronta a usar.",
  },
];

export const resourcesLinks = [
  { href: "mailto:elias.martins.gardens@gmail.com", text: "Email", icon: <Mail className="w-4 h-4" /> },
  { href: "https://wa.me/351936099589", text: "Whatsapp", icon: <Phone className="w-4 h-4" /> },
  { href: "https://www.instagram.com/elias.gardens/", text: "Instagram", icon: <Instagram className="w-4 h-4" /> },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
