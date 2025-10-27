import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  hotelId: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  userId: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  review: {
    required: true,
    type: Number,
  },
});

export const reviewModel =
  mongoose.models.reviews || mongoose.model("reviews", reviewSchema);
