import { Project } from '@/types';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

interface Props {
  project: Project;
}

export const GithubButton: React.FC<Props> = ({ project }) => {
  return project.githubIsPrivate ? (
    <Button icon={<GithubOutlined />} danger disabled>
      Repositorio privado
    </Button>
  ) : (
    <Button icon={<GithubOutlined />} href={project.githubUrl}>
      Visitar Repositorio
    </Button>
  );
};
