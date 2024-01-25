import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactPage = () => {
  const [state, handleSubmit] = useForm('xoqgjlrd')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const ContactForm = () => {
    const handleSubmission = async (event) => {
      event.preventDefault()
      setSubmitting(true)
      try {
        await handleSubmit(event) // Submit form with Formspree
        setSubmitted(true) // Set submitted state to true after successful submission
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        setSubmitting(false)
      }
    }

    return (
      <div className="w-full">
        {submitted ? (
          <div className="text-green-600">
            Thanks for your message! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmission} className="flex flex-col w-full">
            <label className="block" htmlFor="full_name">
              Full Name
              <input
                id="full_name"
                className="bg-gray-100 block rounded-md w-full border-none mt-1"
                type="text"
                name="full_name"
                placeholder="John Doe"
                required
              />
            </label>
            <label className="block" htmlFor="email">
              Email
              <input
                id="email"
                className="block bg-gray-100 w-full border-none rounded-md mt-1"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                required
              />
            </label>
            <label htmlFor="subject">
              Subject
              <input
                className="block bg-gray-100 w-full border-none rounded-md mt-1"
                id="subject"
                type="text"
                placeholder="Hello!"
                name="subject"
                required
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                className="block h-[7rem] w-full row-span-2 bg-gray-100 border-none rounded-md mt-1"
                id="message"
                placeholder="Hello, I would like to connect with you!"
                name="message"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 flex-none w-[10rem] duration-300 hover:scale-105 ease-out border-2 hover:text-cyan-50 hover:bg-[#007ced] border-[#007ced] drop-shadow-lg px-7 text-sm py-2 rounded-full"
            >
              {submitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    )
  }
  return (
    <div className="lg:h-auto h-screen overflow-auto w-auto bg-white rounded-b-[40px]">
      <div className="flex flex-col items-start bg-gray-100 lg:flex-row border-y-gray-300 w-full md:justify-between border-b lg:border-t content-center px-[40px] py-[30px] lg:py-[3.5rem]">
        <div className="lg:pl-[4rem] font-bold text-4xl">Contact</div>
        <div className="text-sm lg:pr-[4rem] lg:self-start opacity-40 lg:mt-[-2rem]">
          Get In Touch
        </div>
      </div>

      <div className="max-w-[640px] p-[1rem] lg:p-[4rem]">
        <div className="w-full">
          <div className="text-2xl mb-5 w-fit font-semibold">
            <h2 className="before-content text-nowrap">How Can I Help You ?</h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
