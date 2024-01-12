import Image from '~/components/Image/Image'
import usersItem from '~/data/usersItem'

function Funfact() {
  return (
    <section className="bg-[#fbfaf9] py-40">
      <div className="container mx-auto">
        <div className="mb-[70px] lg:grid lg:grid-cols-[41.6666666667%_auto]">
          <div className="px-3">
            <Image
              src={
                'https://adminlte.io/wp-content/uploads/2021/04/users-left.png'
              }
              width="563"
              height="479"
              className="min-w-full"
            />
          </div>

          <div className="lg:pl-[60px] lg:mb-[30px]">
            <h2 className="text-[40px] leading-[1.4] font-extrabold text-[#072366] mb-[25px] px-3 lg:px-0">
              Active community of users and developers.
            </h2>
            <p className="text-[#707b8e] font-poppins leading-[1.9] text-[15px] px-3 mb-[54px] lg:px-0">
              Meet the fastest and most popular admin template available.
            </p>
            <div className="pb-[30px] md:grid md:grid-cols-2">
              {usersItem.map((item) => (
                <div className="px-3" key={item.id}>
                  <div className="flex items-center bg-white px-[30px] pt-[18px] pb-[25px] mb-[25px] rounded-[10px]">
                    <Image
                      src={item.img}
                      width="45"
                      height="54"
                      className="mr-5"
                    />
                    <div>
                      <h4 className="text-[25px] font-black font-poppins text-[#072366] mb-[5px] leading-[30px]">
                        {item.title}
                      </h4>
                      <p className="text-[#707b8e] font-poppins capitalize">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Funfact
