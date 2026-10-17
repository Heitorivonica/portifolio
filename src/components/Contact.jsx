import { profile } from '../data/profile.js'

export default function Contact() {
  // Abre a tela de "Escrever e-mail" do Gmail já preenchida
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
    profile.emailSubject
  )}&body=${encodeURIComponent(profile.emailBody)}`

  return (
    <section id="contato" className="section section--orange">
      <div className="container contact">
        <h2 className="section__title section__title--light">Vamos conversar?</h2>
        <p className="contact__text">
          Estou aberto a oportunidades, freelas e parcerias. Me mande uma mensagem!
        </p>
        <div className="contact__links">
          <a href={gmail} target="_blank" rel="noreferrer" className="btn btn--white">
            E-mail
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
