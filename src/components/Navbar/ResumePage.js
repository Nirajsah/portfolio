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
            key={index}
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
        "I'm on track to graduate in June 2024, fueled by my passion for technology and the endless possibilities it holds. Excited to embark on a journey where innovation and problem-solving converge, I look forward to the challenges and breakthroughs that lie ahead.",
    },
    {
      year: '2020',
      university: 'Bhagwat Vidyapeeth School',
      title: 'Board',
      description:
        'In 2020, I completed my 12th board exams, emphasizing resilience and a commitment to continual improvement in my academic journey.',
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
        "As a 2023 Software Engineering Intern, I spearheaded the development of a startup's web application, handling both frontend (React) and backend (Node.js, Express). Despite the startup's closure, this hands-on experience enriched my skills in full-stack development and provided insights into the realities of the tech industry.",
    },
  ],
}

const Skills = ({ title, percentage }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between">
        <span className="font-bold text-sm">{title}</span>
        <span className="font-bold text-xs">{percentage}%</span>
      </div>
      <span className="w-full rounded-3xl flex items-center py-1.5 px-0.5 relative border-2">
        <span
          style={{ width: `${percentage}%` }}
          className="bg-[#007ced] absolute h-2 rounded-3xl"
        ></span>
      </span>
    </div>
  )
}

const ResumePage = () => {
  return (
    <div className="h-full w-auto bg-white rounded-[40px]">
      <div className="flex flex-col items-start bg-gray-100 lg:flex-row border-y-gray-300 w-full md:justify-between border-b lg:border-t content-center px-[40px] py-[30px] lg:py-[3.5rem]">
        <div className="lg:pl-[4rem] font-bold text-4xl">Resume</div>
        <div className="text-sm lg:pr-[4rem] lg:self-start opacity-40 lg:mt-[-2rem]">
          1 Year of hands-on Experience
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
          <div className="rounded-xl w-full flex-col sm:flex-row flex border hover-up transition-all drop-shadow-md">
            <div className="bg-gray-300 text-6xl py-7 px-10 text-gray-600 font-extrabold rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl flex items-center justify-center border-red">
              <img className="w-[60px] z-0" src={logo} />
            </div>
            <div className="flex py-[20px] gap-1 px-[25px] flex-col">
              <div className="w-full flex items-center text-sm md:text-base font-bold self-start border-red">
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

          <div className="rounded-xl w-full flex-col sm:flex-row flex border hover-up transition-all drop-shadow-md">
            <div className="bg-gray-300 py-7 text-6xl px-12 text-gray-600 font-extrabold rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl flex items-center justify-center border-red">
              C
            </div>
            <div className="flex py-[20px] gap-1 px-[25px] flex-col">
              <div className="w-full flex items-center text-sm lg:text-base font-bold self-start border-red">
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
          <Skills title="ReactJs/NextJs" percentage="75" />
          <Skills title="JavaScript/TypeScript" percentage="80" />
          <Skills title="NodeJs/ExpressJs" percentage="70" />
          <Skills title="MongoDB" percentage="80" />
          <Skills title="HTML/CSS" percentage="95" />
          <Skills title="C/C++" percentage="70" />
          <Skills title="Python" percentage="70" />
          <Skills title="Java" percentage="60" />
          <Skills title="Git/Github" percentage="80" />
          <Skills title="MySQL/PostgreSQL" percentage="70" />
        </div>
      </div>
    </div>
  )
}

export default ResumePage
