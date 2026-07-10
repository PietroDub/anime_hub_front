type NamedItem = {
  mal_id: number;
  name: string;
};

type Trailer = {
  youtube_id?: string;
  url?: string;
  embed_url?: string;
};

type ImageJpg = {
  image_url: string;
};

type Images = {
  jpg: ImageJpg;
};

type AnimeData = {
  mal_id: number;
  title: string;
  type: string;
  source: string;
  episodes?: number;
  status: string;
  rating: string;
  score?: number;
  season?: string;
  year?: number;
  synopsis: string;
  background?: string;
  trailer?: Trailer;
  studios?: NamedItem[];
  genres?: NamedItem[];
  themes?: NamedItem[];
  images: Images;
};