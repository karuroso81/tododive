export const FAQ = () => {
  return (
    <section className="mt-12 bg-[#121939] border border-[#1c2a4a]
                        rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        FAQ
      </h2>

      <div className="space-y-3">
        <details className="bg-[#0e1430] border border-[#1c2a4a]
                            rounded-xl p-3">
          <summary className="cursor-pointer font-semibold">
            ¿Necesito certificado médico?
          </summary>
          <p className="mt-2 text-[#b9c4d6]">
            Para cursos iniciales, una declaración de salud suele bastar;
            para especialidades profundas puede requerirse certificado reciente.
          </p>
        </details>

        <details className="bg-[#0e1430] border border-[#1c2a4a]
                            rounded-xl p-3">
          <summary className="cursor-pointer font-semibold">
            ¿Qué llevo a la primera clase?
          </summary>
          <p className="mt-2 text-[#b9c4d6]">
            Bañador, toalla y ganas. Nosotros ponemos el resto.
          </p>
        </details>
      </div>
    </section>
  );
};
