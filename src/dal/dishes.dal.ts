import Dishes, { dish } from "../db/models/dishes";

export class DishesDal {

    public async createDish(dish: dish) {
      dish = new Dishes({
        dishName: dish.dishName,
        restaurantName: dish.restaurantName,
        dishContent: dish.dishContent,
        isSpicy: dish.isSpicy,
        isVegitarian: dish.isVegitarian,
        isVegan: dish.isVegan,
        pathToCover: dish.pathToCover,
        price: dish.price,
        dishTime: dish.dishTime,
      });
       
     

        // chef.save(function (err: any, results: any) {
        //   return results;
        // });

        const response = await Dishes.create(dish);
        return response;
    }

    public async updateDish(dish: dish) {
      const data = await Dishes.findOne({
        dishName: dish.dishName,
      }).updateOne({$set: { restaurantName: dish.restaurantName,
        dishContent: dish.dishContent,
        isSpicy: dish.isSpicy,
        isVegitarian: dish.isVegitarian,
        isVegan: dish.isVegan,
        pathToCover: dish.pathToCover,
        price: dish.price,},})
        return data
      }


    public findAll(query: any = null) {
        return Dishes.find(query);
      }
}