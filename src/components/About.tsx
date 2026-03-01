export const About = () => {
  return (
    <section className="mt-12 bg-[#121939] border border-[#1c2a4a]
                        rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        ¿Por qué TodoDive?
      </h2>

      <ul className="list-disc pl-5 space-y-2 text-[#e9f1ff]">
        <li>
          Instructores certificados y <em>briefing</em> completo antes de cada
          inmersión.
        </li>
        <li>
          Material renovado, botellas revisadas y plan de seguridad.
        </li>
        <li>
          Grupos reducidos (máx. 4 alumnos por instructor).
        </li>
      </ul>

      <div className="flex flex-wrap justify-between gap-4 mt-6 text-sm text-[#b9c4d6]">
        <small>Centro asociado · Seguro RC · Oxígeno a bordo</small>
        <small>Tel: +34 600 000 000 · hola@TodoDive.example</small>
      </div>
    </section>
  );
};
