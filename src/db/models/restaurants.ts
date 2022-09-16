import mongoose from 'mongoose';
import Dishes, { dish } from './dishes';

const restaurantsSchema = new mongoose.Schema(
    {
      resturantName: {
        type: String,
        required: true
      },
      chefName: {
        type: String,
        required: true
      },
      isPopular: {
        type: Boolean,
        required: true
      },
      isNewRestaurant: {
        type: Boolean,
        required: true
      },
      isOpen: {
        type: Boolean,
        required: true
      },
      pathToCover: {
        type: String,
        required: true
      },
      starsNumber: {
        type: Number,
        required: true
      },
      dishes: {
        type: Array,
        required: false
      },
    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

export interface restaurant{
  resturantName:string;
  chefName:string;
  isPopular:boolean;
  isNewRestaurant:boolean;
  isOpen:boolean;
  pathToCover:string;
  starsNumber:number;
  // dishes: dish[];
  
}