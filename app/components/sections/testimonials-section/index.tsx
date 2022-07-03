import type { LinksFunction } from '@remix-run/node'

import styles from './styles.css'
import { testimonials } from '~/config/testimonials'

import {
  TestimonialCard,
  links as testimonialCardLinks,
} from './testimonial-card'

export const links: LinksFunction = () => [
  ...testimonialCardLinks(),
  { rel: 'stylesheet', href: styles },
]

export function TestimonialsSection() {
  return (
    <section className="testimonials-section content-container">
      {testimonials.map(({ id, ...rest }) => (
        <TestimonialCard key={id} {...rest} />
      ))}
    </section>
  )
}
