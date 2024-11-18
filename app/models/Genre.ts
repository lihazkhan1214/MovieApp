// models/Channel.ts
import mongoose, { Schema, Document, models } from "mongoose";

export interface GenreDocument extends Document {
  name: string;
  type: string;
}

const channelSchema: Schema = new Schema({
  name: { type: String },
  type: { type: String },
});

export const Genre =
  models.Genre || mongoose.model<GenreDocument>("Genre", channelSchema);
