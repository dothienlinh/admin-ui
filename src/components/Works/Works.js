import { Link } from 'react-router-dom'
import TitleSection from '../TitleSection/TitleSection'
import Image from '../Image/Image'
import worksItem from '~/data/worksItem'

function Works() {
  return (
    <section className="pt-[100px] pb-[275px]">
      <div className="container mx-auto">
        <TitleSection className="mb-[45px]">Works Great With</TitleSection>
        <div className="px-3 grid grid-cols-2 items-center md:grid-cols-5">
          {worksItem.map((item) => (
            <Link
              to={''}
              key={item.id}
              className="block px-[30px] py-[23px] mb-[30px]"
            >
              <Image src={item.img} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
