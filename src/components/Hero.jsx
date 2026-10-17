import { profile } from '../data/profile.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__hello">Olá, eu sou</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            {profile.role} <span>{profile.focus}</span>
          </h2>
          <p className="hero__bio">{profile.bio}</p>
          <div className="hero__actions">
            <a href="#projetos" className="btn btn--primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn btn--outline">
              Fale comigo
            </a>
          </div>
        </div>

        <div className="hero__avatar">
          <div className="avatar">
            <img src="/image.png" alt={`Foto de ${profile.name}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
