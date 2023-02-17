import Chat from "../doc/Chat.gif";
import Jungler from "../doc/Jungler.gif";
import portfolio from "../doc/Portfolio.gif";
import scheduler from "../doc/Scheduler.gif";
import tinyApp from "../doc/TinyApp.gif";
import Course from "../doc/course.gif";
export const projectList = [{
  id: "CourseProject",
  description: "The Course project is a SPA designed for course learning from Udemy by using Express and Vue as framework,  deployed in AWS EC2 and S3. the data is persisted by runing Docker container of mysql in EC2",
  stacks: ["Vue", "Element-UI", "mitt", "Mysql", "docker", "EC2", "S3", "joi", "jwt"],
  image:  Course,
  url: "https://github.com/wesleyweitianqi/courseProject",
  deploy: "http://vuecourse.s3-website.us-east-2.amazonaws.com/#/login",
},

{
  id: "N-chat",
  description: "A realtime chatRoom application built with Express,React and MongoDB",
  stacks: ["React", "socket.io", "sass", "buffer"],
  image: Chat,
  url: "https://github.com/wesleyweitianqi/N-Chat",
  deploy:"https://n-chat-one.vercel.app/",
},
{
  id: "Portfolio",
  description: "My portfolio is built with typescript, react to introduce myself and showcase my stacks and projects",
  stacks: ["typescript", "React", "bootstrap", "emailjs"],
  image: portfolio,
  url:"https://github.com/wesleyweitianqi/portfolio",
  deploy: "https://wesleywei-portfolio.netlify.app/#home"
},
{
  id: "Scheduler",
    description: "Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built by utilizing React built-in and custom hooks to allow users to add, edit and delete appointments in real time.",
    stacks: ["React", "websocket", "storybook", "jest", "postgresql"],
    image: scheduler,
    url:"https://github.com/wesleyweitianqi/scheduler"
  },

  {
    id: "Jungler",
    description: "A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example.",
    stacks: ["Ruby on rails", "stripe", "postgresql", "bootstrap"],
    image: Jungler,
    url:"https://github.com/wesleyweitianqi/Jungle"
  },
  {
    id: "Tinyapp",
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs",
    stacks: ["express", "ejs", "bootstrap", "bcryptjs"],
    image: tinyApp,
    url:"https://github.com/wesleyweitianqi/tinyapp"
  }

]