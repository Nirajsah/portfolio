import React from "react";
import Navbar from "../Home/Navbar";

const ContactPage = () => {
  const handleSubmit = () => {};
  const ContactForm = () => {
    <form onSubmit={handleSubmit}>
      <label>
        Full Name
        <input
          className="border-2 px-[10px] w-[300px] text-sm rounded"
          placeholder="Full Name"
          type="text"
        />
      </label>
      <input
        className="border-2 px-[10px] w-[300px] text-sm rounded"
        placeholder="Email"
        type="email"
      />
      <input
        className="border-2 px-[10px] w-[300px] text-sm rounded"
        placeholder="Subject"
        type="text"
      />
      <textarea
        className="border-2 rounded px-[10px] text-sm py-[8px]"
        placeholder="Message"
      ></textarea>
    </form>;
  };

  return (
    <div className="h-[800px] w-auto bg-white mx-[6rem] my-[3rem] rounded-[40px]">
      <Navbar />
      <div className="flex border-y-gray-300 border justify-between content-center py-[3.5rem]">
        <div className="pl-[4rem] font-bold text-4xl">Contact</div>
        <div className="text-sm pr-[4rem] self-start opacity-40 mt-[-2rem]">
          Get in Touch
        </div>
      </div>
      <div className="w-auto grid grid-cols-2 gap-10 h-[20rem] mx-[4rem] my-[4rem]">
        <div className="grid grid-rows-2 gap-1 bg-red-300">
          <div>Phone Number</div>
          <div>Mail</div>
        </div>
        <div className="grid grid-rows gap-5">
          <div>How Can I Help You ?</div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
