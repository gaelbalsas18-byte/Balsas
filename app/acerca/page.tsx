import EventosContent from "@/components/acerca/AboutHero";

export default function AcercaPage() {
  return (
    <main className="min-h-screen bg-white pt-20">

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00529B]">
              Balsas Dental
            </span>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
              Historia
            </h1>
          </div>

          {/* Contenido */}
          <EventosContent />

        </div>
      </section>

    </main>
  );
}