import React, { useRef, useState } from 'react'

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleFocus = () => { };
  const handleBlur = () => { };

  const handleSubmit = (e) => { 
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <section className='relative flex lg:flow-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Eg. Alice'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
            onBlur={handleBlur}/>
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Eg. xyz@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
            onBlur={handleBlur}/>
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how can I help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
            onBlur={handleBlur}/>
          </label>
          <button
            type='submit'
            className='btn'
            disabled= {isLoading}
            onFocus={handleFocus}
          onBlur={handleBlur}>
            {isLoading ? 'Sending' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
