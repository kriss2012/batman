import React from 'react'
import { motion } from 'framer-motion'
import './Mission.css'

const Mission = () => {
  return (
    <section className="mission-section" id="mission">
      <div className="mission-container">
        <motion.div 
          className="mission-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="st-eyebrow" style={{ color: '#C9A44A' }}>The Vow</h2>
          <h3 className="mission-title">A PROMISE MADE IN ALLEYWAYS</h3>
          <p className="mission-text">
            On the night his parents, Thomas and Martha Wayne, were gunned down in Crime Alley, 
            young Bruce Wayne knelt in their blood and made a vow: to avenge their deaths by spending 
            the rest of his life warring on all criminals. He spent years traveling the globe, 
            mastering every form of combat and honing his mind into the ultimate detective.
          </p>
          <p className="mission-text">
            But skills were not enough. Criminals are a superstitious and cowardly lot. 
            He needed to become a symbol, something that would strike terror into their hearts. 
            A bat crashing through his study window provided the answer. He would become a bat. 
            He would become the darkness.
          </p>
        </motion.div>
        
        <motion.div 
          className="mission-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* using the one.jpg as a symbolic image */}
          <img src={`${import.meta.env.BASE_URL}images/one.jpg`} alt="Batman Symbol" className="mission-img" />
          <div className="mission-overlay"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission
