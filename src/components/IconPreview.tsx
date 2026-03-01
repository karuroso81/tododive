const icons = [
  "icon-cart",
  "icon-gallery",
  "icon-course",
  "icon-destination",
  "icon-contact",
  "icon-info",
  "icon-faq",
  "icon-menu",
  "icon-close",
  "icon-whatsapp",
];

export const IconPreview = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">
        Iconos disponibles (sprites.svg)
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {icons.map((icon) => (
          <div
            key={icon}
            className="flex flex-col items-center gap-2
                       bg-[#121939] border border-[#1c2a4a]
                       rounded-xl p-4"
          >
            <svg className="w-8 h-8 text-[#1cffb3]">
              <use href={`/sprites.svg#${icon}`} />
            </svg>

            <span className="text-sm text-[#b9c4d6]">
              {icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
