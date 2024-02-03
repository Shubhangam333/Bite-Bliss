import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
