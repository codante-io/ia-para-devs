import clockBlenderImage from '@/app/assets/clock-icon.png';
import communityBlenderImage from '@/app/assets/community-icon.png';
import pcBlenderImage from '@/app/assets/pc-icon.png';
import starBlenderImage from '@/app/assets/star-icon.png';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NewsletterForm from '@/components/NewsletterForm';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Bot } from 'lucide-react';
import Image from 'next/image';

export default function IAParaDevsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1 max-w-sm">
              <Image
                src={pcBlenderImage}
                alt="PC Blender - Inteligência Artificial para Devs"
                className="w-auto"
                priority
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left w-full max-w-2xl mx-auto lg:mx-0">
              <Badge className="mb-6 bg-brand/10 text-brand hover:bg-brand/20">
                🚀 Junte-se a nós!
              </Badge>
              <h1 className="text-5xl font-heading md:text-6xl font-light text-gray-800 mb-6 leading-17">
                A melhor <span className="font-bold">newsletter</span> de
                <span className="text-brand block font-bold">
                  Inteligência Artificial para Devs
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none lg:mx-0 mx-auto">
                Receba as últimas tendências do setor, análises especializadas e
                dicas práticas diretamente na sua caixa de entrada todas as{' '}
                <strong>terças-feiras</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl lg:max-w-none lg:mx-0 mx-auto flex items-center justify-center lg:justify-start gap-2">
                Ah, e não se preocupe - ela é feita totalmente por humanos
                <span>
                  <svg
                    className="inline-block h-5 w-5 text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <Bot />
                  </svg>
                </span>
              </p>

              {/* Newsletter Signup Form */}
              <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0 mb-8">
                <NewsletterForm
                  formId={process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || ''}
                  placeholder="Digite seu endereço de email"
                  buttonText="Inscreva-se Grátis"
                  className="mb-0"
                />
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Grátis para sempre</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Sem spam</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancele a qualquer momento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que ler a <span className="text-brand">IA para Devs?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Não é mais possível viver no passado. Se você ainda está "por
              fora" da revolução da IA, é hora de se atualizar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-brand/20 transition-colors">
              <CardContent className="p-8 text-center">
                <Image
                  src={clockBlenderImage}
                  alt="Clock Icon"
                  className="h-30 w-30 text-brand mx-auto"
                />

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Entrega Semanal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Toda <strong>terça-feira</strong> às 9h, receba insights
                  curados que importam para seu setor e crescimento
                  profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-brand/20 transition-colors">
              <CardContent className="p-8 text-center">
                <Image
                  src={starBlenderImage}
                  alt="Star Icon"
                  className="h-30 w-30 text-brand mx-auto"
                />

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Curadoria Especializada
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossa equipe de especialistas seleciona cuidadosamente o
                  conteúdo mais valioso dentre milhares de fontes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-brand/20 transition-colors">
              <CardContent className="p-8 text-center">
                <Image
                  src={communityBlenderImage}
                  alt="Community Icon"
                  className="h-30 w-30 mx-auto"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Orientado pela Comunidade
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Junte-se a uma comunidade de profissionais atualizados
                  compartilhando insights e conhecimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para ficar à frente?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Confie em nós para entregarmos em sua caixa de entrada os insights
            que mais importam.
          </p>

          <div className="max-w-lg mx-auto">
            <NewsletterForm
              formId={process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || ''}
              placeholder="Digite seu endereço de email"
              buttonText="Começar"
              className="mb-0 [&_input]:bg-white [&_input]:text-gray-900 [&_input]:border-0 [&_input]:h-12 [&_button]:h-12 [&_button]:px-8 [&_button]:bg-white [&_button]:text-brand [&_button]:hover:bg-gray-100 [&_button]:font-semibold"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
