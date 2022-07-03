import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  testimonial: string
  pictureImgSrc: string
  name: string
  position: string
}

export function TestimonialCard({
  testimonial,
  pictureImgSrc,
  name,
  position,
}: Props) {
  return (
    <div className="testimonial-card">
      <p>{testimonial}</p>
      <div>
        <img src={pictureImgSrc} alt="" />
        <p className="w700">{name}</p>
        <p>{position}</p>
      </div>
    </div>
  )
}
