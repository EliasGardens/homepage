import logo from '../assets/logo-horizontal.png';

const Footer = () => {
  return (
    <footer className="mt-24 bg-[#323a2f] text-[#f1efe7]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Coluna 1 – brand */}
          <div>
            <img className="max-w-70" src={logo} alt="" />
            <p className="mt-3 text-sm text-[#f1efe7]/80">
              Construção e manutenção de jardins com a dedicação que se nota em cada detalhe.
            </p>
          </div>

          {/* Coluna 2 – contactos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Contactos
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-[#f1efe7]/80">
              <li>Tel / WhatsApp: <a href="https://wa.me/351936099589" className="underline underline-offset-2 hover:text-[#8fa332]">+351 936 099 589</a></li>
              <li>Email: <a href="mailto:elias.martins.gardens@gmail.com" className="underline underline-offset-2 hover:text-[#8fa332]">elias.martins.gardens@gmail.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/elias.gardens/" className="underline underline-offset-2 hover:text-[#8fa332]">@elias.gardens</a></li>
              <li>Zona: Algarve</li>
            </ul>
          </div>

          {/* Coluna 3 – links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Navegação
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-[#f1efe7]/80">
              <li><a href="#servicos" className="hover:text-[#8fa332]">Serviços</a></li>
              <li><a href="#sobre-nos" className="hover:text-[#8fa332]">Sobre nós</a></li>
              <li><a href="#contactos" className="hover:text-[#8fa332]">Contactos</a></li>
            </ul>
          </div>
        </div>

        {/* linha de baixo */}
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col gap-2 text-xs text-[#f1efe7]/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Elias Gardens. Todos os direitos reservados.</span>
          {/* <div className="flex gap-4">
            <a href="/politica-privacidade" className="hover:text-[#8fa332]">
              Política de Privacidade
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;