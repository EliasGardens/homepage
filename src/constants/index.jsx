import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Instagram } from "lucide-react";

import construcaoJardins from "../assets/feature-images/construcao-jardins.jpg";
import manutencaoJardins from "../assets/feature-images/manutencao-jardins.jpg";
import palmeira from "../assets/feature-images/palmeira.jpg";
import pestControl from "../assets/feature-images/pest-control.jpg";
import pools from "../assets/feature-images/pools.jpg";
import rega from "../assets/feature-images/sistema-de-rega.png";


export const navItems = [
  { label: "Serviços", href: "#" },
  { label: "Sobre nós", href: "#" },
  { label: "Contactos", href: "#" },
];

export const features = [
  {
    image: construcaoJardins,
    title: "Construção de Jardins",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    image: manutencaoJardins,
    title: "Manutenção de Jardins",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    image: palmeira,
    title: "Poda e Abate em Altura",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    image: pestControl,
    title: "Controlo de Pragas",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    image: rega,
    title: "Reparação e Manutenção de Sistemas de Rega",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
  {
    image: pools,
    title: "Manutenção de Piscinas",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
];

export const resourcesLinks = [
  { href: "mailto:elias.martins.gardens@gmail.com", text: "elias.martins.gardens@gmail.com", icon: <Mail /> },
  { href: "https://wa.me/00351936099589", text: "Contacto", icon: <Phone /> },
  { href: "https://www.instagram.com/elias.gardens/", text: "Instagram", icon: <Instagram /> },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
