export const Header = () => {
  return (
 <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1020] border-b border-[#1c2a4a]">
  <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

    {/* Logo con sprite */}
    <a href="#" className="flex items-center gap-2">
      <svg className="w-6 h-6 text-[#40e0d0]">
        <use href="/sprites.svg#icon-diving" />
      </svg>
      <span className="font-bold text-lg text-[#40e0d0]">TodoDive</span>
    </a>

    {/* Menú */}
    <ul className="flex gap-6 text-sm">
      <li><a href="#cursos">Cursos</a></li>
      <li><a href="#salidas">Próximas salidas</a></li>
      <li><a href="#galeria">Galería</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>

    {/* Botón carrito */}
    <button className="relative">
  
    </button>

  </nav>
</header>

  );
};
