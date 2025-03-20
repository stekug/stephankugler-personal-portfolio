export interface Project {
  id: string;
  title: string;
  subtitle: string | null;
  description: string;
  tech: string;
  github: string | null;
  image: string;
  type: string;
  video: string | null;
}

export type ProjectVideo = Project["video"];
