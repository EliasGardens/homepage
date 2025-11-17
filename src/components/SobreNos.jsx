import { motion } from "motion/react";

const SobreNos = () => {
  return (
    <section className="px-4 md:px-8 my-16" id="sobre-nos">
      <motion.div
        className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#f1efe7]/95 px-6 py-10 md:px-10 md:py-12 text-center text-[#323a2f]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-sm font-semibold tracking-[0.25em] uppercase text-[#6b7467] text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Sobre Nós
        </motion.h2>

        <motion.p
          className="mt-6 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          Trabalhamos em toda a região do{" "}
          <span className="font-semibold">Algarve</span>, sempre com proximidade, atenção ao detalhe e verdadeiro respeito pela natureza de cada espaço.
        </motion.p>

        <motion.p
          className="mt-6 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Acreditamos que um jardim bem cuidado transforma a forma como vivemos. Por isso, dedicamo-nos a criar e manter espaços exteriores que trazem beleza, tranquilidade e bem-estar ao seu dia a dia. Acompanhamos cada cliente para entender as suas ideias, as suas necessidades e o ambiente que deseja criar.
        </motion.p>

        <motion.p
          className="mt-6 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          O resultado é simples: soluções honestas, cuidadas e pensadas para que possa desfrutar do seu jardim sem preocupações.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SobreNos;
