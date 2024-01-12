import Image from '../Image/Image'
import TitleSection from '../TitleSection/TitleSection'
import featureList from '~/data/featureList'

function Feature() {
  return (
    <section className="pt-[170px] pb-[100px]">
      <div className="container mx-auto">
        <TitleSection className="mb-[85px]">
          Our amazing features are most usfull for the users
        </TitleSection>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((item) => (
            <div
              className="px-3 mb-[84px] flex hover:text-[#2c4dfc]"
              key={item.id}
            >
              <div className="w-[67px] h-[67px] rounded-full flex justify-center items-center border border-[#ebdeda] mr-4 flex-shrink-0">
                <Image src={item.img} width={item.width} height={item.height} />
              </div>
              <div className="pt-[5px]">
                <h4 className="text-[22px] font-extrabold mb-[14px] transition duration-300">
                  {item.title}
                </h4>
                <p className="text-[#687083] leading-[1.7] text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
