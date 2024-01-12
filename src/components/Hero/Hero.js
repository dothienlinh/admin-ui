import { Link } from 'react-router-dom'
import Image from '../Image/Image'

const itemBtn = [
  { id: 1, label: 'Download', link: '' },
  { id: 2, label: 'Live Preview', link: '' },
  { id: 3, label: 'Go Pro', link: '' },
  { id: 4, label: 'Docs', link: '' }
]

function Hero() {
  return (
    <section className="bg-hero-pattern pt-[180px] bg-cover bg-no-repeat bg-top">
      <div className="container-fluid mx-auto px-3 ">
        <div className="text-center mx-auto max-w-[1010px]">
          <h2 className="text-white text-[22px] font-extrabold font-mulish mb-5 md:text-[40px] leading-[26.4px]">
            AdminLTE Bootstrap Admin Dashboard Template
          </h2>
          <p className="text-[15px] text-[#c0c4ce] font-mulish font-medium leading-[1.9] mb-10 md:px-[120px]">
            Best open source admin dashboard & control panel theme. Built on top
            of Bootstrap, AdminLTE provides a range of responsive, reusable, and
            commonly used components.
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center">
          {itemBtn.map((item) => (
            <li
              key={item.id}
              className="block text-white mr-[10px] mb-[18px] border rounded-[10px] last:mr-0 hover:border-blue hover:bg-blue transition-all duration-300"
            >
              <Link to={item.link} className="block pt-4 px-9 py-[14px]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-[95px]">
          <Image
            src={'https://adminlte.io/wp-content/uploads/2021/04/hero-pic.png'}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
