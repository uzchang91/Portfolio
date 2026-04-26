import React from 'react'
import Lotte from '../assets/Lotte.png'
import PumOn from '../assets/PumOn.png'
import FinSight from '../assets/FinSight.png'
import Link from '../assets/Link.svg?react'
import HTML5 from '../assets/HTML.svg?react'
import CSS from '../assets/CSS.svg?react'
import TWCSS from '../assets/TWCSS.svg?react'
import BS5 from '../assets/BOOTSTRAP.svg?react'
import JS from '../assets/JS.svg?react'
import REACT from '../assets/REACT.svg?react'
import NODE from '../assets/NODE.svg?react'
import MySQL from '../assets/MySQL.svg?react'
import SUPA from '../assets/SUPABASE.svg?react'
import FIREB from '../assets/FIREBASE.svg?react'
import RENDER from '../assets/RENDER.svg?react'
import VERCEL from '../assets/VERCEL.svg?react'

const Projects = () => {
  return (
    <>
    <h1 className='title'>Projects</h1>
      <div className='project'>

        <div className='project-item'>
          <img src={Lotte} alt="Lotte Static Page" className='project-img' />
          <div className='project-title'>
            <h1>롯데 웰푸드 <span>정적 웹 프로젝트</span></h1>
            <a href="https://2025-est-fe-9.github.io/TeamCrunky" target="_blank">
              <Link />
            </a>
          </div>
          <p>
            팀 프로젝트로 HTML 및 CSS을 활용하여 롯데 웰푸드 화면을 구현하는 페이지입니다.
          </p>
          <div className='badge-list'>
            <span className='badge'><HTML5 className='badge-icon' /> HTML</span>
            <span className='badge'><CSS className='badge-icon' /> CSS</span>
            <span className='badge'><TWCSS className='badge-icon' />TailwindCSS</span>
          </div>
        </div>

        <div className='project-item'>
          <img src={PumOn} alt="품ON" className='project-img' />
          <div className='project-title'>
            <h1>품:ON <span>유기동물 보호현황 플랫폼</span></h1>
            <a href="https://uzchang91.github.io/PumON" target="_blank">
              <Link />
            </a>
          </div>
          <p>
            팀 프로젝트로 행정안전부의 공공데이터 Open API와 JavaScript를 활용하여 동물보호센터 관리 플랫폼을 구현.
          </p>
          <div className='badge-list'>
            <span className='badge'><HTML5 className='badge-icon' /> HTML</span>
            <span className='badge'><CSS className='badge-icon' /> CSS</span>
            <span className='badge'><JS className='badge-icon' />JavaScript</span>
            <span className='badge'><FIREB className='badge-icon' /> Firebase</span>
          </div>
        </div>

        <div className='project-item'>
          <img src={FinSight} alt="FinSight" className='project-img' />
          <div className='project-title'>
            <h1>FinSight <span>모이투자 학습 플랫폼</span></h1>
            <a href="https://project3-finsight.vercel.app" target="_blank">
              <Link />
            </a>
          </div>
          <p>
            팀 프로젝트로 React.js, Node.js, MySQL을 활용하여 롯데 웰푸드 화면을 구현하는 작업입니다.
            현재 Vercel와 Render를 통해 호스팅 중입니다.
          </p>
          <div className='badge-list'>
            <span className='badge'><REACT className='badge-icon' /> React</span>
            <span className='badge'><JS className='badge-icon' /> JavaScript</span>
            <span className='badge'><NODE className='badge-icon' /> Node</span>
            <span className='badge'><MySQL className='badge-icon' /> MySQL</span>
            <span className='badge'><CSS className='badge-icon' /> CSS</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects