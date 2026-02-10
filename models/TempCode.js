import mongoose from "mongoose";

const tempCodeSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        code: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, expires: 300 },
    },
    { versionKey: false },
);

export default mongoose.model("TempCode", tempCodeSchema, "temp_codes");