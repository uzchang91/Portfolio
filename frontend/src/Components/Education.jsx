import React from 'react'

const Education = () => {
  return (
    <>
      <h1 className='title'>Career Journey</h1>
      <div className='education'>

        <div className='edu-section-1'>
          <div className='project-item border'>
            <div className='badge-list'>
              <span className='badge fit edu'>학습</span>
              <span className='badge fit'>2025.11 ~ 2026.04</span>
            </div>
            <h3>교육생</h3>
            <span>㈔스마트인재개발원</span>
            <p>
              프론트엔드 개발자 부트캠프 수료 및 실무 프로젝트 수행,
              실제 서비스 모델을 기반으로 한 웹 서비스 프론트엔드 아키텍처 설계 및 구현.
            </p>
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
          </div>
        </div>

        <div className='edu-section-1'>
          <div className='project-item border'>
            <div className='badge-list'>
              <span className='badge fit edu'>학습</span>
              <span className='badge fit'>2010.08 ~ 2012.05(입대)</span>
              <span className='badge fit'>2017.01 ~ 2019.08(졸업)</span>
            </div>
            <h3>학생</h3>
            <span>Liberty University</span>
            <p>
              미국 버지니아주에 위치한 4년제 사립대학에서 그래픽디자인 전공으로 학사 졸업.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Education