import { courses } from "../data/courses";
import { CourseCard } from "./CourseCard";

export const CoursesGrid = () => {
  return (
    <section id="cursos" className="mb-12">
      <h2 className="text-2xl font-bold mb-2">
        Cursos destacados
      </h2>

      <p className="text-[#b9c4d6] mb-6">
        Títulos internacionales. Incluye materiales y seguro.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map(course => (
          <CourseCard key={course.id} product={course} />
        ))}
      </div>
    </section>
  );
};
