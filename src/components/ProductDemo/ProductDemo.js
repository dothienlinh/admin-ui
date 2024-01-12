import TitleSection from '../TitleSection/TitleSection'
import ProductDemoItem from '../ProductDemoItem/ProductDemoItem'
import { Link } from 'react-router-dom'

function ProductDemo() {
  return (
    <section className="pt-[140px] py-40 bg-[#fbfaf9]">
      <div className="container mx-auto">
        <div className="mx-auto lg:w-[58.3333333333%]">
          <TitleSection className="mb-[85px]">
            Let's take a look at our premium admin dashboard templates
          </TitleSection>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
            <ProductDemoItem />
          </div>

          <div className="text-center">
            <Link
              to={''}
              title="View All Premium Admin Templates"
              className="view-all-btn"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDemo
