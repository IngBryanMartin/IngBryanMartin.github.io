import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import fotoPerfil from '../../../assets/images/foto_perfil.png'
import './index.scss'

  const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className='logo-container' ref={bgRef}>
      <div class="box">
      <b></b>
      <img className='solid-logo' ref={solidLogoRef} src={fotoPerfil} alt='Profile dev' />
      <div class="content">
            <h2>Bryan Martin Quispe Lavalle<br /><span>Systems and Informatics Engineering</span></h2>
      </div>
      </div>
    </div>
  )
}

export default Logo