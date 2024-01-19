import React from 'react'

const ContactPage = () => {
  const ContactForm = () => {
    return (
      <div className="">
        <form className="flex flex-col ">
          <label className="block" for="full_name">
            Full Name
            <input
              id="full_name"
              className="bg-gray-100 block rounded-md w-[70%] border-none mt-1"
              type="text"
              required
            />
          </label>
          <label className="block" for="email">
            Email
            <input
              id="email"
              className="block bg-gray-100 w-[70%] border-none rounded-md mt-1"
              type="email"
              required
            />
          </label>
          <label for="subject">
            Subject
            <input
              className="block bg-gray-100 w-[70%] border-none rounded-md mt-1"
              id="subject"
              type="text"
              required
            />
          </label>
          <label for="message">
            Message
            <textarea
              className="block h-[7rem] w-[70%] row-span-2 bg-gray-100 border-none rounded-md mt-1"
              id="message"
              required
            ></textarea>
          </label>
          <button className="mt-5 flex-none w-[10rem] duration-300 hover:scale-105 ease-out border-2 hover:text-cyan-50 hover:bg-[#007ced] border-[#007ced] drop-shadow-lg px-7 text-sm py-2 rounded-full">
            Send message
          </button>
        </form>
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

      <div className="w-auto grid grid-cols-2 gap-10 p-[4rem]">
        <div className="h-auto grid grid-rows-2 gap-1">
          <div>Phone Number</div>
          <div>Mail</div>
        </div>
        <div className="grid row-span-2 grid-rows gap-5">
          <div className="text-2xl font-semibold">
            <h2 className="">How Can I Help You ?</h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
