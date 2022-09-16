import mongoose from 'mongoose';

const chefsSchema = new mongoose.Schema(
    {
      chefName: {
        type: String,
        required: true
      },
      firstName: {
        type: String,
        required: true
      },
      about: {
        type: String,
        required: true
      },
      pathToChefPicture: {
        type: String,
        required: true
      },
    },
    { timestamps: true }
  );
  
const Chefs = mongoose.model('Chefs', chefsSchema);
  
export default Chefs;

export interface chef{
  chefName:string;
  firstName:string;
  about: string;
  pathToChefPicture: string;
}

