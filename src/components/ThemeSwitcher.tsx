'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  // Estado para armazenar o tema atual
  const [theme, setTheme] = useState<string>('light');

  // Verificar o tema atual no localStorage ou na preferência do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme); // Adiciona a classe ao HTML
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }
  }, []);

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Salva o tema no localStorage
    document.documentElement.classList.remove('dark', 'light'); // Remove as classes existentes
    document.documentElement.classList.add(newTheme); // Adiciona a nova classe
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full border-2 border-text-950 transition-all duration-300 hover:text-text-50 hover:bg-background-950">
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;
