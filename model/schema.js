import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"]
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

const Task=mongoose.model('Task',taskSchema);

export default Task;