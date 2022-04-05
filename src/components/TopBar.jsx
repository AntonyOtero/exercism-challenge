import ExercismLogo from '../images/exercism-logo.svg'
import IconBackground from '../images/icon-bg.svg'
import DashboardIcon from '../images/dashboard-icon.svg'
import TracksIcon from '../images/tracks-icon.svg'
import MentoringIcon from '../images/mentoring-icon.svg'
import ContributeIcon from '../images/contribute-icon.svg'

export default function TopBar() {
  return (
    <header className="flex items-center px-8 pt-1 pb-1.5 border-b">
      <div className='mr-8'>
        <img src={ ExercismLogo } alt="" />
      </div>
      <nav className='font-semibold text-theme-faded-300'>
        <ul className="flex items-center">
          <li className="mr-8 text-theme-default">
            <a className='flex items-center' href="/dashboard">
              <div className='relative'>
                <img src={IconBackground} alt="" />
                <img className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' src={DashboardIcon} alt="" />
              </div>
              <span className="ml-2.5">Dashboard</span>
            </a>
          </li>
          <li className="mr-8">
            <a className='flex items-center' href="/dashboard">
              <img src={TracksIcon} alt="" />
              <span className="ml-2.5">Tracks</span>
            </a>
          </li>
          <li className="mr-8">
            <a className='flex items-center' href="/dashboard">
              <img src={MentoringIcon} alt="" />
              <span className="ml-2.5">Mentoring</span>
            </a>
          </li>
          <li className="mr-8">
            <a className='flex items-center' href="/dashboard">
              <img src={ContributeIcon} alt="" />
              <span className="ml-2.5">Contribute</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
