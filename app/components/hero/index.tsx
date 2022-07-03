import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <picture>
          <source
            srcSet="./images/bg-curvy-desktop.svg"
            media="(min-width: 768px)"
          />
          <img src="./images/bg-curvy-mobile.svg" alt="" />
        </picture>
      </div>
      <div className="hero__content content-container">
        <img src="./images/illustration-intro.png" alt="" />
        <h1 className="text-center ff-raleway w700">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>

        <a className="primary-button focus-outline" href="#">
          Get Started
        </a>
      </div>
    </section>
  )
}
