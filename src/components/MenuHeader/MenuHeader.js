import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const itemMenu = [
  { id: 1, label: 'Home', link: '' },
  { id: 2, label: 'Documents', link: '' },
  { id: 3, label: 'Premium Templates', link: '' },
  { id: 4, label: 'Our Blog', link: '' }
]

function MenuHeader({ openMenu, setOpenMenu }) {
  const overlayRef = useRef()
  const menuMobileHeaderRef = useRef()

  useEffect(() => {
    if (openMenu) {
      overlayRef.current.classList.add('open-overlay')
      menuMobileHeaderRef.current.classList.add('open-menu-mobile-header')
    } else {
      overlayRef.current.classList.remove('open-overlay')
      menuMobileHeaderRef.current.classList.remove('open-menu-mobile-header')
    }
  }, [openMenu])

  return (
    <>
      <div
        ref={overlayRef}
        className="overlay lg:hidden"
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      ></div>
      <div ref={menuMobileHeaderRef} className="menu-mobile-header lg:hidden">
        <nav className="mb-[25px]">
          <ul>
            {itemMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-[#111] px-[5px] py-[10px] block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to={'/'} className="btn-subscribe border-[#111]">
          Subscribe
        </Link>
      </div>
    </>
  )
}

export default MenuHeader
