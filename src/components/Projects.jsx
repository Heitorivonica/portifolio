import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container">
        <h2 className="section__title">
          Meus <span>projetos</span>
        </h2>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="card project">
              <div className="project__banner">{project.title.charAt(0)}</div>
              <h3 className="card__title">{project.title}</h3>
              <p className="project__desc">{project.description}</p>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="project__links">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
                    Código
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                    Ver online
                  </a>
                )}
              </div>
            </article>
          ))}

          <article className="card project project--soon">
            <div className="project__banner">+</div>
            <h3 className="card__title">Em breve</h3>
            <p className="project__desc">Novos projetos estão a caminho. Fique de olho!</p>
          </article>
        </div>
      </div>
    </section>
  )
}
