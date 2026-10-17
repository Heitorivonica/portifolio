const highlights = [
  { label: 'Formação', value: 'Análise e Desenvolvimento de Sistemas — ENIAC' },
  { label: 'Cursando', value: 'Engenharia de Software' },
  { label: 'Experiência', value: 'Suporte Técnico' },
  { label: 'Foco atual', value: 'Front-end com React e JavaScript' },
]

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <h2 className="section__title">
          Sobre <span>mim</span>
        </h2>
        <div className="about">
          <div className="about__text">
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas pela ENIAC e atualmente curso
              Engenharia de Software. Atuo como desenvolvedor fullstack, com foco em front-end:
              construo interfaces em React e JavaScript e desenvolvo o back-end com Node.js, APIs
              REST e bancos de dados SQL e MongoDB.
            </p>
            <p>
              Comecei na área de tecnologia pelo suporte técnico, atendendo usuários e resolvendo
              problemas no dia a dia. Foi ali que aprendi a olhar para um sistema do ponto de vista
              de quem usa: entender onde a pessoa trava, o que confunde e o que faz ela perder
              tempo. Hoje levo essa visão para o desenvolvimento.
            </p>
            <p>
              Estou dedicado a criar aplicações completas em JavaScript, do layout à integração com
              o banco de dados, e busco oportunidades como desenvolvedor front-end ou fullstack
              para crescer em um time e entregar produtos que funcionem de verdade para quem usa.
            </p>
          </div>

          <ul className="about__highlights">
            {highlights.map((item) => (
              <li key={item.label} className="about__item">
                <span className="about__label">{item.label}</span>
                <span className="about__value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
