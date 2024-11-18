// models/Channel.ts
import mongoose, { Schema, Document, models } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
});

export const User =
  models.User || mongoose.model<UserDocument>("User", userSchema);
