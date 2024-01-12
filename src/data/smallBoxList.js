import { PiHandbag } from 'react-icons/pi'
import { LiaChartBarSolid } from 'react-icons/lia'
import { IoIosPersonAdd, IoMdPie } from 'react-icons/io'

const smallBoxList = [
  {
    id: 1,
    number: 150,
    percent: false,
    text: 'New Orders',
    icon: <PiHandbag />,
    bgColor: 'bg-info'
  },
  {
    id: 2,
    number: 53,
    percent: true,
    text: 'Bounce Rate',
    icon: <LiaChartBarSolid />,
    bgColor: 'bg-success'
  },
  {
    id: 3,
    number: 44,
    percent: false,
    text: 'User Registrations',
    icon: <IoIosPersonAdd />,
    bgColor: 'bg-warning'
  },
  {
    id: 4,
    number: 65,
    percent: false,
    text: 'Unique Visitors',
    icon: <IoMdPie />,
    bgColor: 'bg-danger'
  }
]

export default smallBoxList
