import React from 'react';
import { SiJavascript, SiTypescript, SiRuby, SiHtml5, 
        SiCss3, SiReact, SiJquery, SiBootstrap, SiTailwindcss,
        SiExpress, SiRubyonrails, SiPostgresql, SiMongodb,
        SiMocha, SiChai, SiEslint, SiStorybook, SiJest, SiCypress } from "react-icons/si";
import { FaPython, FaSass, FaVuejs, FaNode } from "react-icons/fa";
import './skill.scss';


const Skill:React.FC = () => {
  return (
    <div>
        <p>Skills!</p>
        <table>
            <tr>
                <td className="name">Language</td>
                <td>
                    <SiJavascript />
                    <SiTypescript />
                    <FaPython />
                    <SiRuby />
                    <SiHtml5 />
                    <SiCss3 />
                </td>
            </tr>
            <tr>
                <td className="name">Front-End</td>
                <td>
                    <SiReact />
                    <FaVuejs />
                    <SiJquery />
                    <FaSass />
                    <SiBootstrap />
                    <SiTailwindcss />
                </td>
            </tr>
            <tr>
                <td className="name">Back-End</td>
                <td>
                    <SiExpress />
                    <FaNode />
                    <SiRubyonrails />
                    <SiPostgresql />
                    <SiMongodb />
                </td>
            </tr>
            <tr>
                <td className="name">Testing</td>
                <td>
                    <SiEslint />
                    <SiMocha />
                    <SiChai />
                    <SiStorybook />
                    <SiJest />
                    <SiCypress />
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Skill