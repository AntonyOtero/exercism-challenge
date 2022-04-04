import ExercismLogo from '../images/exercism-logo.svg'
import IconBackground from '../images/icon-bg.svg'
import DashboardIcon from '../images/dashboard-icon.svg'
import TracksIcon from '../images/tracks-icon.svg'
import MentoringIcon from '../images/mentoring-icon.svg'
import ContributeIcon from '../images/contribute-icon.svg'

export default function TopBar() {
  return (
    <header className="flex items-center h-16 px-8 pt-1 pb-1.5 border">
      <div className='mr-8'>
        <img src={ ExercismLogo } alt="" />
      </div>
    </header>
  )
}
