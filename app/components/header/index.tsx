import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export function Header() {
  return (
    <header className="header">
      <div className="header__content content-container">
        <a className="header__logo focus-outline" href="#">
          <img src="./images/logo.svg" alt="Home" />
        </a>
        <nav className="header__nav" aria-label="Header navigation">
          <ul>
            <li>
              <a href="#" className="ff-raleway">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="ff-raleway">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="ff-raleway">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
