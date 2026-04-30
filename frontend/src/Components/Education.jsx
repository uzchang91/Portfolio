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
import AF from '../assets/AfterEffects.svg?react'

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
              실제 서비스 모델을 분석하고 이를 웹 환경에 최적화된 아키텍처로 구현하는 프로젝트를 수행했습니다.
              단순한 기능 구현을 넘어, 사용자 경험을 고려한 안정적인 프론트엔드 구조를 설계하며 개발자로서의 실무 기틀을 다졌습니다.
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
            <h3>UI/UX 디자이너</h3>
            <span>㈜아이엠알</span>
            <p>
              IoT 플랫폼의 복잡한 데이터를 직관적인 UI/UX로 시각화하고, 원활한 협업을 위한 전사적 디자인 시스템을 구축했습니다.
              Figma와 Adobe Creative Cloud를 활용해 자산 관리 서비스의 인터페이스를 설계하며,
              사용자 중심의 명료한 웹 경험을 제공하는 데 주력했습니다.
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
              <span className='badge fit wrk'>실무</span>
              <span className='badge fit'>2019.12 ~ 2021.10</span>
            </div>
            <h3>게임 아트 디자인</h3>
            <span>One Second Studio</span>
            <p>
              스타트업 One Second Studio에서 모바일 게임 아트를 총괄하며,
              캐릭터 디자인부터 애니메이션, 이펙트, UI/UX까지 게임의 시각적 경험 전반을 설계했습니다.
              Spine과 Photoshop 등 다양한 도구를 유연하게 활용하여 기술적 제약 안에서 최상의 퍼포먼스를 내는 게임 환경을 구현했습니다.
            </p>
            <div className='badge-list'>
              <span className='badge'><PS className='badge-icon' /> PhotoShop</span>
              <span className='badge'><IL className='badge-icon' /> Illustrator</span>
              <span className='badge'><AF className='badge-icon' /> After Effects</span>
              <span className='badge'><Spine className='badge-icon' /> Spine</span>
            </div>
          </div>
        </div>

        <div className='edu-section-2'>
          <div className='project-item border'>
            <div className='badge-list'>
              <span className='badge fit edu'>학습</span>
              <span className='badge fit'>2010.08 ~ 2012.05(군입대)</span>
              <span className='badge fit'>2017.01 ~ 2019.08(졸업)</span>
            </div>
            <h3>대학생</h3>
            <span>Liberty University</span>
            <p>
              미국 버지니아주 소재 사립 대학교에서 그래픽 디자인을 전공하며 시각적 커뮤니케이션의 기초를 탄탄히 다졌습니다.
              글로벌한 환경에서 얻은 디자인 감각은 현재 기획과 디자인을 아우르는 소중한 밑거름이 되고 있습니다.
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