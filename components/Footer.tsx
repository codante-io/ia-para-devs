import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Logo
                variant="light"
                className="h-6"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="/contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} IA para Devs. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
