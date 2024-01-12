import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import productDemoList from '~/data/productDemoList'
import Image from '../Image/Image'

function ProductDemoItem() {
  return (
    <>
      {productDemoList.map((item) => (
        <div key={item.id} className="px-3">
          <div className="bg-white rounded-[10px] border border-[#f0f0f0] overflow-hidden mb-[30px]">
            <Image src={item.img} />
            <div className="pt-9 pr-[35px] pb-[25px] pl-[30px]">
              <Link to={''} className="block text-lg font-extrabold mb-5">
                {item.title}
              </Link>
              <p className="text-[#687083] text-sm leading-[1.8] mb-[30px]">
                {item.desc}
              </p>

              <div className="pt-[22px] pb-[15px] border-t border-[#f0ddd9]">
                <h4 className="mb-2 font-extrabold text-[22px]">
                  ${item.price}
                </h4>
                <div className="pt-[6px] flex gap-1">
                  <Link
                    to={''}
                    className="inline-block text-sm text-white bg-blue pt-[10px] px-4 pb-2 rounded-[5px] hover:shadow-[0_7px_18px_#0060d570] transition duration-300"
                  >
                    Preview
                  </Link>
                  <Link
                    to={''}
                    className="inline-block pt-[9px] px-3 pb-[7px] text-blue rounded-[5px] border border-blue"
                  >
                    <TfiShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

ProductDemoItem.propTypes = {}

export default ProductDemoItem
