import { galleryImages } from "../data/gallery";

export const Gallery = () => {
  return (
   <section
  id="galeria"
  className="mt-12 bg-[#121939] border border-[#1c2a4a]
             rounded-3xl p-6"
>
      <h2 className="text-2xl font-bold mb-4">
         <svg className="w-5 h-5 text-[#1cffb3]">
      <use href="/sprites.svg#icon-gallery" />
    </svg>
        Galería
      </h2>

      <div
        className="
          grid grid-cols-2 gap-4
          md:grid-cols-4 auto-rows-[120px]
        "
      >
        {galleryImages.map(img => (
          <a
            key={img.id}
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative overflow-hidden rounded-2xl
                        ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover
                         transition-transform duration-300
                         hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
