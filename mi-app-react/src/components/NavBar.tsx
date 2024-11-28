import React from 'react';
import { Book } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Memori</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Cómo funciona
            </a>
            <a
              href="#benefits"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Beneficios
            </a>
            <a
              href="#pricing"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Precios
            </a>
          </div>
          <div>
            <a
              href="#start"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Comenzar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
