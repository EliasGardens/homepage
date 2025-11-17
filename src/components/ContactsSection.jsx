import { resourcesLinks } from "../constants";

const ContactsSection = () => {
  return (
    <section className="px-4 md:px-8 my-16" id="contactos">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#f1efe7]/95 px-6 py-10 md:px-10 md:py-12 text-center text-[#323a2f]">
        <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#6b7467]">
          Vamos conversar?
        </h2>

        <p className="mt-4 text-base md:text-lg">
          A primeira visita ao local e orçamento ficam por nossa conta, sem qualquer tipo de
          compromisso. Não hesite em contactar-nos, respondemos em até 24 horas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {resourcesLinks.map((item) => (
            <a
              key={item.text}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#323a2f] px-5 py-2.5 md:px-7 md:py-3
                         text-sm md:text-base font-medium text-[#f1efe7]
                         shadow-md hover:shadow-lg hover:bg-[#252c22]
                         transform transition duration-200 hover:-translate-y-0.5"
            >
              {item.icon}
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
