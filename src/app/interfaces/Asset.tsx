export interface Asset {
  id: string;
  assets: {
    video?: string;
    previewVideo?: string;
    seekVideo?: string;
    image: string;
    original?: string;
  };
  thumbnails: string[];
}
