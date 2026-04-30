import React from 'react'
import HTML5 from '../assets/HTML.svg?react'
import CSS from '../assets/CSS.svg?react'
import TWCSS from '../assets/TWCSS.svg?react'
import BS5 from '../assets/BOOTSTRAP.svg?react'
import JS from '../assets/JS.svg?react'
import REACT from '../assets/REACT.svg?react'
import NODE from '../assets/NODE.svg?react'
import EXPRESS from '../assets/EXPRESS.svg?react'
import MySQL from '../assets/MySQL.svg?react'
import SUPA from '../assets/SUPABASE.svg?react'
import FIREB from '../assets/FIREBASE.svg?react'
import RENDER from '../assets/RENDER.svg?react'
import VERCEL from '../assets/VERCEL.svg?react'
import Figma from '../assets/FIGMA.svg?react'
import IL from '../assets/Adobe IL.svg?react'
import PS from '../assets/Adobe PS.svg?react'
import Spine from '../assets/Spine.svg?react'

const SkillSets = () => {
  return (
    <>
    <h1 className='title'>Skills & Stacks</h1>
      <div className='content-wrapper'>

        <div className='skill-content'>

          <h3 className='skill-title'>FrontEnd</h3>

          <div className='icon-wrapper'>

            <div className='icon-tiles'>
              <HTML5 className='e-icons' />
              <span>HTML5</span>
            </div>
            <div className='icon-tiles'>
              <CSS className='e-icons' />
              <span>CSS3</span>
            </div>
            <div className='icon-tiles'>
              <TWCSS className='e-icons' />
              <span>Tailwind</span>
            </div>
            <div className='icon-tiles'>
              <BS5 className='e-icons' />
              <span>Bootstrap</span>
            </div>
            <div className='icon-tiles'>
              <JS className='e-icons' />
              <span>JavaScript</span>
            </div>
            <div className='icon-tiles'>
              <REACT className='e-icons' />
              <span>React.js</span>
            </div>

          </div>

        </div>

        <div className='skill-content'>

          <h3 className='skill-title'>BackEnd</h3>

          <div className='icon-wrapper'>

            <div className='icon-tiles'>
              <NODE className='e-icons' />
              <span>Node.js</span>
            </div>
            <div className='icon-tiles'>
              <EXPRESS className='e-icons' />
              <span>Express.js</span>
            </div>

          </div>

        </div>

        <div className='skill-content'>

          <h3 className='skill-title'>DataBase</h3>

          <div className='icon-wrapper'>

            <div className='icon-tiles'>
              <MySQL className='e-icons' />
              <span>MySQL</span>
            </div>
            <div className='icon-tiles'>
              <SUPA className='e-icons' />
              <span>Supabase</span>
            </div>
            <div className='icon-tiles'>
              <FIREB className='e-icons' />
              <span>Firebase</span>
            </div>

          </div>

        </div>

        <div className='skill-content'>

          <h3 className='skill-title'>Host</h3>

          <div className='icon-wrapper'>

            <div className='icon-tiles'>
              <VERCEL className='e-icons' />
              <span>Vercel</span>
            </div>
            <div className='icon-tiles'>
              <RENDER className='e-icons' />
              <span>Render</span>
            </div>

          </div>

        </div>

        <div className='skill-content'>

          <h3 className='skill-title'>Tools</h3>

          <div className='icon-wrapper'>

            <div className='icon-tiles'>
              <Figma className='e-icons' />
              <span>Figma</span>
            </div>
            <div className='icon-tiles'>
              <IL className='e-icons' />
              <span>Illustrator</span>
            </div>
            <div className='icon-tiles'>
              <PS className='e-icons' />
              <span>Photoshop</span>
            </div>
            <div className='icon-tiles'>
              <Spine className='e-icons' />
              <span>Spine</span>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default SkillSets