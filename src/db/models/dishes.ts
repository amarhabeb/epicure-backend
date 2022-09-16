import mongoose from 'mongoose';

const dishesSchema = new mongoose.Schema(
    {
      dishName: {
        type: String,
        required: true
      },
      restaurantName: {
        type: String,
        required: true
      },
      dishContent: {
        type: String,
        required: true
      },
      isSpicy: {
        type: Boolean,
        required: true
      },
      isVegitarian: {
        type: Boolean,
        required: true
      },
      isVegan: {
        type: Boolean,
        required: true
      },
      pathToCover: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      dishTime: {
        type: String,
        required: true
      },
    },
    { timestamps: true }
  );
  
const Dishes = mongoose.model('Dishes', dishesSchema);
  
export default Dishes;

export interface dish{
    dishName:string;
    restaurantName: string;
    dishContent:string;
    isSpicy:boolean;
    isVegitarian:boolean;
    isVegan:boolean;
    pathToCover:string;
    price:number;
    dishTime: string;
}


    
 