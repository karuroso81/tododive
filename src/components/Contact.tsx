export const Contact = () => {
  return (
    <section
      id="contacto"
      className="mt-12 bg-[#121939] border border-[#1c2a4a]
                 rounded-3xl p-6"
    >
      {/* TÍTULO */}
      <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
        <svg className="w-6 h-6 text-green-400">
          <use href={`${import.meta.env.BASE_URL}sprites.svg#icon-whatsapp`} />
        </svg>
        Reserva / Contacto
      </h2>

      {/* DESCRIPCIÓN */}
      <p className="text-[#b9c4d6] mb-4">
        Escríbenos por WhatsApp o email indicando curso y fechas deseadas.
      </p>

      {/* DATOS DE CONTACTO */}
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500">
            <use href={`${import.meta.env.BASE_URL}sprites.svg#icon-whatsapp`} />
          </svg>
          <strong>WhatsApp:</strong>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            +34 600 000 000
          </a>
        </li>

        <li className="flex items-center gap-2">
          <strong>Email:</strong>
          <a
            href="mailto:reservas@tododive.com"
            className="text-[#00c2ff] hover:underline"
          >
            reservas@tododive.com
          </a>
        </li>

        <li>
          <strong>Dirección:</strong> Puerto Deportivo, Muelle 3
        </li>
      </ul>
    </section>
  );
};
