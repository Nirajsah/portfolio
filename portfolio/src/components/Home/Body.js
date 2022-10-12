import React from "react";
import Gojo from "./gojo.jpg";

const Body = () => {
  return (
    <div className="my-[5rem] mx-[6rem]  w-[auto] h-[500px]">
      <div className="flex my-[3rem]">
        <img
          className="border-[1rem] mt-[1rem] drop-shadow-2xl border-white rounded-full ml-[6rem] w-[330px] h-[330px]"
          src={Gojo}
          alt="Profile"
        />

        <div className="ml-[3.3rem] mt-[2rem] gap-3 flex flex-col content-start">
          <div className="opacity-30 mb-[-15px]">Full-Stack Web Developer</div>
          <div className="font-bold text-[50px]">Niraj Sah</div>
          <p className="opacity-50 pr-[40px] mr-[40px]">
            studing writing learning reading Fusce tempor magna mi, non egestas
            velit ultricies nec. Aenean convallis, risus non condimentum
            gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi.
            Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
          </p>
          <div className="flex mt-[1rem] gap-2">
            <button className=" px-7 py-2 hover:bg-[#007ced] hover:text-cyan-50 drop-shodow-lg rounded-full text-sm border-2 border-[#007ced]">
              Download CV
            </button>
            <button className="border-2 border-gray-300 drop-shadow-lg hover:bg-gray-300 px-7 text-sm py-2 rounded-full ">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
