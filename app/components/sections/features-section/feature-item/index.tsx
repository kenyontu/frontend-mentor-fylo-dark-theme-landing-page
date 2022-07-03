import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  imageSrc: string
  name: string
  description: string
}

export function FeatureItem({ imageSrc, name, description }: Props) {
  return (
    <div className="feature-item">
      <div>
        <img src={imageSrc} alt="" />
      </div>
      <h2 className="text-center ff-raleway w700">{name}</h2>
      <p className="text-center">{description}</p>
    </div>
  )
}
