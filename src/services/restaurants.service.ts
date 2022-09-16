import { RestaurantsDal } from "../dal/restaurants.dal";
import { restaurant } from "../db/models/restaurants";

export class RestaurantsService {

    public async getRestaurants() {
        const dal = new RestaurantsDal();
        const res = await dal.findAll();
        return res;
    };

    public async createRestaurant(restaurant:restaurant) {
        const dal = new RestaurantsDal();
        const res = dal.createRestaurant(restaurant);
        return res;
    };

    public async updateRestaurant(restaurant:restaurant) {
        const dal = new RestaurantsDal();
        const res = await dal.updateRestaurant(restaurant);
        return res;
    };
};



