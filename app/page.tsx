"use client"
import Image from "next/image"
import { Gift, Clock, CheckCircle, ShieldCheck } from "lucide-react"

const AiProvaLanding = () => {
  // Function to handle CTA clicks, now also used for scrolling
  const handleCTA = (targetId?: string) => {
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Default action for other CTAs, e.g., navigate to checkout
      console.log("CTA clicado")
    }
  }

  const benefitIcons = {
    "Tribunais (TRT, TRF, STJ, TSE)": "/images/icon-tribunais.png",
    "Polícias (Civil, Militar, Federal)": "/images/icon-policia-federal.png",
    "Fiscais (Receita Federal, ICMS, ISS)": "/images/icon-receita-federal.png",
    "Bancários (Banco do Brasil, CEF, BNDES)": "/images/icon-balanca-justica.png", // Usando a balança da justiça como a mais genérica para este setor
    "Área da Saúde (concursos de enfermagem, medicina)": "/images/icon-saude.png",
    "Educação (professores, pedagogos)": "/images/icon-educacao.png",
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Seção 1 - HEADLINE + CTA INICIAL */}
      <section className="relative bg-aiprova-dark text-white pt-16 pb-8 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Adicionar um padrão de fundo sutil */}
          <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="rgba(255,255,255,0.1)" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Logo no topo da seção principal */}
          <div className="mb-8">
            <Image
              src="/images/logo-branco.svg"
              alt="Logo AiProva"
              width={200}
              height={40}
              className="mx-auto"
              priority // Mantendo priority para logo principal
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Como um sistema criado em 1882 aumenta em{" "}
            <span className="text-aiprova-blue-main">3x a capacidade de memorização</span> do cérebro 🧠
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
            e disparou as aprovações em <span className="text-aiprova-blue-main font-bold">concursos públicos</span> no
            🇧🇷 com ajuda da inteligência artificial
          </p>
          <button
            onClick={() => handleCTA("segredo-aprovacao")}
            className="bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            QUERO UTILIZAR
          </button>
        </div>
      </section>

      {/* Nova Seção: Carrossel de Logos */}
      <section className="bg-aiprova-dark pt-0 pb-8 px-4 text-center">
        <p className="text-white text-sm mb-6">utilizado por aprovados em concursos do:</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 mb-6">
            {/* Primeiro conjunto de logos */}
            <div className="flex space-x-8 shrink-0">
              <Image
                src="/images/LOGO-BNDES.png"
                alt="BNDES"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/correios.png"
                alt="Correios"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/caixa.png"
                alt="Caixa Econômica Federal"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/mpt.png"
                alt="Ministério Público do Trabalho"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/inss.png"
                alt="INSS"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/banco-do-brasil.png"
                alt="Banco do Brasil"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/oab.png"
                alt="OAB"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
            </div>
            {/* Segundo conjunto duplicado */}
            <div className="flex space-x-8 shrink-0">
              <Image
                src="/images/LOGO-BNDES.png"
                alt="BNDES"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/correios.png"
                alt="Correios"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/caixa.png"
                alt="Caixa Econômica Federal"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/mpt.png"
                alt="Ministério Público do Trabalho"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/inss.png"
                alt="INSS"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/banco-do-brasil.png"
                alt="Banco do Brasil"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/oab.png"
                alt="OAB"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
            </div>
            {/* Terceiro conjunto para garantir loop infinito perfeito */}
            <div className="flex space-x-8 shrink-0">
              <Image
                src="/images/LOGO-BNDES.png"
                alt="BNDES"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/correios.png"
                alt="Correios"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/caixa.png"
                alt="Caixa Econômica Federal"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/mpt.png"
                alt="Ministério Público do Trabalho"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/inss.png"
                alt="INSS"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/banco-do-brasil.png"
                alt="Banco do Brasil"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
              <Image
                src="/images/oab.png"
                alt="OAB"
                width={120}
                height={24}
                className="opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 120px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="h-8 bg-gradient-to-b from-aiprova-dark via-blue-50 to-white"></section>

      {/* Seção 2 - A DESCOBERTA */}
      <section id="descoberta" className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-aiprova-dark text-center mb-8">
            A descoberta que mudou tudo
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Em 1882, o psicólogo alemão 🇩🇪 Hermann Ebbinghaus descobriu um método revolucionário para memorizar
                muito mais conteúdo em menos tempo.
              </p>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Ele percebeu que nosso cérebro tem um padrão matemático para esquecer.
              </p>
              {/* Imagem 1.png aqui */}
              <div className="relative w-full h-90 my-4">
                <Image
                  src="/images/ebbinghaus-forgetting-diagram.png"
                  alt="Diagrama de esquecimento de Ebbinghaus"
                  fill
                  className="object-contain"
                  loading="lazy" // Lazy loading para imagens não críticas
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">Mas então ele descobriu algo genial:</p>
              <div className="bg-aiprova-blue-lighter/30 border-l-4 border-aiprova-blue-main p-5 my-6 rounded-r-lg shadow-md">
                <p className="text-lg text-aiprova-dark font-semibold leading-relaxed">
                  Se você revisar no momento matemático EXATO, a informação se fixa permanentemente na memória.
                </p>
              </div>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Ele criou o método "Repetição Espaçada" — um sistema que calcula quando revisar cada conteúdo para nunca
                mais esquecer.
              </p>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Anos depois, esse método se popularizou em faculdades dos EUA 🇺🇸 entre estudantes que estavam tirando
                notas baixas…
              </p>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Eles criavam cartões com uma pergunta de um lado e a resposta do outro, e revisavam com o método de
                Repetição Espaçada.
              </p>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">Esses cartões eles chamaram de Flashcards.</p>
              <p className="text-base text-gray-900 leading-relaxed">
                Os resultados foram TÃO EXPLOSIVOS que saíram artigos de Stanford, UCLA e até mesmo Harvard ⬇️
              </p>
              {/* Imagem 2.png aqui */}
              <div className="relative w-full h-60 my-4">
                <Image
                  src="/images/harvard-research-paper.png"
                  alt="Artigo de pesquisa de Harvard sobre Repetição Espaçada"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="relative w-full h-[400px] md:h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/harvard-event.jpeg" // Mantendo a imagem do evento para contexto visual
                alt="Evento em Harvard com estudantes"
                fill
                className="object-cover rounded-2xl"
                priority // Mantendo priority para imagem hero
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - HISTÓRIA DO RAFAEL */}
      <section className="py-6 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-aiprova-dark text-center mb-8">
            A História de Sucesso do Rafael
          </h2>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <p className="text-base text-gray-900 mb-6 leading-relaxed">
                Até que um dia esse artigo chegou às mãos de um advogado que se preparava para o concurso de Juiz de
                Direito de São Paulo 🇧🇷
              </p>
              {/* Imagem de juízes aprovados */}
              <div className="relative w-full h-64 my-4 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/juizes-aprovados.png"
                  alt="Grupo de juízes aprovados em concurso"
                  fill
                  className="object-cover rounded-xl"
                  loading="lazy" // Lazy loading para imagens de seções inferiores
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
              <div className="bg-aiprova-blue-lighter/30 border-l-4 border-aiprova-blue-main p-5 rounded-r-lg shadow-md mb-6">
                <p className="text-lg text-aiprova-dark font-semibold mb-4 leading-relaxed">
                  O Rafael, de 32 anos, era advogado há 8 anos e sonhava em ser Magistrado.
                </p>
                <p className="text-lg text-aiprova-dark font-semibold leading-relaxed">
                  Ele já havia tentado 2 vezes o concurso e sempre reprovava na primeira fase — Direito Constitucional,
                  Civil, Penal e Processual eram um oceano de informações impossível de memorizar.
                </p>
              </div>
              {/* Nova imagem adicionada aqui */}
              <div className="relative w-full h-64 my-4 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/livro-direito-penal.png"
                  alt="Livro de Direito Penal e materiais de estudo"
                  fill
                  className="object-cover rounded-xl"
                  loading="lazy" // Lazy loading
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Descobriu os flashcards e adaptou o método à sua rotina de escritório.
              </p>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Criou flashcards digitais com súmulas do STF, artigos dos códigos, jurisprudência consolidada, doutrina…
              </p>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Tudo organizado de forma inteligente, com revisões espaçadas ao longo do tempo.
              </p>
              <div className="bg-aiprova-blue-lighter/30 p-5 rounded-lg my-6 shadow-md">
                <p className="text-lg text-aiprova-dark font-semibold leading-relaxed">
                  Em apenas 8 meses de preparação usando esse método, Rafael tinha 3 vezes mais retenção do que nos
                  estudos anteriores.
                </p>
              </div>
              <p className="text-base text-gray-900 mb-4 leading-relaxed">
                Ele ganhava tempo nas revisões, conseguia estudar entre audiências e acertava muito mais nos simulados.
              </p>
              <p className="text-lg font-semibold mb-2 leading-relaxed text-aiprova-dark">
                No concurso de 2023 para Juiz Substituto, Rafael não só passou na primeira fase como ficou entre os 5
                primeiros colocados na prova objetiva.
              </p>
              <p className="text-lg font-semibold leading-relaxed text-aiprova-dark">
                Hoje, ele é Juiz de Direito e ainda usa flashcards para se manter atualizado com jurisprudência e novas
                legislações.
              </p>
              {/* NOVA IMAGEM ADICIONADA AQUI */}
              <div className="relative w-full h-64 my-4 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/martelo-balanca.png"
                  alt="Martelo de juiz e balança da justiça"
                  fill
                  className="object-cover rounded-xl"
                  loading="lazy" // Lazy loading
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 - PROVA SOCIAL POR ÁREA */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-aiprova-dark text-center mb-8">
            Mas o poder dos flashcards vai muito além da magistratura...
          </h2>
          <p className="text-lg text-gray-900 mb-6 text-center leading-relaxed">
            Esse mesmo método tem aprovado candidatos em todos os tipos de concursos públicos:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Tribunais (TRT, TRF, STJ, TSE)", desc: "jurisprudência e legislação processual" },
              { title: "Polícias (Civil, Militar, Federal)", desc: "códigos penais e procedimentos" },
              { title: "Fiscais (Receita Federal, ICMS, ISS)", desc: "legislação tributária e contábil" },
              { title: "Bancários (Banco do Brasil, CEF, BNDES)", desc: "conhecimentos bancários e atualidades" },
              { title: "Área da Saúde (concursos de enfermagem, medicina)", desc: "protocolos e procedimentos" },
              { title: "Educação (professores, pedagogos)", desc: "legislação educacional e didática" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-aiprova-blue-lighter/20 p-6 rounded-xl shadow-md border border-aiprova-blue-light"
              >
                <div className="flex-shrink-0 w-8 h-8 relative mt-1">
                  <Image
                    src={benefitIcons[item.title as keyof typeof benefitIcons] || "/placeholder.svg"}
                    alt={`Ícone para ${item.title}`}
                    fill
                    className="object-contain"
                    loading="lazy" // Lazy loading para ícones
                    sizes="32px"
                  />
                </div>
                <div>
                  <p className="text-base text-gray-900 leading-relaxed">
                    <span className="font-bold">{item.title}</span> — {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-aiprova-blue-lighter/30 border-l-4 border-aiprova-blue-main p-6 rounded-r-lg shadow-md">
            <p className="text-lg text-aiprova-dark font-semibold leading-relaxed">
              O que muda é apenas o conteúdo dos flashcards, mas o princípio da repetição espaçada funciona para
              qualquer volume de informação que você precise memorizar.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 5 - TRANSIÇÃO PARA AIPROVA */}
      <section className="py-6 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-gray-900 mb-4 leading-relaxed">Essa história não é exceção.</p>
          <p className="text-lg text-gray-900 mb-6 leading-relaxed">
            Ela só mostra o que acontece quando você adota um método testado, validado e construído para funcionar como
            o cérebro memoriza.
          </p>
          <div className="bg-aiprova-blue-light/20 border-2 border-aiprova-blue-main p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold text-aiprova-dark mb-4">
              E foi justamente esse princípio que inspirou o AiProva!
            </h3>
            <p className="text-lg text-gray-900 mb-4 leading-relaxed">
              Uma forma prática, acessível e inteligente de aplicar o poder dos flashcards e da repetição espaçada na
              sua rotina de estudos —
            </p>
            <p className="text-lg text-gray-900 leading-relaxed">
              mesmo que você tenha pouco tempo, ou ache que tem "memória ruim".
            </p>
          </div>
        </div>
      </section>

      {/* Seção 7 - GRÁFICO DE ESQUECIMENTO */}
      <section id="segredo-aprovacao" className="py-4 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-aiprova-dark mb-6 text-center">
            🎯 O segredo da aprovação
          </h2>
          <p className="text-base md:text-lg text-gray-900 mb-3 text-center leading-relaxed">
            Como o seu cérebro esquece o que você estuda com o tempo.
          </p>
          <p className="text-base md:text-lg text-gray-900 mb-3 text-center leading-relaxed">
            O método do AiProva ativa sua memória pouco antes disso acontecer.
          </p>
          <p className="text-base md:text-lg text-gray-900 mb-4 text-center leading-relaxed">
            Cada nova revisão fortalece sua lembrança.
          </p>

          {/* Gráficos de Comparação */}
          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 items-center">
            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
              <h3 className="text-lg md:text-xl font-bold text-aiprova-dark mb-4">Sem AiProva</h3>
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/images/forgetting-curve-without-aiprova.png"
                  alt="Gráfico da curva de esquecimento sem AiProva"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm md:text-base text-gray-900 mt-4">
                A memória decai rapidamente sem revisões estratégicas.
              </p>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-2xl border-2 border-aiprova-blue-main text-center">
              <h3 className="text-lg md:text-xl font-bold text-aiprova-dark mb-4">Com AiProva</h3>
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/images/forgetting-curve-with-aiprova.png"
                  alt="Gráfico da curva de esquecimento com AiProva"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm md:text-base text-gray-900 mt-4 font-semibold">
                Revisões no momento certo garantem 100% de memorização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 8 - REVISÃO VIA WHATSAPP */}
      <section className="py-6 px-4 bg-whatsapp-main text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 drop-shadow-lg text-center leading-tight">
              Revisão Inteligente, Direto no Seu WhatsApp!
            </h2>
            <Image
              src="/images/whatsapp-logo.webp"
              alt="WhatsApp Logo"
              width={32}
              height={32}
              className="md:w-10 md:h-10"
              loading="lazy"
              sizes="40px"
            />
          </div>
          <p className="text-base md:text-xl mb-6 leading-relaxed px-2">
            Chega de aplicativos complicados ou plataformas que te prendem. Com o AiProva, a sua revisão é feita de
            forma simples e eficiente, no conforto do seu aplicativo de mensagens favorito.
          </p>
        </div>
      </section>

      {/* Seção 9 - COMO FUNCIONA (Passo a Passo Atualizado) */}
      <section className="py-4 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-aiprova-dark text-center mb-6">
            Entenda como funciona o seu estudo na prática:
          </h2>

          <div className="space-y-6">
            {/* Passo 1: Envie seu material no chat */}
            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 opacity-70">
                <Image
                  src="/images/whatsapp-logo.webp"
                  alt="WhatsApp Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="mb-4 md:mb-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-aiprova-blue-main text-white rounded-full flex items-center justify-center font-bold text-xl md:text-2xl mb-3">
                    1
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-aiprova-dark mb-2">Envie seu material no chat</h3>
                  <p className="text-sm md:text-base text-gray-900 mb-1 leading-relaxed">
                    Pode ser PDF, apostila, edital, aula em texto...
                  </p>
                  <p className="text-sm md:text-base text-gray-900 mb-4 leading-relaxed">
                    Basta mandar no WhatsApp e a gente cuida do resto.
                  </p>
                  <button
                    onClick={() => handleCTA("pricing-section")}
                    className="bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center w-full"
                  >
                    Quero Utilizar
                  </button>
                </div>
                <div className="relative w-full h-80 md:h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/step1-send-material.png"
                    alt="Envio de material no chat do WhatsApp"
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Passo 2: Você revisa no seu ritmo e avalia a dificuldade */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-4 right-4 w-10 h-10 opacity-70">
                <Image
                  src="/images/whatsapp-logo.webp"
                  alt="WhatsApp Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="40px"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-14 h-14 bg-aiprova-blue-main text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-aiprova-dark mb-2">
                  Você revisa no seu ritmo e avalia a dificuldade
                </h3>
                <p className="text-base text-gray-900 mb-2 leading-relaxed">
                  o AiProva cria perguntas e respostas com base no que você enviou.
                </p>
                <p className="text-base text-gray-900 mb-2 leading-relaxed">
                  Tudo no formato ideal pra revisar com constância.
                </p>
                <button
                  onClick={() => handleCTA("pricing-section")}
                  className="mt-6 bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center w-full"
                >
                  Quero Utilizar
                </button>
              </div>
              <div className="order-2 md:order-1 relative w-full h-80 md:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/step2-review-difficulty.png"
                  alt="Flashcard com pergunta no WhatsApp"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Passo 3: Cartões de revisão com o seu material */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-4 right-4 w-10 h-10 opacity-70">
                <Image
                  src="/images/whatsapp-logo.webp"
                  alt="WhatsApp Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="40px"
                />
              </div>
              <div className="order-1 md:order-1">
                <div className="w-14 h-14 bg-aiprova-blue-main text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-aiprova-dark mb-2">Cartões de revisão com o seu material</h3>
                <p className="text-base text-gray-900 mb-2 leading-relaxed">Responde as perguntas</p>
                <p className="text-base text-gray-900 mb-2 leading-relaxed">Marca se achou fácil, médio ou difícil</p>
                <p className="text-base text-gray-900 mb-2 leading-relaxed">
                  E o AiProva organiza sua revisão com base nisso
                </p>
                <button
                  onClick={() => handleCTA("pricing-section")}
                  className="mt-6 bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center w-full"
                >
                  Quero Utilizar
                </button>
              </div>
              <div className="order-2 md:order-2 relative w-full h-80 md:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/step3-flashcard-review.png"
                  alt="Avaliação de dificuldade do flashcard no WhatsApp"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Passo 4: A constância vira resultado */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-4 right-4 w-10 h-10 opacity-70">
                <Image
                  src="/images/whatsapp-logo.webp"
                  alt="WhatsApp Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="40px"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-14 h-14 bg-aiprova-blue-main text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-aiprova-dark mb-2">A constância vira resultado</h3>
                <ul className="list-none p-0 m-0 space-y-2">
                  <li className="flex items-center text-base text-gray-900">
                    <span className="text-aiprova-blue-main text-2xl mr-2">📅</span> Revisões diárias no WhatsApp
                  </li>
                  <li className="flex items-center text-base text-gray-900">
                    <span className="text-aiprova-blue-main text-2xl mr-2">🔁</span> Foco no que você mais erra
                  </li>
                  <li className="flex items-center text-base text-gray-900">
                    <span className="text-aiprova-blue-main text-2xl mr-2">🧠</span> Aumento na memorização
                  </li>
                </ul>
                <button
                  onClick={() => handleCTA("pricing-section")}
                  className="mt-6 bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center w-full"
                >
                  Quero Utilizar
                </button>
              </div>
              <div className="order-2 md:order-1 relative w-full h-80 md:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/step4-daily-review-notification.png"
                  alt="Notificação de revisão diária no WhatsApp"
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 10 - BENEFÍCIOS RESUMIDOS */}
      <section className="py-6 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-aiprova-dark mb-4">
            🎯 Pare de esquecer o que você estuda e comece a memorizar
          </h2>
          <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
            O método que mais aprova no mundo, agora feito para quem vai encarar concursos públicos.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Revisões automáticas no momento certo",
              "3x mais retenção de conteúdo",
              "Economia de tempo nos estudos",
              "Funciona mesmo com rotina corrida",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <span className="text-aiprova-blue-main text-3xl font-bold mt-1">✅</span>
                <p className="text-lg text-gray-900 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção de Preço Persuasiva (Combinando Seção 11 e 12) */}
      <section id="pricing-section" className="py-6 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-aiprova-blue-main mb-4 drop-shadow-lg">
            Invista no seu futuro e garanta sua aprovação!
          </h2>
          <p className="text-lg md:text-xl text-aiprova-blue-light mb-6 leading-relaxed"></p>

          <div className="relative bg-gradient-to-br from-aiprova-gradient-start to-aiprova-gradient-end text-white p-4 rounded-3xl shadow-lg max-w-md mx-auto overflow-hidden">
            {/* "Melhor Valor" Badge */}
            <div className="absolute top-0 right-0 bg-yellow-400 text-aiprova-dark text-sm font-bold py-1 px-4 rounded-tr-2xl rounded-bl-2xl">
              Melhor Valor
            </div>

            <div className="flex items-center justify-center mb-2 mt-2">
              <Gift className="w-8 h-8 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold">Plano Anual</h3>
            </div>
            <p className="text-xs text-gray-200 mb-2">+ PLATAFORMA AIPROVA!</p>

            <div className="flex items-center justify-center mb-2">
              <span className="bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-lg mr-2">50% OFF</span>
              <p className="text-lg text-gray-200 line-through">R$ 240,72</p>
            </div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">
              R$ 10,03 <span className="text-xl font-normal">em 12x</span>
            </p>
            <p className="text-sm text-gray-200 mb-4">ou R$97 à vista</p>

            {/* Benefits List from image */}
            <div className="bg-white/20 text-white p-4 rounded-lg mb-4 text-left">
              {[
                "Bônus de 7 dias",
                "Integração 100% no WhatsApp",
                "Suporte especializado",
                "Sistema de Revisão Espaçada",
                "Criação de Flashcards com IA",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start mb-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-transparent rounded-full flex items-center justify-center mr-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                  </div>
                  <p className="text-base leading-tight">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Timer Banner */}
            <div className="bg-red-500 text-white p-2 rounded-md mb-4 flex items-center justify-center shadow-md">
              <Clock className="w-5 h-5 mr-2" />
              <p className="text-base font-bold">50% OFF Acaba a qualquer momento!</p>
            </div>

            <button
              onClick={() => window.open("https://pay.kiwify.com.br/HbANctR", "_blank")}
              className="bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center w-full"
            >
              Quero Utilizar
            </button>

            {/* Final Guarantee */}
            <div className="flex items-center justify-center mt-4 text-xs text-white">
              <CheckCircle className="w-4 h-4 text-white mr-2" />
              <p>Garantia de 7 dias, compra segura, acesso imediato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 13 - DEPOIMENTOS */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-aiprova-dark text-center mb-8">
            O que dizem nossos aprovados
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image src="/fotoCarlos.jpg" alt="Carlos Silva" fill className="rounded-full object-cover" />
                </div>
                <p className="text-xs text-gray-900 font-bold">Carlos Silva, Delegado PC-SP</p>
              </div>
              <p className="text-base text-gray-900 italic leading-relaxed">
                "Passei em 1º lugar no concurso da Polícia Civil usando o AiProva. O método de repetição espaçada me
                ajudou a memorizar toda a legislação penal."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image src="/fotoAna.jpg" alt="Ana Costa" fill className="rounded-full object-cover" />
                </div>
                <p className="text-xs text-gray-900 font-bold">Ana Costa, Auditora Fiscal RFB</p>
              </div>
              <p className="text-base text-gray-900 italic leading-relaxed">
                "Depois de 3 tentativas frustradas, consegui passar para Auditor Fiscal usando flashcards. O AiProva
                organizou minha revisão perfeitamente."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image src="/fotoMarina.jpg" alt="Roberto Lima" fill className="rounded-full object-cover" />
                </div>
                <p className="text-xs text-gray-900 font-bold">Julia Lima, Técnico Judiciário TRT</p>
              </div>
              <p className="text-base text-gray-900 italic leading-relaxed">
                "O diferencial foi poder revisar no WhatsApp durante os intervalos do trabalho. Aprovado em 6º lugar no
                TRT!"
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleCTA("pricing-section")}
              className="bg-whatsapp-main hover:bg-whatsapp-main/80 text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              QUERO UTILIZAR
            </button>
          </div>
        </div>
      </section>

      {/* Seção 14 - GARANTIA */}
      <section className="py-6 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300 shadow-lg">
            <p className="text-sm font-semibold text-gray-600 uppercase mb-4">GARANTIA DE 7 DIAS</p>
            <h2 className="text-3xl font-extrabold text-aiprova-dark mb-4 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-aiprova-blue-main mr-3" />
              Garantia Total - Sem Riscos Para Você
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Sabemos que você já tentou outros métodos e pode estar cético. Por isso, oferecemos uma garantia simples e
              direta: Experimente o AiProva por 7 dias completos. Se por qualquer motivo você sentir que não é para
              você, basta nos enviar um email e devolvemos 100% do seu dinheiro sem fazer nenhuma pergunta. Não queremos
              que você fique com o AiProva se não estiver completamente satisfeito.
            </p>
            <p className="text-lg font-bold text-aiprova-dark">
              Sua aprovação é nossa prioridade. Sem riscos, sem pegadinhas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aiprova-dark text-gray-400 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/logo-branco.svg"
              alt="Logo AiProva"
              width={120}
              height={24}
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-base">
            <a href="https://aiprova.com.br/termos-de-uso" className="hover:text-white transition-colors duration-200">
              Termos de Uso
            </a>
            <a
              href="https://aiprova.com.br/politicas-de-privacidade"
              className="hover:text-white transition-colors duration-200"
            >
              Políticas de Privacidade
            </a>
          </div>
          <p className="text-xs">&copy; 2024 AiProva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default AiProvaLanding
