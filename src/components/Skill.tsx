import React from 'react';
import { SiJavascript, SiTypescript, SiRuby, SiHtml5, 
        SiCss3, SiReact, SiJquery, SiBootstrap, SiTailwindcss,
        SiExpress, SiRubyonrails, SiPostgresql, SiMongodb,
        SiMocha, SiChai, SiEslint, SiStorybook, SiJest, SiCypress } from "react-icons/si";
import { FaPython, FaSass, FaVuejs, FaNode } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import './skill.scss';


const Skill:React.FC = () => {
  return (
    <div className="skills">
        <div className='space'></div>
        <div id="skills" className='skills-container'>
        <p>Skills!</p>
        <table>
            <tr>
                <td className="name">Language</td>
                <td>
                    <SiJavascript style={{color:"yellow"}}/>
                    <SiTypescript style={{color:"#037ffc"}}/>
                    <FaPython style={{color:"yellow"}}/>
                    <SiRuby style={{color:"red"}}/>
                    <SiHtml5 style={{color:"#fc8003"}}/>
                    <SiCss3 style={{color:"#0384fc"}}/>
                </td>
            </tr>
            <tr>
                <td className="name">Front-End</td>
                <td>
                    <SiReact style={{color:"#03fcf8"}}/>
                    <FaVuejs style={{color:"#03fc8c"}}/>
                    <SiJquery style={{color:"#036ffc"}}/>
                    <FaSass style={{color:"#fc0380"}}/>
                    <SiBootstrap style={{color:"#a503fc"}}/>
                    <SiTailwindcss style={{color:"#0398fc"}}/>
                </td>
            </tr>
            <tr>
                <td className="name">Back-End</td>
                <td>
                    <SiExpress style={{color:"#03fcb5"}}/>
                    <FaNode style={{color:"#07fc03"}}/>
                    <DiDjango style={{color:"#daeeda"}} />
                    <SiRubyonrails style={{color:"#fc1803"}}/>
                    <SiPostgresql style={{color:"#0390fc"}}/>
                    <SiMongodb style={{color:"#03fc6b"}}/>
                </td>
            </tr>
            <tr>
                <td className="name">Testing</td>
                <td>
                    <SiEslint style={{color: "purple"}}/>
                    <SiMocha style={{color: "#855f2e"}}/>
                    <SiChai style={{color: "#a17132"}}/>
                    <SiStorybook style={{color: "#cf2563"}}/>
                    <SiJest style={{color: "#f0580c"}}/>
                    <SiCypress style={{color: "#76916d"}}/>
                </td>
            </tr>
        </table>
    </div>

    </div>
  )
}

export default Skill