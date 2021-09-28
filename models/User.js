import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "./img/default-profile.jpg",
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (submittedPassword) {
  return await bcrypt.compare(submittedPassword, this.password)
}

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

const User = mongoose.model("User", userSchema)

export default User
