export default async function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">

        {/* HERO */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            About AnimeHub
          </h1>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Uma plataforma inspirada no MyAnimeList para explorar animes,
            criar listas, avaliar títulos e se conectar com outros otakus.
          </p>
        </div>

        {/* IDEA */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-3">
          <h2 className="text-2xl font-semibold">💡 Ideia do Projeto</h2>
          <p className="text-zinc-400 leading-relaxed">
            O AnimeHub nasceu com a proposta de criar uma experiência social completa
            para fãs de anime. O usuário pode buscar animes via API externa,
            montar sua lista pessoal, avaliar, comentar, interagir com amigos e receber recomendações inteligentes.
          </p>
        </div>

        {/* STACK */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-2xl font-semibold">⚙️ Stack do Projeto</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>• Next.js (Frontend)</li>
              <li>• React + TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• ASP.NET Core (API)</li>
              <li>• SQL Server / PostgreSQL</li>
              <li>• MongoDB</li>
              <li>• JWT Authentication</li>
              <li>• Jikan API (Animes)</li>
            </ul>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-2xl font-semibold">🚀 Arquitetura</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>• Clean Architecture</li>
              <li>• Separação em Domain / Application / Infrastructure</li>
              <li>• API RESTful</li>
              <li>• Cache para otimização de consultas</li>
              <li>• Sistema de logs e monitoramento</li>
            </ul>
          </div>
        </div>

        {/* FEATURES */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-3">
          <h2 className="text-2xl font-semibold">✨ Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-4 text-zinc-400">
            <p>• Busca de animes em tempo real</p>
            <p>• Listas personalizadas estilo MyAnimeList</p>
            <p>• Avaliações e comentários</p>
            <p>• Sistema de amigos e feed social</p>
            <p>• Recomendações baseadas em comportamento</p>
            <p>• Ranking pessoal e estatísticas</p>
          </div>
        </div>

        {/* DEVELOPER */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">👨‍💻 Sobre o Desenvolvedor</h2>

          <p className="text-zinc-300 leading-relaxed">
            Este projeto foi desenvolvido como parte de um portfólio focado em backend,
            frontend moderno e arquitetura de sistemas escaláveis.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            O objetivo é demonstrar domínio em React, ASP.NET Core, autenticação JWT,
            bancos relacionais e NoSQL, além de integração com APIs externas e boas práticas de código limpo.
          </p>

          <div className="pt-2 text-sm text-zinc-500">
            “Construindo sistemas como se fossem produtos reais, não apenas projetos de estudo.”
          </div>
        </div>

      </div>
    </section>
  );
}