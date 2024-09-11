export interface Project {
  title: string;
  slug: string;
  type: 'professional' | 'personal' | 'university' | 'freelance';
  description: string;
  summary: string;
  imageUrls: string[];
  features: string[];
  technologies: string[];
  challenges: {
    problem: string;
    solution: string;
  }[];
  githubUrl: string;
  githubIsPrivate: boolean;
  siteUrl: string;
}
