import { Smartphone, Clock, Heart, Shield } from 'lucide-react';

const benefits = [
  {
    title: 'Fácil de usar',
    description: 'Utiliza WhatsApp, una plataforma que ya conoces y te resulta familiar.',
    icon: Smartphone,
  },
  {
    title: 'Eficiente',
    description: 'Proceso rápido y económico sin comprometer la calidad del resultado.',
    icon: Clock,    
  },
  {
    title: 'Emotivo',
    description: 'Capturamos no solo datos, sino momentos y sentimientos significativos.',
    icon: Heart,
  },
  {
    title: 'Seguro',
    description: 'Tus historias están protegidas y son tratadas con el máximo respeto.',
    icon: Shield,
  },
];

export function Benefits() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Por qué elegir Getmemori?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            La forma más significativa de preservar los recuerdos familiares
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-3 shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}