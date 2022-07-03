import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export function StayProductiveSection() {
  return (
    <section className="stay-productive-section content-container">
      <img src="./images/illustration-stay-productive.png" alt="" />

      <div className="stay-productive-section__content">
        <h2 className="ff-raleway w700">Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#">
          See how Fylo works
          <img src="./images/icon-arrow.svg" alt="" />
        </a>
      </div>
    </section>
  )
}
