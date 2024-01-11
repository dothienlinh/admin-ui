import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Image from '../Image/Image'
import MenuHeader from '../MenuHeader/MenuHeader'
import { itemMenu } from '../MenuHeader/MenuHeader'

function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <MenuHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <header className="bg-[#161d31] py-[30px] fixed top-0 left-0 right-0">
        <div className="w-full px-3 flex justify-between mx-auto xs:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 3xl:w-[1600px]">
          <Link to={'/'}>
            <Image
              src={'https://adminlte.io/wp-content/uploads/2021/03/logo.png'}
              width="160"
              height="27"
            />
          </Link>

          <div className="flex">
            <nav className="hidden lg:block mr-[5px] xl:mr-[35px]">
              <ul className="flex">
                {itemMenu.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="block py-[10px] px-[5px] mr-[25px] text-[#9a9fad] hover:text-white transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block text-white">
              <Link to={'/'} className="btn-subscribe">
                Subscribe
              </Link>
            </div>
          </div>

          <button
            className="text-3xl text-white lg:hidden"
            onClick={() => {
              setOpenMenu(!openMenu)
            }}
          >
            <FaBars />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
