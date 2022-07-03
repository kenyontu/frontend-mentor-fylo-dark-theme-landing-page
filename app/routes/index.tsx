import type { ActionFunction, LinksFunction } from '@remix-run/node'

import { Header, links as headerLinks } from '~/components/header'
import { Footer, links as footerLinks } from '~/components/footer'
import { Hero, links as heroLinks } from '~/components/hero'
import {
  FeaturesSection,
  featuresSectionLinks,
  StayProductiveSection,
  stayProductiveSectionLinks,
  TestimonialsSection,
  testimonialsSectionLinks,
  GetAccessSection,
  getAccessSectionLinks,
} from '~/components/sections'
import styles from '~/styles/index.css'

export const links: LinksFunction = () => [
  ...headerLinks(),
  ...footerLinks(),
  ...heroLinks(),
  ...featuresSectionLinks(),
  ...stayProductiveSectionLinks(),
  ...testimonialsSectionLinks(),
  ...getAccessSectionLinks(),
  { rel: 'stylesheet', href: styles },
]

export const action: ActionFunction = (request) => {}

export default function Index() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <StayProductiveSection />
        <TestimonialsSection />
        <GetAccessSection />
      </main>
      <Footer />
    </div>
  )
}
