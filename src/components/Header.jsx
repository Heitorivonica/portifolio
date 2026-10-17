import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll da página enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="logo" onClick={() => setOpen(false)}>
          Heitor<span>.</span>
        </a>

        <button
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
