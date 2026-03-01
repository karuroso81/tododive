import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
export const CourseCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <article className="bg-[#0e1430] border border-[#1c2a4a]
                        rounded-2xl overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold mb-1">
          {product.title}
        </h3>

        <p className="text-sm text-[#b9c4d6] mb-2">
          {product.description}
        </p>

        <p className="text-lg font-extrabold mb-3">
          {product.price} €
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-gradient-to-r from-[#00c2ff] to-[#1cffb3]
                     text-[#00263b] font-semibold px-4 py-2 rounded-full"
        >
          Añadir al carrito
        </button>
      </div>
    </article>
  );
};

