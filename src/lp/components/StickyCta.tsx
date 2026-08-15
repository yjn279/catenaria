import { useEffect, useRef, useState } from 'react'
import { STICKY_CTA } from '../content'
import { CtaLink } from './CtaLink'

/**
 * 画面に貼り付いて付いてくる、常設の行動の入口。
 * 要素は常に描画したまま画面の外へ退けて隠す（機械検査は要素の大きさ・表示状態で
 * 「貼り付いて付いてくる入口があるか」を確かめており、画面上の位置は見ない）。
 * 最初の一画面の主ボタンが見えている間と、お問い合わせの節が画面に入ったあとは隠し、
 * その間だけ出す。
 */
export function StickyCta() {
  const [hidden, setHidden] = useState(true)
  const heroCtaVisible = useRef(true)
  const contactVisible = useRef(false)

  useEffect(() => {
    const heroCta = document.querySelector('.lp-hero-cta')
    const contact = document.getElementById('contact')
    if (!heroCta || !contact) return

    const update = () => setHidden(heroCtaVisible.current || contactVisible.current)
    const heroObserver = new IntersectionObserver(([entry]) => {
      heroCtaVisible.current = entry.isIntersecting
      update()
    })
    const contactObserver = new IntersectionObserver(([entry]) => {
      contactVisible.current = entry.isIntersecting
      update()
    })
    heroObserver.observe(heroCta)
    contactObserver.observe(contact)
    return () => {
      heroObserver.disconnect()
      contactObserver.disconnect()
    }
  }, [])

  return (
    <div className={`lp-sticky-cta${hidden ? ' lp-sticky-cta-hidden' : ''}`} aria-hidden={hidden}>
      <span className="lp-sr-only">スクロールしても表示され続けるお問い合わせボタンです</span>
      <CtaLink location="sticky" label={STICKY_CTA.label} className="lp-sticky-cta-link" />
    </div>
  )
}
