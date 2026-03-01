import { useCart } from "../context/CartContext";

export const CartDrawer = () => {
  const {
    cart,
    isOpen,
    toggleCart,
    addToCart,
    removeOne,
    removeItem,
    clearCart
  } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      item.type === "destination"
        ? sum
        : sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleCart}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-80
        bg-[#121939] border-l border-[#1c2a4a]
        z-50 p-6 transition-transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <button
            onClick={toggleCart}
            className="text-sm text-[#b9c4d6]"
          >
            Cerrar
          </button>
        </div>

        {/* Empty */}
        {cart.length === 0 ? (
          <p className="text-[#b9c4d6]">Carrito vacío</p>
        ) : (
          <>
            {/* Items */}
            <ul className="space-y-3">
              {cart.map(item => (
                <li
                  key={item.id}
                  className="bg-[#0e1430] border border-[#1c2a4a]
                             rounded-xl p-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">
                        {item.title}
                      </p>

                      <p className="text-sm text-[#b9c4d6]">
                        {item.type === "destination"
                          ? "Reserva"
                          : `${item.price} €`}{" "}
                        · x{item.quantity}
                      </p>

                      {item.type === "destination" && (
                        <span className="text-xs text-[#1cffb3]">
                          Próxima salida
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 text-sm"
                      title="Eliminar"
                    >
                      ❌
                    </button>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => removeOne(item.id)}
                      className="px-2 py-1 rounded
                                 bg-[#0c2740] border border-[#16324e]"
                    >
                      −
                    </button>

                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 rounded
                                 bg-[#0c2740] border border-[#16324e]"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="mt-4 border-t border-[#1c2a4a] pt-4">
              <p className="font-bold mb-3">
                Total: {total} €
              </p>

              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className="flex-1 border border-[#314b6b]
                             rounded-full py-2"
                >
                  Vaciar
                </button>

                <button
                  onClick={() => {
                    toggleCart();
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 bg-gradient-to-r
                             from-[#00c2ff] to-[#1cffb3]
                             text-[#00263b] font-semibold
                             rounded-full py-2"
                >
                  Reservar
                </button>
              </div>

              <a
                href="#contacto"
                onClick={toggleCart}
                className="block text-center mt-3
                           text-sm text-[#b9c4d6]"
              >
                ¿Dudas? Contacta con nosotros
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  );
};
