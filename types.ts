
export interface NavLink {
  href: string;
  label: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export type GalleryColumn = string[];

export interface BookPage {
  id: string;
  front: string;
  back: string;
  isHardcover?: boolean;
}
