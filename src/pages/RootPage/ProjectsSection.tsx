// import { Carousel } from '@/components';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types';
import { Card, Carousel } from 'antd';
import Meta from 'antd/es/card/Meta';
// import { Link } from 'react-router-dom';

interface Props {
  sections: Record<Project['type'], string>;
  type: Project['type'];
  projects: Project[];
  className?: string;
}

export const ProjectsSection: React.FC<Props> = ({ className, type, projects, sections }) => {
  return (
    <section id={`${type}-projects`} className={className}>
      <h2 className="text-3xl font-bold mb-8">{sections[type]}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            title={project.title}
            hoverable
            // style={{ width: 240 }}

            cover={
              <Carousel autoplay className="rounded-lg">
                {project.imageUrls.map((url) => (
                  <div>
                    <img
                      // className="w-full max-w-full rounded-lg border-x border-y border-gray-300 dark:border-zinc-800 object-contain"
                      src={url}
                      alt="Project Preview"
                    />
                  </div>
                ))}
              </Carousel>
            }
          >
            <Meta
              avatar={
                project.avatarUrl ? (
                  <img
                    // className="w-full max-w-full rounded-lg border-x border-y border-gray-300 dark:border-zinc-800 object-contain"
                    src={project.avatarUrl}
                    width={35}
                    height={35}
                    alt="Project Preview"
                  />
                ) : undefined
              }
              // title={project.title}
              description={project.summary}
            />
          </Card>
          // <Card key={project.slug} className="card">
          //   <CardHeader>
          //     <CardTitle>{project.title}</CardTitle>
          //     <CardDescription>{project.description}</CardDescription>
          //   </CardHeader>
          //   <CardContent>
          //     <Carousel images={project.imageUrls} noButtons />
          //   </CardContent>
          //   <CardFooter>
          //     <Link to={`/projects/${project.slug}`}>
          //       <Button variant="outline">Conocer más</Button>
          //     </Link>
          //   </CardFooter>
          // </Card>
        ))}
      </div>
    </section>
  );
};
