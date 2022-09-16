import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect("mongodb+srv://root:root@root.4yb8xdm.mongodb.net/Epicure");
//   await mongoose.connect("mongodb+srv://amarhabib:3mAr1993$&@chefs.oc2ngwr.mongodb.net/epicure");
};

export { connectDb }

