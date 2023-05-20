export type TPost = {
  id: number;
  title: string;
  preview: string;
  image: string;
  rdyImage: HTMLImageElement;
};

type Timage = {
  src: string;
};

export type TPostById = {
  id: number;
  title: string;
  preview: string;
  image: string;
  description: string;
};
