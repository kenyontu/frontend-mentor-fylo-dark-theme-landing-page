import { useRef, useEffect } from 'react'
import { useFetcher } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export function GetAccessSection() {
  const fetcher = useFetcher()

  const showMessage = !fetcher.submission
  const infoMsg = (showMessage && fetcher.data?.message) ?? ''
  const errorMsg = (showMessage && fetcher.data?.error?.message) ?? ''

  return (
    <section className="get-access-section">
      <fetcher.Form
        replace
        method="post"
        action="/action/get-access"
        className="content-container"
      >
        <h2 className="ff-raleway w700 text-center">Get early access today</h2>
        <p className="w400 text-center">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="get-access-section__email">
          <input
            className="focus-outline"
            required
            type="email"
            name="email"
            placeholder="email@example.com"
            aria-label="Enter your e-mail"
            aria-describedby="get-access-section__email-error"
          />
          <span
            id="get-access-section__email-error"
            className={infoMsg ? 'info' : errorMsg ? 'error' : ''}
          >
            {infoMsg || errorMsg}
          </span>
        </div>
        <button className="primary-button focus-outline" type="submit">
          Get Started For Free
        </button>
      </fetcher.Form>
    </section>
  )
}
