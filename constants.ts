
import { NavLink, Experience, GalleryColumn, BookPage } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#dance', label: 'Dance' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#my-book', label: 'My Book' },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    date: 'Mar 2024 - Present',
    title: 'Political Consultant',
    company: 'infiniti Solutions',
    description: 'Building on my political communication experience through digital strategy, content writing, and campaign research to engage with public discourse.',
  },
  {
    date: 'June 2023 - Feb 2024',
    title: 'Content & Strategy Team',
    company: 'Offices of DK Shivakumar & DK Suresh',
    description: 'Crafted messaging and managed social media during a crucial election year, gaining deep grounding in political writing and grassroots communication.',
  },
  {
    date: 'Nov 2023 - Feb 2024',
    title: 'Artist Curator & Event Manager',
    company: 'Kalanation Foundation & Laughing Waters',
    description: 'Managed diverse projects including Bengaluru Habba, Vidyasagar\'s Greatest Hits Live, and the RBI Cultural Series.',
  },
];

export const GALLERY_DATA: GalleryColumn[] = [
  [
    "components/assets/images/Dance/Vidi 500x700 1.png",
    "components/assets/images/Dance/vidi 500x350.png",
  ],
  [
    "components/assets/images/Dance/Vidi 500x300 2.png",
    "components/assets/images/Dance/Vidi 500x750.png",
  ],
  [
    "components/assets/images/Dance/Vidi 500x700 2.png",
    "components/assets/images/Dance/Vidi 500x400.png",
  ],
  [
    "components/assets/images/Dance/vidi 500x450.png",
    "components/assets/images/Dance/Vidi 500x300 2.png",
  ],
];

export const BOOK_PAGES: BookPage[] = [
  {
    id: 'p0',
    isHardcover: true,
    front: 'https://storage.googleapis.com/gemini-prod/images/4183a51f-6192-4963-873b-e9919b5d2d09',
    back: 'https://storage.googleapis.com/gemini-prod/images/9932a39a-7c01-4643-954f-40e51594833c',
  },
  {
    id: 'p1',
    front: 'https://storage.googleapis.com/gemini-prod/images/9d31a5f6-c67c-471e-84b2-6019a164b383',
    back: 'https://storage.googleapis.com/gemini-prod/images/d3733072-032a-4467-a8f6-1748386a3472',
  },
  {
    id: 'p2',
    front: 'https://storage.googleapis.com/gemini-prod/images/5f021708-4194-4c4f-9e7f-4a3951f337f9',
    back: 'https://storage.googleapis.com/gemini-prod/images/239a5843-c00a-48e0-a43b-63459c25e834',
  },
  {
    id: 'p3',
    front: 'https://storage.googleapis.com/gemini-prod/images/7e040685-619c-4384-9549-432d56a2f3f1',
    back: 'https://storage.googleapis.com/gemini-prod/images/40901e9a-745a-4632-97e3-1b91873155d8',
  },
  {
    id: 'p4',
    front: 'https://storage.googleapis.com/gemini-prod/images/e9f3b177-3849-43df-8176-857e07a3c757',
    back: 'https://storage.googleapis.com/gemini-prod/images/157d1f1c-e58f-4315-8408-5420377e8a34',
  },
  {
    id: 'p5',
    isHardcover: true,
    front: 'https://storage.googleapis.com/gemini-prod/images/9d01d4a3-7640-4543-9580-999318995a94',
    back: 'https://placehold.co/800x1100/ffffff/3D352E?text=The+End',
  },
];
