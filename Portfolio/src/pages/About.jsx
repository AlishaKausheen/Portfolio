import React from 'react'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hey, <span className='blue-gradient_text font-semibold drop-shadow'>Alisha </span>this side
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Full-stack developer,specialized in Frontent Development,
          trying to solve problems through codes...</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'></div>
      </div>
    </section>
  )
}

export default About
