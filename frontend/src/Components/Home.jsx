import React, { useState, useRef, useEffect } from 'react'
import GIT from '../assets/GITHUB.svg?react'
import GMAIL from '../assets/GMAIL.svg?react'
import Phone from '../assets/Phone.svg?react'

const EMAIL = 'uzchang91@gmail.com'

const EmailModule = ({ anchorRef, onClose }) => {
  const [copied, setCopied] = useState(false)
  const moduleRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        moduleRef.current &&
        !moduleRef.current.contains(e.target) &&
        anchorRef.current &&
        !anchorRef.current.contains(e.target)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose, anchorRef])

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleMailto = () => {
    window.location.href = `mailto:${EMAIL}`
  }

  return (
    <div className="email-module" ref={moduleRef}>
      <p className="home-title"><span className='wrk'>// </span> 이메일</p>
      <p className="email-module-address">{EMAIL}</p>
      <div className="email-module-actions">
        <button className="email-action-btn" onClick={handleCopy}>
          {copied ? '✓ 복사됨' : '주소 복사'}
        </button>
        <button className="email-action-btn email-action-btn--primary" onClick={handleMailto}>
          메일 보내기
        </button>
      </div>
    </div>
  )
}

const Home = () => {
  const [showEmail, setShowEmail] = useState(false)
  const gmailBtnRef = useRef(null)

  return (
    <div className='home-content'>


      <div className='h-section-1'>
        <div>
          <span className='home-title'><span className='wrk'>// </span> 안녕하세요,</span>
          <p className='home-intro'>
            <span className='home-name'>권창은</span>
            입니다.
          </p>
        </div>
        <h1 className='home-moto'>
          Sojourn <span>- 다양한 기술 스택을 넘나들며 최적의 해답을 탐험하는 여정가 입니다.</span>
        </h1>

        <div className='h-body'>
          <span>해외에서의 경험을 바탕으로 2019년 귀국 후, 6년간 국내 환경에서 책임감 있게 전문성을 쌓아왔습니다.</span>
          <span>‘Simple is Best’라는 철학을 중심에 두고, 복잡함을 덜어낸 단순함 속에서 사용자에게 즐거움을 줄 수 있는 디자인과 기획을 지향합니다.</span>
        </div>
        <div className='btn-grid'>
          <a href="https://github.com/uzchang91" target='_blank'>
            <button className='btn'>
              <GIT className='btn-icon' />
              CrownDJester
            </button>
          </a>
          <div>
            <button
              ref={gmailBtnRef}
              className='btn'
              onClick={() => setShowEmail((prev) => !prev)}
            >
              <GMAIL className='btn-icon' />
              uzchang91
            </button>
            {showEmail && (
              <EmailModule
                anchorRef={gmailBtnRef}
                onClose={() => setShowEmail(false)}
              />
            )}
          </div>
        </div>
      </div>

      <div className='h-section-2'>
        <span className='home-title'><span className='wrk'>// </span> 나의 모토</span>
        <p className='home-moto'>Simplify, simplify <span>- From Walden by Henry David Thoreau</span></p>
      </div>

    </div>
  )
}

export default Home