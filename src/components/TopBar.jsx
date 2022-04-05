import ExercismLogo from '../images/exercism-logo.svg'
import NavItem from './NavItem'

import { ReactComponent as DashboardIcon } from '../images/dashboard-icon.svg'
import { ReactComponent as TracksIcon } from '../images/tracks-icon.svg'
import { ReactComponent as MentoringIcon } from '../images/mentoring-icon.svg'
import { ReactComponent as ContributeIcon } from '../images/contribute-icon.svg'

const links = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: '/dashboard',
    selected: true
  },
  {
    name: 'Tracks',
    icon: <TracksIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: '/tracks',
    selected: false
  },
  {
    name: 'Mentoring',
    icon: <MentoringIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: '/mentoring',
    selected: false
  },
  {
    name: 'Contribute',
    icon: <ContributeIcon className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 stroke-inherit' />,
    path: '/contribute',
    selected: false
  },
]

export default function TopBar() {
  return (
    <header className="flex items-center px-8 pt-1 pb-1.5 border-b">
      <div className='mr-8'>
        <img src={ ExercismLogo } alt="" />
      </div>
      <nav className='font-semibold text-theme-faded-300'>
        <ul className="flex items-center">
          { links.map(link => <NavItem key={ link.name } { ...link } />) }
        </ul>
      </nav>
    </header>
  )
}
