import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

// Remove the Dimensions import and Image import since we're not using them
// const { width } = Dimensions.get('window'); // Remove this line

const AiProvaLanding = () => {
  const handleCTA = () => {
    // Implementar ação do botão (ex: navegação para checkout)
    console.log('CTA clicado');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a365d" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Seção 1 - HEADLINE + CTA INICIAL */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              Como um sistema criado EM 1882 aumenta em{' '}
              <Text style={styles.highlight}>3x a capacidade de memorização</Text> do cérebro 🧠
            </Text>
            <Text style={styles.heroSubtitle}>
              e disparou as aprovações em concursos públicos no 🇧🇷 com ajuda da inteligência artificial
            </Text>
            <TouchableOpacity style={styles.ctaButton} onPress={handleCTA}>
              <Text style={styles.ctaButtonText}>Quero Utilizar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção 2 - A DESCOBERTA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A descoberta que mudou tudo</Text>
          <View style={styles.contentBlock}>
            <Text style={styles.paragraph}>
              Em 1882, o psicólogo alemão 🇩🇪 Hermann Ebbinghaus descobriu um método revolucionário para memorizar muito mais conteúdo em menos tempo.
            </Text>
            <Text style={styles.paragraph}>
              Ele percebeu que nosso cérebro tem um padrão matemático para esquecer.
            </Text>
            <Text style={styles.paragraph}>
              Mas então ele descobriu algo genial:
            </Text>
            <View style={styles.highlightBox}>
              <Text style={styles.highlightText}>
                Se você revisar no momento matemático EXATO, a informação se fixa permanentemente na memória.
              </Text>
            </View>
            <Text style={styles.paragraph}>
              Ele criou o método "Repetição Espaçada" — um sistema que calcula quando revisar cada conteúdo para nunca mais esquecer.
            </Text>
            <Text style={styles.paragraph}>
              Anos depois, esse método se popularizou em faculdades dos EUA 🇺🇸 entre estudantes que estavam tirando notas baixas…
            </Text>
            <Text style={styles.paragraph}>
              Eles criavam cartões com uma pergunta de um lado e a resposta do outro, e revisavam com o método de Repetição Espaçada.
            </Text>
            <Text style={styles.paragraph}>
              Esses cartões eles chamaram de Flashcards.
            </Text>
            <Text style={styles.paragraph}>
              Os resultados foram TÃO EXPLOSIVOS que saíram artigos de Stanford, UCLA e até mesmo Harvard ⬇️
            </Text>
          </View>
        </View>

        {/* Seção 3 - HISTÓRIA DO RAFAEL */}
        <View style={[styles.section, styles.storySection]}>
          <Text style={styles.paragraph}>
            Até que um dia esse artigo chegou às mãos de um advogado que se preparava para o concurso de Juiz de Direito de São Paulo 🇧🇷
          </Text>
          <View style={styles.storyCard}>
            <Text style={styles.storyText}>
              O Rafael, de 32 anos, era advogado há 8 anos e sonhava em ser Magistrado.
            </Text>
            <Text style={styles.storyText}>
              Ele já havia tentado 2 vezes o concurso e sempre reprovava na primeira fase — Direito Constitucional, Civil, Penal e Processual eram um oceano de informações impossível de memorizar.
            </Text>
          </View>
          <Text style={styles.paragraph}>
            Descobriu os flashcards e adaptou o método à sua rotina de escritório.
          </Text>
          <Text style={styles.paragraph}>
            Criou flashcards digitais com súmulas do STF, artigos dos códigos, jurisprudência consolidada, doutrina…
          </Text>
          <Text style={styles.paragraph}>
            Tudo organizado de forma inteligente, com revisões espaçadas ao longo do tempo.
          </Text>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>
              Em apenas 8 meses de preparação usando esse método, Rafael tinha 3 vezes mais retenção do que nos estudos anteriores.
            </Text>
          </View>
          <Text style={styles.paragraph}>
            Ele ganhava tempo nas revisões, conseguia estudar entre audiências e acertava muito mais nos simulados.
          </Text>
          <View style={styles.successBox}>
            <Text style={styles.successText}>
              No concurso de 2023 para Juiz Substituto, Rafael não só passou na primeira fase como ficou entre os 5 primeiros colocados na prova objetiva.
            </Text>
            <Text style={styles.successText}>
              Hoje, ele é Juiz de Direito e ainda usa flashcards para se manter atualizado com jurisprudência e novas legislações.
            </Text>
          </View>
        </View>

        {/* Seção 4 - PROVA SOCIAL POR ÁREA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Mas o poder dos flashcards vai muito além da magistratura...
          </Text>
          <Text style={styles.paragraph}>
            Esse mesmo método tem aprovado candidatos em todos os tipos de concursos públicos:
          </Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.benefitText}>
                <Text style={styles.bold}>Tribunais (TRT, TRF, STJ, TSE)</Text> — jurisprudência e legislação processual
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.benefitText}>
                <Text style={styles.bold}>Polícias (Civil, Militar, Federal)</Text> — códigos penais e procedimentos
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.benefitText}>
                <Text style={styles.bold}>Fiscais (Receita Federal, ICMS, ISS)</Text> — legislação tributária e contábil
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.benefitText}>
                <Text style={styles.bold}>Bancários (Banco do Brasil, CEF, BNDES)</Text> — conhecimentos bancários e atualidades
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.benefitText}>
                <Text style={styles.bold}>Área da Saúde (concursos de enfermagem, medicina)</Text> — protocolos e procedimentos
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.benefitText}>
                <Text style={styles.bold}>Educação (professores, pedagogos)</Text> — legislação educacional e didática
              </Text>
            </View>
          </View>
          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>
              O que muda é apenas o conteúdo dos flashcards, mas o princípio da repetição espaçada funciona para qualquer volume de informação que você precise memorizar.
            </Text>
          </View>
        </View>

        {/* Seção 5 - TRANSIÇÃO PARA AIPROVA */}
        <View style={styles.section}>
          <Text style={styles.paragraph}>Essa história não é exceção.</Text>
          <Text style={styles.paragraph}>
            Ela só mostra o que acontece quando você adota um método testado, validado e construído para funcionar como o cérebro memoriza.
          </Text>
          <View style={styles.transitionBox}>
            <Text style={styles.transitionText}>
              E foi justamente esse princípio que inspirou o AiProva!
            </Text>
            <Text style={styles.paragraph}>
              Uma forma prática, acessível e inteligente de aplicar o poder dos flashcards e da repetição espaçada na sua rotina de estudos —
            </Text>
            <Text style={styles.paragraph}>
              mesmo que você tenha pouco tempo, ou ache que tem "memória ruim".
            </Text>
          </View>
        </View>

        {/* Seção 6 - MOTIVOS DO SUCESSO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Porque esse método viralizou no Brasil?</Text>
          <View style={styles.reasonCard}>
            <Text style={styles.reasonNumber}>1.</Text>
            <View style={styles.reasonContent}>
              <Text style={styles.reasonTitle}>Volume brutal dos concursos públicos brasileiros</Text>
              <Text style={styles.reasonText}>
                Os concursos públicos brasileiros exigem domínio simultâneo de múltiplas disciplinas específicas — legislação, conhecimentos gerais, raciocínio lógico, português — o que te obriga a ter uma memória excelente em diversos conteúdos.
              </Text>
            </View>
          </View>
          <View style={styles.reasonCard}>
            <Text style={styles.reasonNumber}>2.</Text>
            <View style={styles.reasonContent}>
              <Text style={styles.reasonTitle}>Competição Extrema</Text>
              <Text style={styles.reasonText}>
                Com milhões de candidatos disputando poucas vagas, quem consegue lembrar mais conteúdo tem vantagem decisiva.
              </Text>
              <Text style={styles.reasonText}>
                Na hora da prova, vai passar quem lembrar mais conteúdo, não quem assistiu mais aulas…
              </Text>
            </View>
          </View>
        </View>

        {/* Seção 7 - GRÁFICO DE ESQUECIMENTO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎯 O segredo da aprovação</Text>
          <Text style={styles.paragraph}>
            Como o seu cérebro esquece o que você estuda com o tempo.
          </Text>
          <Text style={styles.paragraph}>
            O método do AiProva ativa sua memória pouco antes disso acontecer.
          </Text>
          <Text style={styles.paragraph}>
            Cada nova revisão fortalece sua lembrança.
          </Text>
          
          {/* Gráfico Visual Simples */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Retenção de Memória</Text>
            <View style={styles.chart}>
              <View style={styles.chartLegend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: '#ef4444' }]} />
                  <Text style={styles.legendText}>Sem AiProva</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: '#22c55e' }]} />
                  <Text style={styles.legendText}>Com AiProva</Text>
                </View>
              </View>
              <View style={styles.chartBars}>
                <View style={styles.barContainer}>
                  <View style={[styles.bar, styles.redBar]} />
                  <Text style={styles.barLabel}>Dia 1</Text>
                </View>
                <View style={styles.barContainer}>
                  <View style={[styles.bar, styles.redBarSmall]} />
                  <View style={[styles.bar, styles.greenBar]} />
                  <Text style={styles.barLabel}>Dia 7</Text>
                </View>
                <View style={styles.barContainer}>
                  <View style={[styles.bar, styles.redBarTiny]} />
                  <View style={[styles.bar, styles.greenBarLarge]} />
                  <Text style={styles.barLabel}>Dia 30</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Seção 8 - REVISÃO VIA WHATSAPP */}
        <View style={[styles.section, styles.whatsappSection]}>
          <Text style={styles.whatsappTitle}>E o melhor...</Text>
          <View style={styles.whatsappBox}>
            <Text style={styles.whatsappText}>
              Você faz a revisão direto no seu WhatsApp, sem precisar baixar nada!
            </Text>
            <Text style={styles.whatsappEmoji}>📱</Text>
          </View>
        </View>

        {/* Seção 9 - COMO FUNCIONA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Entenda como funciona o seu estudo na prática:</Text>
          
          <View style={styles.stepCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Criação de Flashcards</Text>
              <Text style={styles.stepText}>
                Para sua revisão, você deve criar os seus cartões (flashcards).
              </Text>
              <Text style={styles.stepText}>
                Com uma pergunta na frente, e resposta atrás:
              </Text>
              <Text style={styles.stepText}>
                Dentro do WhatsApp
              </Text>
              <Text style={styles.stepText}>
                Você pode criar os seus flashcards manualmente ou enviar seu material (resumo, PDF ou áudio) que a nossa IA toma conta do resto…
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Estudo</Text>
              <Text style={styles.stepText}>
                Depois de criar, você revisa os seus flashcards,
              </Text>
              <Text style={styles.stepText}>
                e indica a dificuldade que sentiu em cada pergunta ⬇️
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Revisão Espaçada</Text>
              <Text style={styles.stepText}>
                A partir das respostas que você enviou,
              </Text>
              <Text style={styles.stepText}>
                o algoritmo identifica a necessidade de revisão de cada pergunta,
              </Text>
              <Text style={styles.stepText}>
                e te envia o flashcard novamente na hora certa pra revisar!
              </Text>
              <Text style={styles.stepText}>
                Até que você memorize o conteúdo.
              </Text>
            </View>
          </View>
        </View>

        {/* Seção 10 - BENEFÍCIOS RESUMIDOS */}
        <View style={[styles.section, styles.benefitsSection]}>
          <Text style={styles.benefitsTitle}>
            🎯 Pare de esquecer o que você estuda e comece a memorizar
          </Text>
          <Text style={styles.benefitsSubtitle}>
            O método que mais aprova no mundo, agora feito para quem vai encarar concursos públicos.
          </Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.benefitText}>Revisões automáticas no momento certo</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.benefitText}>3x mais retenção de conteúdo</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.benefitText}>Economia de tempo nos estudos</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.checkmark}>✅</Text>
              <Text style={styles.benefitText}>Funciona mesmo com rotina corrida</Text>
            </View>
          </View>
        </View>

        {/* Seção 11 - OFERTA ESPECIAL */}
        <View style={[styles.section, styles.offerSection]}>
          <Text style={styles.offerTitle}>💰 Investimento que vale a pena:</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>R$147/mês</Text>
            <Text style={styles.newPrice}>por apenas R$10/mês</Text>
          </View>
          <Text style={styles.priceSubtext}>
            (menos que R$0,40 centavos por dia para ter a memória de um aprovado)
          </Text>
        </View>

        {/* Seção 12 - TESTE GRÁTIS + CTA */}
        <View style={[styles.section, styles.ctaSection]}>
          <Text style={styles.bonusTitle}>🎁 Bônus Exclusivo</Text>
          <Text style={styles.bonusText}>Teste GRÁTIS por 7 dias completos!</Text>
          <Text style={styles.bonusText}>Experimente sem compromisso.</Text>
          <Text style={styles.bonusText}>Se não gostar, cancele sem pagar nada.</Text>
          
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaArrow}>⬇️ QUERO COMEÇAR AGORA ⬇️</Text>
            <TouchableOpacity style={styles.mainCtaButton} onPress={handleCTA}>
              <Text style={styles.mainCtaButtonText}>QUERO UTILIZAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção 13 - DEPOIMENTOS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que dizem nossos aprovados</Text>
          
          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              "Passei em 1º lugar no concurso da Polícia Civil usando o AiProva. O método de repetição espaçada me ajudou a memorizar toda a legislação penal."
            </Text>
            <Text style={styles.testimonialAuthor}>- Carlos Silva, Delegado PC-SP</Text>
          </View>

          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              "Depois de 3 tentativas frustradas, consegui passar para Auditor Fiscal usando flashcards. O AiProva organizou minha revisão perfeitamente."
            </Text>
            <Text style={styles.testimonialAuthor}>- Ana Costa, Auditora Fiscal RFB</Text>
          </View>

          <View style={styles.testimonialCard}>
            <Text style={styles.testimonialText}>
              "O diferencial foi poder revisar no WhatsApp durante os intervalos do trabalho. Aprovado em 6º lugar no TRT!"
            </Text>
            <Text style={styles.testimonialAuthor}>- Roberto Lima, Técnico Judiciário TRT</Text>
          </View>

          <TouchableOpacity style={styles.ctaButton} onPress={handleCTA}>
            <Text style={styles.ctaButtonText}>QUERO UTILIZAR</Text>
          </TouchableOpacity>
        </View>

        {/* Seção 14 - GARANTIA */}
        <View style={[styles.section, styles.guaranteeSection]}>
          <View style={styles.guaranteeSeal}>
            <Text style={styles.guaranteeTitle}>🛡️ GARANTIA 7 DIAS</Text>
          </View>
          <Text style={styles.guaranteeText}>Garantia incondicional.</Text>
          <Text style={styles.guaranteeText}>Teste grátis, cancele se não gostar.</Text>
          <Text style={styles.guaranteeText}>Sem burocracia, sem letras miúdas.</Text>
          
          <TouchableOpacity style={styles.finalCtaButton} onPress={handleCTA}>
            <Text style={styles.finalCtaButtonText}>QUERO UTILIZAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>AiProva © 2024 - Todos os direitos reservados</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroSection: {
    backgroundColor: '#1a365d',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 26,
  },
  highlight: {
    color: '#fbbf24',
  },
  ctaButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 32,
  },
  contentBlock: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 16,
  },
  highlightBox: {
    backgroundColor: '#fef3c7',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    marginVertical: 16,
  },
  highlightText: {
    fontSize: 16,
    color: '#92400e',
    fontWeight: '600',
    lineHeight: 24,
  },
  storySection: {
    backgroundColor: '#f1f5f9',
  },
  storyCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginVertical: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  storyText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 12,
  },
  resultBox: {
    backgroundColor: '#dcfce7',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
  },
  resultText: {
    fontSize: 16,
    color: '#166534',
    fontWeight: '600',
    lineHeight: 24,
  },
  successBox: {
    backgroundColor: '#22c55e',
    padding: 20,
    borderRadius: 12,
    marginVertical: 16,
  },
  successText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 8,
  },
  benefitsList: {
    marginVertical: 20,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  checkmark: {
    fontSize: 18,
    color: '#22c55e',
    marginRight: 12,
    marginTop: 2,
  },
  benefitText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  transitionBox: {
    backgroundColor: '#eff6ff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3b82f6',
    marginVertical: 16,
  },
  transitionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: 16,
  },
  reasonCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  reasonNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f59e0b',
    marginRight: 16,
    marginTop: 4,
  },
  reasonContent: {
    flex: 1,
  },
  reasonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 8,
  },
  reasonText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 8,
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    textAlign: 'center',
    marginBottom: 20,
  },
  chart: {
    alignItems: 'center',
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#374151',
  },
  chartBars: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'flex-end',
    height: 120,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 30,
    borderRadius: 4,
    marginBottom: 2,
  },
  redBar: {
    height: 80,
    backgroundColor: '#ef4444',
  },
  redBarSmall: {
    height: 40,
    backgroundColor: '#ef4444',
  },
  redBarTiny: {
    height: 20,
    backgroundColor: '#ef4444',
  },
  greenBar: {
    height: 70,
    backgroundColor: '#22c55e',
  },
  greenBarLarge: {
    height: 90,
    backgroundColor: '#22c55e',
  },
  barLabel: {
    fontSize: 12,
    color: '#374151',
    marginTop: 8,
  },
  whatsappSection: {
    backgroundColor: '#dcfce7',
  },
  whatsappTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 20,
  },
  whatsappBox: {
    backgroundColor: '#22c55e',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  whatsappText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  whatsappEmoji: {
    fontSize: 32,
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a365d',
    marginBottom: 12,
  },
  stepText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 8,
  },
  benefitsSection: {
    backgroundColor: '#f0f9ff',
  },
  benefitsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: 16,
  },
  benefitsSubtitle: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 24,
  },
  offerSection: {
    backgroundColor: '#fef3c7',
    alignItems: 'center',
  },
  offerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#92400e',
    textAlign: 'center',
    marginBottom: 20,
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  oldPrice: {
    fontSize: 18,
    color: '#6b7280',
    textDecorationLine: 'line-through',
    marginBottom: 8,
  },
  newPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  priceSubtext: {
    fontSize: 14,
    color: '#92400e',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  ctaSection: {
    backgroundColor: '#1a365d',
    alignItems: 'center',
  },
  bonusTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fbbf24',
    textAlign: 'center',
    marginBottom: 16,
  },
  bonusText: {
    fontSize: 18,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  ctaArrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fbbf24',
    textAlign: 'center',
    marginBottom: 16,
  },
  mainCtaButton: {
    backgroundColor: '#f59e0b',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  mainCtaButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  testimonialCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  testimonialText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: 'bold',
  },
  guaranteeSection: {
    backgroundColor: '#f0fdf4',
    alignItems: 'center',
  },
  guaranteeSeal: {
    backgroundColor: '#22c55e',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginBottom: 24,
  },
  guaranteeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  guaranteeText: {
    fontSize: 18,
    color: '#166534',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  finalCtaButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  finalCtaButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#1f2937',
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
  },
});

export default AiProvaLanding;
