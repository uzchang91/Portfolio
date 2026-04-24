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
      <p className="email-module-label">// 이메일</p>
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
      <section>
        <span>// 안녕하세요</span>
        <p className='home-intro'>기본에 충실하며 나아가는 개발자 <span>권창은</span>입니다.</p>
      </section>
      <section>
          <span>// 개발 지향점</span>
          <h1 className='home-name'>Sojourn</h1>
        <p>다양한 기술 스택을 넘나들며 최적의 해답을 탐험하는 여정.</p>
        <div className='btn-grid' style={{ position: 'relative' }}>
          <a href="https://github.com/uzchang91" target='_blank'>
            <button className='btn'>
              <GIT className='btn-icon' />
              CrownDJester
            </button>
          </a>
          <div style={{ position: 'relative' }}>
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
      </section>
      <section>
        <span>// 나의 모토</span>
        <p className='home-moto'>Simplify, simplify <span>From Walden by Henry David Thoreau</span></p>
      </section>
    </div>
  )
}

export default Home