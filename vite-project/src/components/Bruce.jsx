import React from 'react'
import { motion } from 'framer-motion'
import './Bruce.css'

const Bruce = () => {
  return (
    <section className="bruce-section" id="bruce">
      <div className="bruce-container">
        <motion.div 
          className="bruce-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="st-eyebrow right-eyebrow" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}>
            Bruce Wayne
          </span>
          <h2 className="st-title bruce-title" style={{ fontFamily: "'Bebas Neue', 'Cinzel Decorative', cursive", letterSpacing: '0.05em' }}>
            The Man<br />Behind the Mask
          </h2>
          <p className="st-text bruce-text" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: 'italic' }}>
            Billionaire by day. Guardian by night. Every scar a lesson,
            every shadow a weapon. He doesn't kill — but the darkness obeys him.
            Can one man's will hold a city together when evil never sleeps?
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Bruce
