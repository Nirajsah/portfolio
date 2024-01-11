import React from 'react'

const ContactPage = () => {
  const ContactForm = () => {
    return (
      <form className="grid gap-3 grid-rows-3 mt-4">
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
    )
  }

  return (
    <div className="h-[650px] w-auto bg-white rounded-[40px]">
      <div className="flex border-y-gray-300 border-b border-t justify-between content-center py-[3.5rem]">
        <div className="pl-[4rem] font-bold text-4xl">Contact</div>
        <div className="text-sm pr-[4rem] self-start opacity-40 mt-[-2rem]">
          Get in Touch
        </div>
      </div>
      <div className="w-auto grid grid-cols-2 gap-10 h-[20rem] p-[4rem]">
        <div className="h-auto grid grid-rows-2 gap-1">
          <div>Phone Number</div>
          <div>Mail</div>
        </div>
        <div className="grid row-span-2 grid-rows gap-5">
          <div className="text-2xl font-semibold">
            <h2 className="">How Can I Help You ?</h2>
          </div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
