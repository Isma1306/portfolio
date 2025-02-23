export interface Experience {
  position: string;
  company: string;
  start: string;
  end: string;
  location: string;
  projects: {
    title: string;
    tasks: string[];
  }[];

}