import { useCart } from "../context/CartContext";

export const CartButton = () => {
  const { cart, toggleCart } = useCart();
  const count = cart.reduce((s, i) => s + i.quantity, 0);

  return (
 <button
  onClick={toggleCart}
  className="fixed bottom-6 right-6
             bg-gradient-to-r from-[#00c2ff] to-[#1cffb3]
             text-[#00263b] px-5 py-3 rounded-full
             font-bold shadow-2xl"
>
     <svg className="w-6 h-6 text-white">
        <use href="/sprites.svg#icon-cart" />
      </svg>
  
   {count}
</button>

  );
};
