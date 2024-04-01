import { Movies } from "./movies";

export interface MovieDetails extends Movies {
  box_office: string;
  cinematographers: string[];
  poster: string;
  producers: string[];
  summary: string;
}
