import Funfact from '~/Funfact/Funfact'
import Feature from '~/components/Feature/Feature'
import Header from '~/components/Header/Header'
import Hero from '~/components/Hero/Hero'
import ProductDemo from '~/components/ProductDemo/ProductDemo'
import Support from '~/components/Support/Support'
import Works from '~/components/Works/Works'

function Home() {
  return (
    <div className="font-mulish">
      <Header />
      <Hero />
      <ProductDemo />
      <Feature />
      <Funfact />
      <Works />
      <Support />
    </div>
  )
}

export default Home
