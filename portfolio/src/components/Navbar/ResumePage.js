import React from 'react'
import logo from '../../assets/gray-react.png'
const ResumeComponent = ({ title, data }) => {
  return (
    <div className="flex flex-col">
      <div className="w-min">
        <div className="before-content text-lg lg:text-2xl font-bold">
          {title}
        </div>
      </div>
      <div className="mt-12 relative border-left flex w-full max-w-[600px] flex-col gap-10">
        {data.map((item, index) => (
          <div
            className={`relative ${
              index !== data.length - 1 ? 'border-bottom' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <h5 className="border-[2px] bg-white z-10 w-fit rounded-full text-xs px-[1rem] py-[2px] text-center border-[#007ced]">
                {item.year}
              </h5>
              <span className="text-gray-400 text-xs">{item.university}</span>
            </div>
            <div className="flex pl-[40px] pt-[0px] pr-[20px] pb-[5px] mt-3 flex-col gap-2">
              <span className="font-semibold text-lg">{item.title}</span>
              <span className="text-xs md:text-sm text-wrap w-[95%]">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const educationData = {
  title: 'Education',
  data: [
    {
      year: '2024',
      university: 'Amity University',
      title: 'Computer Science and Engineering',
      description:
        'Empower yourself with the knowledge and skills to shape the digital landscape as you embark on a transformative journey with our Bachelor of Technology (B.Tech) program at [University Name].',
    },
    {
      year: '2020',
      university: 'Bhagwat Vidyapeeth School',
      title: 'Board',
      description:
        'Empower yourself with the knowledge and skills to shape the digital landscape as you embark on a transformative journey with our Bachelor of Technology (B.Tech) program at [University Name].',
    },
  ],
}

const experienceData = {
  title: 'Experience',
  data: [
    {
      year: '2023',
      university: 'Frolic HealthTech',
      title: 'Software Engineer Intern',
      description:
        'Empower yourself with the knowledge and skills to shape the digital landscape as you embark on a transformative journey with our Bachelor of Technology (B.Tech) program at [University Name].',
    },
  ],
}
const ResumePage = () => {
  return (
    <div className="h-full w-auto bg-white rounded-[40px]">
      <div className="flex flex-col items-start lg:flex-row border-y-gray-300 w-full md:justify-between border-b lg:border-t content-center px-[40px] py-[30px] lg:py-[3.5rem]">
        <div className="lg:pl-[4rem] font-bold text-4xl">Resume</div>
        <div className="text-sm lg:pr-[4rem] lg:self-start opacity-40 lg:mt-[-2rem]">
          6 Months of Experience
        </div>
      </div>
      <div className="p-[20px] my-5 flex md:flex-row gap-16 flex-col w-full md:p-[2rem] h-auto lg:p-[3rem]">
        <ResumeComponent
          data={educationData.data}
          title={educationData.title}
        />
        <ResumeComponent
          data={experienceData.data}
          title={experienceData.title}
        />
      </div>

      <div className="p-[20px] md:p-[2rem] lg:p-[3rem]">
        <div className="w-min">
          <div className="before-content text-lg lg:text-2xl font-bold">
            Certificate
          </div>
        </div>
        <div className="flex py-8 gap-6 md:flex-row flex-col">
          <div className="rounded-xl w-full flex border hover-up transition-all drop-shadow-md">
            <div className="bg-gray-300 text-6xl px-12 text-gray-600 font-extrabold rounded-l-xl flex items-center justify-center border-red">
              <img className="w-[60px] z-0" src={logo} />
            </div>
            <div className="flex py-[20px] gap-1 px-[25px] flex-col">
              <div className="w-full flex items-center font-bold self-start border-red">
                React Training Course
              </div>
              <span className="text-sm font-bold">
                <a href="https://trainings.internshala.com/s/v/1941508/f6f74eec">
                  InternShala
                </a>
              </span>
              <span className="text-sm">Aug 25 2022</span>
            </div>
          </div>

          <div className="rounded-xl w-full flex border hover-up transition-all drop-shadow-md">
            <div className="bg-gray-300 text-6xl px-12 text-gray-600 font-extrabold rounded-l-xl flex items-center justify-center border-red">
              C
            </div>
            <div className="flex py-[20px] gap-1 px-[25px] flex-col">
              <div className="w-full flex items-center font-bold self-start border-red">
                Computational Thinking with Beginning C Programming
                Specilization
              </div>
              <span className="text-sm font-bold">
                <a href="https://coursera.org/share/dcf83623882fe5e6b58a2d9c1c926891">
                  Coursera
                </a>
              </span>
              <span className="text-sm">Jan 6 2021</span>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <div className="before-content text-lg lg:text-2xl font-bold">
            Technical Skills
          </div>
        </div>
        <div className="w-full mt-5 gap-6 items-center grid lg:grid-cols-2">
          <div className="flex w-full flex-col">
            <div className="flex justify-between">
              <span className="font-bold text-lg">React</span>
              <span className="font-bold text-xs">70%</span>
            </div>
            <span className="w-full rounded-3xl flex items-center py-1.5 px-0.5 relative border-2">
              <span className="bg-[#007ced] absolute h-2 rounded-3xl w-[70%]"></span>
            </span>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex justify-between">
              <span className="font-bold text-lg">JavaScript</span>
              <span className="font-bold text-xs">80%</span>
            </div>
            <span className="w-full rounded-3xl flex items-center py-1.5 px-0.5 relative border-2">
              <span className="bg-[#007ced] absolute h-2 rounded-3xl w-[80%]"></span>
            </span>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex justify-between">
              <span className="font-bold text-lg">HTML/CSS</span>
              <span className="font-bold text-xs">95%</span>
            </div>
            <span className="w-full rounded-3xl flex items-center py-1.5 px-0.5 relative border-2">
              <span className="bg-[#007ced] absolute h-2 rounded-3xl w-[95%]"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
