import React from 'react'
import Container from './Container'
import SectionHead from './SectionHead'
import Flex from './Flex'
import SkillCard from './SkillCard'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { TbBrandFigma } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";
import { GiRapidshareArrow } from "react-icons/gi";
import { SiFirebase } from "react-icons/si";
import { SiVorondesign } from "react-icons/si";

const Experience = () => {
  return (
    <div className='mt-30 mb-30'>
      <Container>
        <SectionHead
        title="My Abilities"
        head="My Skills"
        className="mb-20"
        />
        <Flex className='justify-between'>
            <SkillCard
            head="Frontend Development"
            icon1={<FaHtml5 />}
            icon2={<FaCss3 />}
            icon3={<BsBootstrapFill />}
            icon4={<FaGithub />}
            icon5={<SiVorondesign />}
            icon6={<RiUserCommunityFill />}
            skill1="HTML"
            skill2="CSS"
            skill3="Bootstrap"
            skill4="GitHub"
            skill5="UI / UX"
            skill6="Interaction"
            />
            <SkillCard
            head="Major"
            icon1={<FaReact />}
            icon5={<TbBrandFigma />}
            skill5="Figma"
            skill1="React"
            icon4={<DiJavascript1 />}
            skill4="JavaScript"
            icon2={<RiTailwindCssFill />}
            skill2="Tailwind"
            icon3={<DiResponsive />}
            skill3="Responsive"
            icon6={<SiFirebase />}
            skill6="Firebase"
            />
        </Flex>
      </Container>
    </div>
  )
}

export default Experience
