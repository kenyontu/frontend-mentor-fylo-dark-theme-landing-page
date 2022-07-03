import type { LinksFunction } from '@remix-run/node'

import { features } from '~/config/features'
import styles from './styles.css'
import { FeatureItem, links as featureItemLinks } from './feature-item'

export const links: LinksFunction = () => [
  ...featureItemLinks(),
  { rel: 'stylesheet', href: styles },
]

export function FeaturesSection() {
  return (
    <section className="features-section content-container">
      {features.map(({ id, ...rest }) => (
        <FeatureItem key={id} {...rest} />
      ))}
    </section>
  )
}
