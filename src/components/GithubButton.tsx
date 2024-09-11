import { GithubIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Project } from '@/types';

interface Props {
  project: Project;
}

export const GithubButton: React.FC<Props> = ({ project }) => {
  return project.githubIsPrivate ? (
    <Button variant="destructive" disabled>
      <GithubIcon className="mr-2 h-4 w-4" />
      Repositorio privado
    </Button>
  ) : (
    <Button variant="outline" disabled={project.githubIsPrivate} asChild>
      <Link to={project.githubUrl}>
        <GithubIcon className="mr-2 h-4 w-4" />
        Visitar GitHub
      </Link>
    </Button>
  );
};
