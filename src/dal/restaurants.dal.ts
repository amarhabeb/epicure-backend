import Restaurants, { restaurant } from "../db/models/restaurants";

export class RestaurantsDal {

    public createRestaurant(restaurant: restaurant) {
      restaurant = new Restaurants({
        resturantName: restaurant.resturantName,
          chefName: restaurant.chefName,
          isPopular:restaurant.isPopular,
          isNewRestaurant:restaurant.isNewRestaurant,
          isOpen:restaurant.isOpen,
          pathToCover:restaurant.pathToCover,
          starsNumber:restaurant.starsNumber,
          // dishes: restaurant.dishes,
      });
        

        // restaurant.save(function (err: any, results: any) {
        //   return results;
        // });
    }

    public async updateRestaurant(restaurant: restaurant) {
      await Restaurants.findOne({
        name: restaurant.resturantName,
      }).updateOne({$set: {chefName: restaurant.chefName,
        isPopular:restaurant.isPopular,
        isNew:restaurant.isNewRestaurant,
        isOpen:restaurant.isOpen,
        pathToCover:restaurant.pathToCover,
        starsNumber:restaurant.starsNumber,
        }});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }


    public findAll() {
        return Restaurants.find();
    }
}


