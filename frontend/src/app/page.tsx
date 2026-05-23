import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-teal-100">
                <img
                  src="/logo.png"
                  alt="Linki"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">Linki</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Salud accesible para Bolivia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tu salud, <span className="text-teal-600">conectada</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Encuentra médicos cercanos, agenda citas y lleva tu historia clínica digital.
              Democratisando el acceso a la salud en Bolivia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="px-8 py-3 bg-teal-600 text-white rounded-xl text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              Todo lo que necesitas para tu salud
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/logo.png"
                    alt="Linki"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Registro Digital</h3>
                <p className="text-gray-600 text-sm">Complete su información médica una vez y llévela a cualquier consulta</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/logo.png"
                    alt="Linki"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Buscar Médicos</h3>
                <p className="text-gray-600 text-sm">Encuentre especialistas y generales cerca de usted, sin derivaciones</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <img
                    src="/logo.png"
                    alt="Linki"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Historia Clínica</h3>
                <p className="text-gray-600 text-sm">Registros inmutables conforme a la RM 0090/2008 boliviana</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>Linki — Salud accesible para Bolivia</p>
          <p className="mt-1">Conforme a la RM 0090/2008 · Historia Clínica Digital</p>
        </div>
      </footer>
    </div>
  );
}
