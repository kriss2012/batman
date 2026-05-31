import React from 'react'
import { motion } from 'framer-motion'
import './Villains.css'

const villains = [
  {
    name: 'The Clown Prince',
    role: 'Agent of Chaos',
    image: `${import.meta.env.BASE_URL}images/clown.png`,
    desc: 'Some men aren\'t looking for anything logical. Some men just want to watch the world burn.'
  },
  {
    name: 'The Mastermind',
    role: 'Intellectual Threat',
    image: `${import.meta.env.BASE_URL}images/mastermind.png`,
    desc: 'Riddle me this... what is always on its way here, but never arrives?'
  },
  {
    name: 'The Muscle',
    role: 'Physical Dominance',
    image: `${import.meta.env.BASE_URL}images/muscle.png`,
    desc: 'You merely adopted the dark. I was born in it, molded by it.'
  }
]

const Villains = () => {
  return (
    <section className="villains-section" id="rogues">
      <div className="villains-header">
        <h2 className="st-eyebrow" style={{ color: '#ff4455' }}>The Rogues Gallery</h2>
        <h3 className="villains-title">GOTHAM'S NIGHTMARES</h3>
      </div>

      <div className="villains-grid">
        {villains.map((villain, idx) => (
          <motion.div
            key={idx}
            className="villain-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="villain-img-wrapper">
              <img src={villain.image} alt={villain.name} className="villain-img" />
              <div className="villain-overlay"></div>
            </div>
            <div className="villain-info">
              <span className="villain-role">{villain.role}</span>
              <h4 className="villain-name">{villain.name}</h4>
              <p className="villain-desc">{villain.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Villains
// Made By Krishna Patil