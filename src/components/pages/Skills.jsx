import React, { useEffect, useState } from "react";
import { devSkills } from "../../constants/skills";
import { Skill } from "./";

function Skills() {
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [react, setReact] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 95);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });

      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });

      setReact((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });

      return () => {
        clearInterval(timer);
      };
    }, 200);
  });

  const { htmlSkill, cssSkill, jsSkill, reactSkill } = devSkills;

  return (
    <>
      <Skill
        color={htmlSkill.color}
        icon={htmlSkill.icon}
        name={htmlSkill.name}
        value={html}
      />
      <Skill
        color={cssSkill.color}
        icon={cssSkill.icon}
        name={cssSkill.name}
        value={css}
      />
      <Skill
        color={jsSkill.color}
        icon={jsSkill.icon}
        name={jsSkill.name}
        value={javascript}
      />
      <Skill
        color={reactSkill.color}
        icon={reactSkill.icon}
        name={reactSkill.name}
        value={react}
      />
    </>
  );
}

export default Skills;
