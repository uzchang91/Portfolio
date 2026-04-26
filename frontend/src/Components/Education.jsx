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

const Education = () => {
  return (
    <>
      <h1 className='title'>Career Journey</h1>
      <div className='education'>

        <div className='edu-section-1'>
          <div className='project-item border'>
            <div className='badge-list'>
              <span className='badge fit edu'>학습</span>
              <span className='badge fit'>2025.11 ~ 2026.04(수료)</span>
            </div>
            <h3>교육생</h3>
            <span>㈔스마트인재개발원</span>
            <p>
              프론트엔드 개발자 부트캠프 수료 및 실무 프로젝트 수행,
              실제 서비스 모델을 기반으로 한 웹 서비스 프론트엔드 아키텍처 설계 및 구현.
            </p>
            <div className='badge-list'>
              <span className='badge'><HTML5 className='badge-icon' /> HTML</span>
              <span className='badge'><CSS className='badge-icon' /> CSS</span>
              <span className='badge'><JS className='badge-icon' /> JavaScript</span>
              <span className='badge'><FIREB className='badge-icon' /> Firebase</span>
              <span className='badge'><REACT className='badge-icon' /> React</span>
              <span className='badge'><NODE className='badge-icon' /> Node</span>
              <span className='badge'><MySQL className='badge-icon' /> MySQL</span>
              <span className='badge'><SUPA className='badge-icon' /> Supabase</span>
            </div>
          </div>
        </div>

        <div className='edu-section-2'>
          <div className='project-item border'>
            <div className='badge-list'>
              <span className='badge fit wrk'>실무</span>
              <span className='badge fit'>2021.10 ~ 2024.04</span>
            </div>
            <h3>UIUX 디자이너</h3>
            <span>㈜아이엠알</span>
            <p>
              IoT 플랫폼 웹 서비스 UX/UX 디자인 및 자산 관리,
              Figma 및 Adobe Creative Cloud(Illustrator, Photoshop)를 활용한
              IoT 웹 서비스 인터페이스 설계 및 디자인 시스템 구축.
            </p>
            <div className='badge-list'>
              <span className='badge'><Figma className='badge-icon' /> Figma</span>
              <span className='badge'><IL className='badge-icon' /> Illustrator</span>
            </div>
          </div>
        </div>

        <div className='edu-section-1'>
          <div className='project-item border'>
            <div className='badge-list'>
              <span className='badge fit edu'>학습</span>
              <span className='badge fit'>2010.08 ~ 2012.05(군입대)</span>
              <span className='badge fit'>2017.01 ~ 2019.08(졸업)</span>
            </div>
            <h3>학생</h3>
            <span>Liberty University</span>
            <p>
              미국 버지니아주에 위치한 4년제 사립대학에서 그래픽디자인 전공으로 학사 졸업.
            </p>
            <div className='badge-list'>
              <span className='badge'><HTML5 className='badge-icon' /> HTML</span>
              <span className='badge'><CSS className='badge-icon' /> CSS</span>
              <span className='badge'><IL className='badge-icon' /> Illustrator</span>
              <span className='badge'><PS className='badge-icon' /> Photoshop</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Education