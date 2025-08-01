import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import notFound from '@/app/assets/404.svg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center  py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto border-2 border-brand/20 shadow-none ">
            <CardContent className="px-12">
              {/* 404 SVG bem grande */}
              <div className="mb-2">
                <Image
                  src={notFound}
                  alt="Página Não Encontrada"
                  className="w-100 mx-auto -mt-6"
                />
              </div>
              {/* Título com temática jurídica */}
              <h2 className="text-5xl font-extralight text-brand mb-2">
                Página Não Renderizada
              </h2>
              {/* Texto com temática de IA */}
              <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
                Nossa inteligência artificial não conseguiu encontrar o conteúdo
                que você está procurando.
              </p>
              {/* Bloco de código fictício */}
              <div className="bg-gray-800 text-white max-w-xl mx-auto text-left p-4 rounded-lg mb-12 text-sm font-mono border-l-4 border-brand">
                <p className="text-gray-400">// IA Log: Rota não encontrada</p>
                <p>
                  <span className="text-purple-400">const</span> path =
                  window.location.pathname;
                </p>
                <p>
                  <span className="text-blue-400">resolveRoute</span>(path)
                  <span className="text-yellow-400">.catch</span>
                  {` (error => {`}
                </p>
                <p className="pl-4">
                  <span className="text-red-400">logError</span>({'{'}{' '}
                </p>
                <p className="pl-8">
                  code: <span className="text-green-400">'404_NOT_FOUND'</span>,
                </p>
                <p className="pl-8">
                  message: `Página ${'{'}path{'}'} não encontrada`,
                </p>
                <p className="pl-4">{'}'});</p>
                <p>{'}'});</p>
              </div>
              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-brand hover:bg-brand/90 text-white font-semibold px-6 py-3">
                    <Home className="w-4 h-4 mr-2" />
                    Voltar ao Início
                  </Button>
                </Link>

                <BackButton />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
