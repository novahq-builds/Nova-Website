'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ServicesSection.module.css'

const services = [
  {
    number: '01',
    title: 'Web & Mobile Design and Development',
    description: 'We design and develop web and mobile experiences that look stunning and work flawlessly.',
  },
  {
    number: '02',
    title: 'Brand Identity & Strategy',
    description: 'We craft identities that communicate who you are and why it matters — across every touchpoint.',
  },
  {
    number: '03',
    title: 'Product Design & UX',
    description: 'From wireframes to final UI, we design products that are intuitive, beautiful, and built to convert.',
  },
  {
    number: '04',
    title: 'SEO & Digital Marketing',
    description: 'We grow your visibility and drive real results through data-driven strategies that work.',
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return

      const wrapper = wrapperRef.current
      const { top, height } = wrapper.getBoundingClientRect()

      // How far into the sticky scroll we are (0 to 1)
      const scrolled = -top
      const total = height - window.innerHeight

      if (scrolled <= 0 || total <= 0) {
        setActiveIndex(0)
        return
      }

      const progress = Math.min(scrolled / total, 1)
      const index = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      )

      setActiveIndex(index)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // Tall wrapper gives scroll room while section stays sticky
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.sticky}>

        {/* Top Header */}
        <div className={styles.header}>
          <div className={styles.labelRow}>
            <span className={styles.square}></span>
            <span className={styles.label}>Our Services</span>
          </div>
          <p className={styles.tagline}>
            We don't just build websites. We build brands that compete,
            <br /> products that scale, and experiences that people remember.
          </p>
          <a href="#contact" className={styles.contactBtn}>
            <span className={styles.corner} data-pos="tl" />
            <span className={styles.corner} data-pos="tr" />
            Contact Us
            <span className={styles.corner} data-pos="bl" />
            <span className={styles.corner} data-pos="br" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === activeIndex ? styles.active : ''}`}
            >
              <span className={styles.number}>{service.number}</span>

              <AnimatePresence>
                {i === activeIndex && (
                  <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <h3 className={styles.title}>{service.title}</h3>
                    <p className={styles.description}>{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}