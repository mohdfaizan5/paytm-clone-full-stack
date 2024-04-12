/**
 * @type {mongoose.SchemaDefinitionProperty}
 */

import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
      maxLength: 50,
    },
    lastName: {
      type: String,
      trim: true,
      maxLength: 50,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
