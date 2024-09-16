import projects from '@/data/projects.json';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Project } from '@/types';
import { GithubButton } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const ProjectPage: React.FC = () => {
  const slug = useParams<{ projectSlug: string }>().projectSlug;
  const project = projects.find((project) => project.slug === slug) as Project | undefined;

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.imageUrls.length > 0 ? project.imageUrls[0] : '/placeholder.svg?height=400&width=800'}
        alt={`${project.title} Screenshot`}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visión general</h2>
        <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <GithubButton project={project} />
          {project.siteUrl && (
            <Button icon={<LinkOutlined />} href={project.githubUrl}>
              Visitar Sitio
            </Button>
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Características clave</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tecnologías utilizadas</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Desafíos y soluciones</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Desafío</TableHead>
              <TableHead>Solución</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {project.challenges.map((challenge, index) => (
              <TableRow key={index}>
                <TableCell className="text-lg text-muted-foreground">{challenge.problem}</TableCell>
                <TableCell className="text-lg text-muted-foreground">{challenge.solution}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
};
