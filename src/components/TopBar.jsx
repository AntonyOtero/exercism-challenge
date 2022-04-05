import ExercismLogo from '../images/exercism-logo.svg'
import NavItem from './NavItem'
import MenuItem from './MenuItem'

import { ReactComponent as DashboardIcon } from '../images/dashboard-icon.svg'
import { ReactComponent as TracksIcon } from '../images/tracks-icon.svg'
import { ReactComponent as MentoringIcon } from '../images/mentoring-icon.svg'
import { ReactComponent as ContributeIcon } from '../images/contribute-icon.svg'
import { ReactComponent as MoreOptionsIcon } from '../images/more-options.svg'

import { ReactComponent as TestimonialIcon } from '../images/testimonial-icon.svg'
import { ReactComponent as BadgeIcon } from '../images/badge-icon.svg'
import NotificationIcon from '../images/notification.png'
import CreditIcon from '../images/credit.png'
import AvatarIcon from '../images/avatar.png'

const links = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: 'dashboard',
    selected: true
  },
  {
    name: 'Tracks',
    icon: <TracksIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: 'tracks',
    selected: false
  },
  {
    name: 'Mentoring',
    icon: <MentoringIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: 'mentoring',
    selected: false
  },
  {
    name: 'Contribute',
    icon: <ContributeIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: 'contribute',
    selected: false
  },
]

const options = [
  {
    name: 'testimonials',
    icon: <TestimonialIcon />,
    alert: true,
    count: 0,
    size: 'w-4 h-4'
  },
  {
    name: 'badge',
    icon: <BadgeIcon />,
    alert: true,
    count: 0,
    size: 'w-4 h-4'
  },
  {
    name: 'notifications',
    icon: NotificationIcon,
    alert: true,
    count: 2,
    size: 'w-[24px] h-[24px]'
  },
  {
    name: 'credit',
    icon: CreditIcon,
    alert: true,
    count: 0,
    size: 'w-[21px] h-[21px]'
  },
  {
    name: 'more-options',
    icon: <div className='flex items-center'><img src={AvatarIcon} alt="" /><MoreOptionsIcon className='ml-4' /></div>,
    alert: false,
    count: 0,
    size: ''
  }
]

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-8 pt-1 pb-1.5 border-b">
      <div className='flex items-center'>
        <div className='mr-8'>
          <img src={ ExercismLogo } alt="" />
        </div>
        <nav className='font-semibold text-theme-faded-300'>
          <ul className="flex items-center">
            { links.map(link => <NavItem key={ link.name } { ...link } />) }
          </ul>
        </nav>
      </div>
      <div>
        <ul className="flex items-center">
          { options.map(option => <MenuItem key={ option.name } { ...option } />) }
        </ul>
      </div>
    </header>
  )
}
