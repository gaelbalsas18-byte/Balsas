import EventosContent from "@/components/sections/Distribucion";

export default function DistribucionPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full bg-blue-800 px-6 py-2 font-semibold text-white">
              DISTRIBUIDORES EN MÉXICO
          </span>
        </div>

       {/* Balsas x Tokuyama - Texto */}
          <h3 className="text-sm uppercase tracking-widest text-blue-700 font-semibold mb-3 text-center mt-3">
            Balsas Dental
          </h3>
          <EventosContent />
        </div>
      </section>
    </main>
  );
}

