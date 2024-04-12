/**
 * @type {mongoose.SchemaDefinitionProperty}
 */

import { Schema, model } from "mongoose";

const accountSchema = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    balance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Account = model("Account", accountSchema);

export default Account;
