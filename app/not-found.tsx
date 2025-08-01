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
              <h2 className="text-5xl font-extralight  text-brand mb-2">
                Processo Não Encontrado
              </h2>
              {/* Texto simplificado */}
              <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
                A página que você está procurando não foi encontrada...
              </p>
              {/* Artigo fictício */}
              <div className="bg-gray-50  max-w-xl mx-auto text-left p-4 rounded-lg mb-12 text-sm text-gray-700 border-l-4 border-brand">
                <p className="font-semibold mb-2">
                  Art. 404º - Do Conteúdo Não Encontrado
                </p>
                <p className="text-xs">
                  Considera-se inexistente a página que não pode ser localizada
                  nos repositórios digitais, devendo o usuário ser redirecionado
                  aos caminhos legalmente constituídos.
                </p>
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
