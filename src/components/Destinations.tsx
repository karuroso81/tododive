import { useState } from "react";
import { destinations } from "../data/destinations";
import { useCart } from "../context/CartContext";
import { ConfirmModal } from "./ConfirmModal";

export const Destinations = () => {
  const { addToCart, toggleCart } = useCart();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const selectedDestination = destinations.find(d => d.id === selectedId);

  const handleReserve = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (!selectedDestination) return;

    const reservationProduct = {
      id: 1000 + selectedDestination.id, // evitar colisión
      title: selectedDestination.title,
      description: `${selectedDestination.description} · ${selectedDestination.depth}`,
      price: 0,
      image: selectedDestination.image,
      type: "destination" as const
    };

    addToCart(reservationProduct);
    setShowModal(false);
    toggleCart();

    document
      .getElementById("contacto")
      ?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <section
        id="salidas"
        className="mt-12 bg-[#121939] border border-[#1c2a4a]
                   rounded-3xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">
          <svg className="w-5 h-5 text-[#00c2ff]">
            <use href={`${import.meta.env.BASE_URL}sprites.svg#icon-destination`} />
          </svg>

          Próximas salidas
          <svg className="w-5 h-5 text-[#1cffb3]">
            <use href={`${import.meta.env.BASE_URL}sprites.svg#icon-calendar`} />
          </svg>
        </h2>

        <div className="space-y-4">
          {destinations.map(dest => {
            const isSelected = dest.id === selectedId;

            return (
              <article
                key={dest.id}
                className={`flex flex-col sm:flex-row gap-4
                  rounded-2xl p-4 border transition
                  ${isSelected
                    ? "bg-[#0c2740] border-[#00c2ff] ring-2 ring-[#00c2ff]/40"
                    : "bg-[#0e1430] border-[#1c2a4a]"
                  }`}
              >
                {/* Imagen */}
                <div className="w-full sm:w-40 sm:h-28 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Texto */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold">
                      {dest.title}
                    </h3>

                    <p className="text-sm text-[#b9c4d6]">
                      {dest.description} · {dest.depth}
                    </p>
                  </div>

                  <button
                    onClick={() => handleReserve(dest.id)}
                    className="mt-2 self-start
                               bg-gradient-to-r from-[#00c2ff] to-[#1cffb3]
                               text-[#00263b] font-semibold
                               px-4 py-1.5 rounded-full text-sm"
                  >
                    Reservar esta salida
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-sm text-[#b9c4d6] mt-6">
          Incluye botella y plomos. Alquiler de equipo completo opcional.
          Merienda y bebidas incluidas.
        </p>
      </section>

      {/* MODAL */}
      <ConfirmModal
        open={showModal}
        title="Confirmar reserva"
        message={
          selectedDestination
            ? `¿Quieres reservar la salida a ${selectedDestination.title}?`
            : ""
        }
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};
