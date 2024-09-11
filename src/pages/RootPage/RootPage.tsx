import { Button } from '@/components/ui/button';
import projects from '@/projects.json';
import { Project } from '@/types';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import React from 'react';
import { ProjectsSection } from './ProjectsSection';

export const RootPage: React.FC = () => {
  const sections: Record<Project['type'], string> = {
    professional: 'Proyectos Profesionales',
    personal: 'Proyectos Personales',
    university: 'Proyectos Universitarios',
    freelance: 'Proyectos Freelance'
  };

  return (
    <div className="w-11/12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Luciano Martin Godoy Romanutti</h1>
        <p className="text-xl text-muted-foreground mb-8">Full Stack Developer & UI/UX Enthusiast</p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon">
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="outline" size="icon">
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="outline" size="icon">
            <MailIcon className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </div>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-muted-foreground">
          I'm a passionate Full Stack Developer with a keen eye for UI/UX design. With years of experience in web development, I specialize in creating robust
          and user-friendly applications that solve real-world problems.
        </p>
      </section>

      {Object.keys(sections).map((type) => {
        const sectionProjects = projects.filter((project) => project.type === type) as Project[];
        return <ProjectsSection type={type as Project['type']} projects={sectionProjects} />;
      })}
    </div>
  );
};
