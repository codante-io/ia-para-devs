import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacidade</h1>

          <div className="space-y-6 text-sm text-muted-foreground">
            <p className="text-base text-foreground">
              <strong>Última atualização:</strong>{' '}
              {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                1. Informações que Coletamos
              </h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como
                quando você cria uma conta, entra em contato conosco ou usa
                nossos serviços. Isso pode incluir:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Nome e informações de contato</li>
                <li>Informações de conta e perfil</li>
                <li>Comunicações que você envia para nós</li>
                <li>Informações sobre como você usa nosso serviço</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                2. Como Usamos suas Informações
              </h2>
              <p>Usamos as informações coletadas para:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar transações e enviar confirmações</li>
                <li>Responder a comentários e perguntas</li>
                <li>Enviar informações técnicas e atualizações de segurança</li>
                <li>Comunicar mudanças em nossos termos ou políticas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                3. Compartilhamento de Informações
              </h2>
              <p>
                Não vendemos, negociamos ou transferimos suas informações
                pessoais para terceiros, exceto quando:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Você nos dá consentimento para fazê-lo</li>
                <li>É necessário para fornecer nossos serviços</li>
                <li>É exigido por lei ou processo legal</li>
                <li>É necessário para proteger nossos direitos ou segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                4. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança adequadas para proteger suas
                informações pessoais contra acesso não autorizado, alteração,
                divulgação ou destruição. No entanto, nenhum método de
                transmissão pela internet é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                5. Cookies e Tecnologias Similares
              </h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência, analisar tendências e administrar o site. Você pode
                controlar o uso de cookies através das configurações do seu
                navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                6. Suas Preferências
              </h2>
              <p>Você pode:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações imprecisas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Optar por não receber comunicações de marketing</li>
                <li>Portar suas informações para outro serviço</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                7. Retenção de Dados
              </h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário
                para cumprir os propósitos descritos nesta política, a menos que
                um período de retenção mais longo seja exigido ou permitido por
                lei.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                8. Mudanças nesta Política
              </h2>
              <p>
                Podemos atualizar esta política de privacidade periodicamente.
                Notificaremos você sobre mudanças significativas publicando a
                nova política em nosso site com uma nova data de &ldquo;última
                atualização&rdquo;.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                9. Contato
              </h2>
              <p>
                Se você tiver dúvidas sobre esta política de privacidade, entre
                em contato conosco em:
              </p>
              <div className="ml-4 mt-2">
                <p>Email: contato@iaparadevs.com.br</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                10. Informações Adicionais
              </h2>
              <p>
                Para informações adicionais sobre como cuidamos dos seus dados,
                entre em contato pelos canais de suporte.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
