import mongoose from "mongoose";

//only structure for location schema
const locationSchema = mongoose.Schema({
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
});

export default locationSchema;
