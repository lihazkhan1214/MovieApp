// models/Movie.ts
import mongoose, { Schema, Document, models } from "mongoose";
import { ChannelDocument, Channel } from "./Channel";

export interface MovieDocument extends Document {
  title: string;
  description: string;
  time: string;
  imgUrl?: string;
  channel: ChannelDocument["_id"];
  scrapedDate: Date;
  type: string;
  genre: string;
  cast: string;
  year: number;
  imdb: number;
  en: object;
}

const movieSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    time: { type: String },
    imgUrl: { type: String },
    channel: {
      type: String,
    },
    type: { type: String },
    scrapedDate: { type: Date, default: Date.now },
    genre: { type: String },
    cast: { type: String },
    year: { type: Number },
    imdb: { type: Number },
    en: { type: Object },
  },
  {
    timestamps: true,
  }
);

export const Movie =
  models.Movie || mongoose.model<MovieDocument>("Movie", movieSchema);
