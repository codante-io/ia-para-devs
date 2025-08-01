import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>

          <div className="space-y-6 text-sm text-muted-foreground">
            <p className="text-base text-foreground">
              <strong>Última atualização:</strong>{' '}
              {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e usar este serviço, você aceita e concorda em estar
                vinculado aos termos e condições deste acordo. Se você não
                concordar com estes termos, não deve usar nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                2. Descrição do Serviço
              </h2>
              <p>
                Nosso serviço fornece [descrição do seu serviço]. Reservamo-nos
                o direito de modificar ou descontinuar o serviço (ou qualquer
                parte dele) temporária ou permanentemente, com ou sem aviso
                prévio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                3. Registro de Conta
              </h2>
              <p>
                Para usar certas funcionalidades do serviço, você pode precisar
                criar uma conta. Você é responsável por:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Manter a confidencialidade de sua conta e senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>
                  Notificar-nos imediatamente sobre qualquer uso não autorizado
                </li>
                <li>Fornecer informações precisas e atualizadas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                4. Uso Aceitável
              </h2>
              <p>Você concorda em não usar o serviço para:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>Qualquer propósito ilegal ou não autorizado</li>
                <li>
                  Violar qualquer lei local, estadual, nacional ou internacional
                </li>
                <li>Transmitir vírus ou qualquer código malicioso</li>
                <li>
                  Coletar informações de outros usuários sem consentimento
                </li>
                <li>Interferir ou interromper o serviço ou servidores</li>
                <li>Criar contas através de meios não autorizados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                5. Propriedade Intelectual
              </h2>
              <p>
                O serviço e seu conteúdo original, recursos e funcionalidades
                são e permanecerão propriedade exclusiva nossa e de nossos
                licenciadores. O serviço é protegido por direitos autorais,
                marcas registradas e outras leis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                6. Conteúdo do Usuário
              </h2>
              <p>
                Você retém todos os direitos sobre o conteúdo que enviar ao
                serviço. Ao enviar conteúdo, você nos concede uma licença
                mundial, não exclusiva, livre de royalties para usar, modificar,
                executar publicamente, exibir publicamente e distribuir tal
                conteúdo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                7. Uso de Dados
              </h2>
              <p>
                Valorizamos sua privacidade. Explicamos como coletamos, usamos e
                protegemos suas informações quando você usa nosso serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                8. Pagamentos e Reembolsos
              </h2>
              <p>
                Se aplicável, todos os pagamentos são processados de forma
                segura através de provedores de pagamento terceirizados. Os
                reembolsos estão sujeitos à nossa política de reembolso, que
                pode variar dependendo do tipo de serviço.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                9. Suspensão e Rescisão
              </h2>
              <p>
                Podemos suspender ou encerrar sua conta e acesso ao serviço
                imediatamente, sem aviso prévio, por qualquer motivo, incluindo
                violação destes termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                10. Isenção de Responsabilidade
              </h2>
              <p>
                O serviço é fornecido &ldquo;como está&rdquo; e &ldquo;conforme
                disponível&rdquo;. Não garantimos que o serviço será
                ininterrupto, livre de erros ou completamente seguro. Você usa o
                serviço por sua própria conta e risco.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                11. Limitação de Responsabilidade
              </h2>
              <p>
                Em nenhum caso seremos responsáveis por danos indiretos,
                incidentais, especiais, consequenciais ou punitivos, incluindo
                perda de dados, uso, lucros ou outras perdas intangíveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                12. Alterações nos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer
                momento. Notificaremos você sobre mudanças significativas. O uso
                continuado do serviço após as mudanças constitui aceitação dos
                novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                13. Disposições Gerais
              </h2>
              <p>
                Em caso de disputas, buscaremos soluções amigáveis e comunicação
                direta com os usuários sempre que possível.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                14. Contato
              </h2>
              <p>
                Se você tiver dúvidas sobre estes termos de uso, entre em
                contato conosco:
              </p>
              <div className="ml-4 mt-2">
                <p>Email: contato@iaparadevs.com.br</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                15. Divisibilidade
              </h2>
              <p>
                Se qualquer disposição destes termos for considerada inválida ou
                inexequível, as disposições restantes permanecerão em pleno
                vigor e efeito.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
