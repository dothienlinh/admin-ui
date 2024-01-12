import Feature from '~/components/Feature/Feature'
import Header from '~/components/Header/Header'
import Hero from '~/components/Hero/Hero'
import ProductDemo from '~/components/ProductDemo/ProductDemo'

function Home() {
  return (
    <div className="font-mulish">
      <Header />
      <Hero />
      <ProductDemo />
      <Feature />
    </div>
  )
}

export default Home
