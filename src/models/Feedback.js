import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, trim: true },
  phone: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
});

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', postSchema);

export default Feedback;