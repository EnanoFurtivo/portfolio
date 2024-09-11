import { Carousel } from '@/components';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types';
import { Link } from 'react-router-dom';

interface Props {
  type: Project['type'];
  projects: Project[];
}

export const ProjectsSection: React.FC<Props> = ({ type, projects }) => {
  return (
    <section id={`${type}-projects`}>
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.slug} className="card">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel images={project.imageUrls} noButtons />
            </CardContent>
            <CardFooter>
              <Link to={`/projects/${project.slug}`}>
                <Button variant="outline">Conocer más</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
