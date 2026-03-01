export const Hero = () => {
  return (
    <header className="relative overflow-hidden rounded-3xl mb-10 mt-14">
      {/* Imagen de fondo */}
      <img
        src="https://www.dresseldivers.com/wp-content/uploads/School-of-fish-banco-de-peces-principal.jpg"
        alt="Buceador descendiendo junto a un cardumen"
        className="w-full h-[55vh] object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b
                   from-black/20 via-black/40 to-[#0b1020]
                   flex items-end"
      >
        <div className="p-8 max-w-3xl">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#40e0d0] mb-3">
            TodoDive
          </h1>

          {/* Descripción */}
          <p className="text-[#b9c4d6] mb-4">
            Formación oficial, inmersiones guiadas y aventuras bajo el mar.
            Equipo incluido, grupos reducidos y seguridad primero.
          </p>

        

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#salidas"
              className="bg-gradient-to-r from-[#00c2ff] to-[#1cffb3]
                         text-[#00263b] font-semibold
                         px-5 py-2 rounded-full"
            >
              Reservar salida
            </a>

            <a
              href="#cursos"
              className="border border-[#314b6b]
                         px-5 py-2 rounded-full"
            >
              Ver cursos
            </a>

            <a
              href="#galeria"
              className="border border-[#314b6b]
                         px-5 py-2 rounded-full text-sm"
            >
              Galería
            </a>

            <a
              href="#contacto"
              className="border border-[#314b6b]
                         px-5 py-2 rounded-full text-sm"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
