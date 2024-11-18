// models/Channel.ts
import mongoose, { Schema, Document, models } from "mongoose";

export interface ChannelDocument extends Document {
  name: string;
}

const channelSchema: Schema = new Schema({
  name: { type: String, unique: true, required: true },
});

export const Channel =
models.Channel || mongoose.model<ChannelDocument>("Channel", channelSchema);
// Channel.createIndexes({ name: 1 });
