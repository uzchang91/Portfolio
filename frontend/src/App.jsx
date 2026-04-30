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
    
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '')
      setActiveMenu(VALID_MENUS.includes(path) ? path : 'Home')
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const VALID_MENUS = [
    'Home',
    'Education',
    'SkillSets',
    'Projects',
  ]

  const getInitialMenu = () => {
    const path = window.location.pathname.replace('/', '')
    return VALID_MENUS.includes(path) ? path : 'Home'
  }

  const [activeMenu, setActiveMenu] = useState(getInitialMenu)

  const handleMenuChange = (menu) => {
    window.history.pushState(null, '', `/${menu === 'Home' ? '' : menu}`)
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