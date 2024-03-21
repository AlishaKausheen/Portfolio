import React from 'react'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I worked on several projects throughout the year, but these are projects that are special to me.
          They are mostly open-sourced so feel free to check them out and leave a feedback for further improvement

        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-black rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center
               items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                className='w-1/2 h-1/2 object-contain'/>
              </div>
              </div>
            </div>
       ))}
      </div>
    </section>
  )
}

export default Projects
