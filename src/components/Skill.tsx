import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMocha,
  SiChai,
  SiEslint,
  SiStorybook,
  SiJest,
  SiCypress,
  SiFlask,
  SiMysql,
  SiRedis,
  SiGraphql,
} from "react-icons/si";
import { FaPython, FaSass, FaVuejs, FaNode, FaJava } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import "./skill.scss";

const Skill: React.FC = () => {
  return (
    <div id="skills">
      <div className="skills-container">
        <p>Skills!</p>
        <table>
          <tr>
            <td className="name">Language</td>
            <td>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>JavaScript</Tooltip>}
              >
                <span>
                  <SiJavascript style={{ color: "yellow" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>TypeScript</Tooltip>}
              >
                <span>
                  <SiTypescript style={{ color: "#037ffc" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Python</Tooltip>}
              >
                <span>
                  <FaPython style={{ color: "yellow" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Ruby</Tooltip>}
              >
                <span>
                  <SiRuby style={{ color: "red" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>HTML5</Tooltip>}
              >
                <span>
                  <SiHtml5 style={{ color: "#fc8003" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>CSS3</Tooltip>}
              >
                <span>
                  <SiCss3 style={{ color: "#0384fc" }} />
                </span>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td className="name">Front-End</td>
            <td>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>React</Tooltip>}
              >
                <span>
                  <SiReact style={{ color: "#03fcf8" }} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Vue.js</Tooltip>}
              >
                <span>
                  <FaVuejs style={{ color: "#03fc8c" }} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>jQuery</Tooltip>}
              >
                <span>
                  <SiJquery style={{ color: "#036ffc" }} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Sass</Tooltip>}
              >
                <span>
                  <FaSass style={{ color: "#fc0380" }} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Bootstrap</Tooltip>}
              >
                <span>
                  <SiBootstrap style={{ color: "#a503fc" }} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Tailwind CSS</Tooltip>}
              >
                <span>
                  <SiTailwindcss style={{ color: "#0398fc" }} />
                </span>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td className="name">Back-End</td>
            <td>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Express</Tooltip>}
              >
                <span>
                  <SiExpress style={{ color: "#03fcb5" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Node.js</Tooltip>}
              >
                <span>
                  <FaNode style={{ color: "#07fc03" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Django</Tooltip>}
              >
                <span>
                  <DiDjango style={{ color: "#daeeda" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Flask</Tooltip>}
              >
                <span>
                  <SiFlask style={{ color: "#0390fc" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Ruby on Rails</Tooltip>}
              >
                <span>
                  <SiRubyonrails style={{ color: "#fc1803" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Java</Tooltip>}
              >
                <span>
                  <FaJava style={{ color: "#116fbc" }} />
                </span>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td className="name">Database</td>
            <td>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>MySQL</Tooltip>}
              >
                <span>
                  <SiMysql style={{ color: "#03fcb5" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Node.js</Tooltip>}
              >
                <span>
                  <FaNode style={{ color: "#07fc03" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>PostgreSQL</Tooltip>}
              >
                <span>
                  <SiPostgresql style={{ color: "#0390fc" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>MongoDB</Tooltip>}
              >
                <span>
                  <SiMongodb style={{ color: "#03fc6b" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Redis</Tooltip>}
              >
                <span>
                  <SiRedis style={{ color: "#c02d22" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>GraphQL</Tooltip>}
              >
                <span>
                  <SiGraphql style={{ color: "#ba249a" }} />
                </span>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td id="ToProjects" className="name">
              Testing
            </td>
            <td>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>ESLint</Tooltip>}
              >
                <span>
                  <SiEslint style={{ color: "purple" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Mocha</Tooltip>}
              >
                <span>
                  <SiMocha style={{ color: "#855f2e" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Chai</Tooltip>}
              >
                <span>
                  <SiChai style={{ color: "#a17132" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Storybook</Tooltip>}
              >
                <span>
                  <SiStorybook style={{ color: "#cf2563" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Jest</Tooltip>}
              >
                <span>
                  <SiJest style={{ color: "#f0580c" }} />
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Cypress</Tooltip>}
              >
                <span>
                  <SiCypress style={{ color: "#76916d" }} />
                </span>
              </OverlayTrigger>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Skill;
