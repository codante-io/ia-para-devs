import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center ml-4 ">
          <div className="flex space-x-3">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <div className="w-80">
                <Logo />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
