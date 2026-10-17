import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="habilidades" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          Minhas <span>habilidades</span>
        </h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.group} className="card">
              <h3 className="card__title">{group.group}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
