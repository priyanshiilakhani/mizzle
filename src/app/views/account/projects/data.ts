export type ProjectType = {
  id: number;
  image: string;
  title: string;
  status: string;
  statusColor: string;
  category: string;
};

export const projectData: ProjectType[] = [
  {
    id: 1,
    image: 'assets/images/portfolio/showcase/02.jpg',
    title: 'Website Optimization for TechWave',
    status: 'Published',
    statusColor: 'primary',
    category: 'Web design',
  },
  {
    id: 2,
    image: 'assets/images/portfolio/showcase/04.jpg',
    title: 'Transforming Ideas into Reality',
    status: 'Published',
    statusColor: 'primary',
    category: 'Marketing',
  },
  {
    id: 3,
    image: 'assets/images/portfolio/showcase/03.jpg',
    title: 'The Art of Storytelling',
    status: 'Private',
    statusColor: 'danger',
    category: 'Graphics design',
  },
  {
    id: 4,
    image: 'assets/images/portfolio/showcase/05.jpg',
    title: 'UI/UX Enhancement for SnapMedia',
    status: 'Published',
    statusColor: 'primary',
    category: 'UI/UX design',
  },
];
