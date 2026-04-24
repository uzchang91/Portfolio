import React from 'react'
import Sojourn from './assets/Sojourn.svg?react'
import Home from './assets/Home.svg?react'
import Education from './assets/Education.svg?react'
import Skills from './assets/Skills.svg?react'
import Stack from './assets/Stack.svg?react'

const Navigation = ({ setActiveMenu, activeMenu, }) => {
  return (
    <div className='nav-wrapper'>

      <div
        className='logo'
        onClick={() => setActiveMenu('Home')}
        title='홓'
      >
        <Sojourn className='nav-content' />
      </div>

      <div
        className={`nav-menu ${activeMenu === 'Home' ? 'active' : ''}`}
        onClick={() => setActiveMenu('Home')}
        title='홓'
      >
        <Home className='nav-content' />
      </div>

      <div
        className={`nav-menu ${activeMenu === 'Education' ? 'active' : ''}`}
        onClick={() => setActiveMenu('Education')}
        title='교육'
      >
        <Education className='nav-content' />
      </div>

      <div
        className={`nav-menu ${activeMenu === 'SkillSets' ? 'active' : ''}`}
        onClick={() => setActiveMenu('SkillSets')}
        title='능력'
      >
        <Skills className='nav-content' />
      </div>

      <div
        className={`nav-menu ${activeMenu === 'Projects' ? 'active' : ''}`}
        onClick={() => setActiveMenu('Projects')}
        title='프로젝트'
      >
        <Stack className='nav-content' />
      </div>

    </div>
  )
}

export default Navigation