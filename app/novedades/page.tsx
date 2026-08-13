import NovedadesContent from "@/components/novedades/NovedadesContent";

export default function NovedadesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Balsas Dental
            </span>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
              Novedades
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Descubre las últimas noticias, productos, eventos y novedades.
            </p>
          </div>

          {/* Contenido */}
          <NovedadesContent />

        </div>
      </section>

    </main>
  );
}