import React from 'react';
import { MessageCircle, BookText, Heart } from 'lucide-react';

const steps = [
  {
    title: 'Conversación por WhatsApp',
    description: 'Un bot amigable guía la conversación con preguntas diseñadas para capturar la esencia de cada historia.',
    icon: MessageCircle,
  },
  {
    title: 'Recopilación de Historias',
    description: 'Respondé con texto o audio. Nuestro sistema procesa y organiza las memorias de forma inteligente.',
    icon: BookText,
  },
  {
    title: 'Creación del Ebook',
    description: 'Transformamos las historias en una biografía profesional y emotiva que perdurará para siempre.',
    icon: Heart,
  },
];

export function HowItWorks() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Un proceso simple para crear un regalo inolvidable
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
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