import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '$100',
    features: [
      'Ebook digital personalizado',
      'Entrevistas por WhatsApp',
      'Procesamiento automático',
      'Formato PDF de alta calidad',
    ],
  },
  {
    name: 'Premium',
    price: '$200',
    features: [
      'Todo lo del plan Básico',
      'Revisión editorial profesional',
      'Diseño personalizado',
      'Inclusión de fotos familiares',
      'Versión impresa de tapa dura',
    ],
  },
];

export function Pricing() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes y Precios
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Elige el plan que mejor se adapte a tu historia
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-base font-medium text-gray-500"> USD</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4">
                <button className="w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 transition-colors">
                  Comenzar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}