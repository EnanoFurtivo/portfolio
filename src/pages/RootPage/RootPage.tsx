import projects from '@/data/projects.json';
import { Project } from '@/types';
import React from 'react';
import { ProjectsSection } from './ProjectsSection';
import { Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, MoonOutlined, SunOutlined, WhatsAppOutlined } from '@ant-design/icons';
import urls from '@/data/urls.json';
import { selectTheme, toggleTheme } from '@/redux/local';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { TimerSection } from '@/pages/RootPage/TimerSection';

export const RootPage: React.FC = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const sections: Record<Project['type'], string> = {
    professional: 'Proyectos Profesionales',
    freelance: 'Proyectos Freelance',
    university: 'Proyectos Universitarios',
    personal: 'Proyectos Personales'
  };

  return (
    <div className="w-11/12">
      <section className="text-center mb-24 mt-32">
        <h1 className="text-5xl font-bold mb-4">Luciano Martin Godoy Romanutti</h1>
        <p className="text-2xl text-muted-foreground mb-8">Full Stack Web Developer & Tech Enthusiast</p>
        <div className="flex justify-center space-x-4">
          <Button icon={<GithubOutlined />} href={urls.github}></Button>
          <Button icon={<LinkedinOutlined />} href={urls.linkedin}></Button>
          <Button icon={<MailOutlined />} href={urls.mail}></Button>
          <Button icon={<WhatsAppOutlined />} href={urls.whatsapp}></Button>
          <Button icon={theme == 'dark' ? <MoonOutlined /> : <SunOutlined />} onClick={() => dispatch(toggleTheme())} />
        </div>
      </section>

      <section id="about" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-xl text-muted-foreground">
          Desarrollador Web Full Stack. Cuento con más de 3 años de experiencia en desarrollo web profesional y desarrollo de aplicaciones de escritorio como
          hobby, me especializo en crear aplicaciones robustas, escalables, fáciles de usar y mantener, que resuelvan problemas del mundo real. Mis principales
          tecnologías son Laravel y React, pero también tengo experiencia en diversas tecnologías como Python, C, C#, Java, MySQL, MongoDB, entre otras.
          Apasionado desde muy pequeño por la tecnología y siempre en constante aprendizaje para mejorar mis habilidades como desarrollador.
        </p>
      </section>

      <section id="timer" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Desarrolador hace</h2>
        <TimerSection />
      </section>

      {Object.keys(sections).map((type) => {
        const sectionProjects = projects.filter((project) => project.type === type) as Project[];
        return <ProjectsSection className="mb-24" sections={sections} type={type as Project['type']} projects={sectionProjects} />;
      })}
    </div>
  );
};
