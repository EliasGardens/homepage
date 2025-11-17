import { motion } from "motion/react";
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <section className="px-4 md:px-8 my-16" id="servicos">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm font-semibold tracking-[0.25em] uppercase text-[#6b7467] text-center mb-8">
          OS NOSSOS SERVIÇOS
        </h2>

        <div className="space-y-16">
          {features.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                className="grid gap-10 md:grid-cols-2 items-center rounded-[2.5rem] bg-[#f1efe7]/95 px-6 py-10 md:px-10 md:py-12 shadow-2xl"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                {/* COLUNA IMAGEM */}
                <div
                  className={
                    "flex justify-center" +
                    (isEven
                      ? " md:justify-end"
                      : " md:order-2 md:justify-start")
                  }
                >
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                {/* COLUNA TEXTO */}
                <div
                  className={
                    "flex flex-col gap-3 text-[#323a2f] text-center md:justify-center" +
                    (isEven
                      ? " md:text-left md:items-start"
                      : " md:order-1 md:text-right md:items-end")
                  }
                >
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
