import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home'
import Education from './Components/Education'
import SkillSets from './Components/SkillSets'
import Projects from './Components/Projects'
import Navigation from './Navigation'
import BackgroundGrid from './BackgroundGrid'
import RisingParticles from './RisingParticles'

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const VALID_MENUS = [
    'Home',
    'Education',
    'SkillSets',
    'Projects',
  ]

  const getInitialMenu = () => {
    const hash = window.location.hash.replace('/', '')
    const menu = hash.split('/')[0]
    return VALID_MENUS.includes(menu) ? menu : 'Home'
  }

  const [activeMenu, setActiveMenu] = useState(getInitialMenu)

  const handleMenuChange = (menu) => {
    window.location.hash = menu
    setActiveMenu(menu)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderContent = () => {
    const token = localStorage.getItem('token')
    const loggedIn = !!token

    switch (activeMenu) {
      case 'Home':
        return <Home onNavigate={handleMenuChange} />
      case 'Education':
        return <Education onNavigate={handleMenuChange} />
      case 'SkillSets':
        return <SkillSets />
      case 'Projects':
        return <Projects />
      default:
        return <Home />
    }
  }
  return (
    <>
      <div className="spotlight-overlay" />
      <RisingParticles />
      <BackgroundGrid />
      {renderContent()}
      <Navigation
        setActiveMenu={handleMenuChange}
        activeMenu={activeMenu}
      />
    </>
  )
}

export default App