import { ChefsDal } from "../dal/chefs.dal";
import { chef } from "../db/models/chefs";

export class ChefsService {

    public static async getChefs() {
        const dal = new ChefsDal();
        const res = await dal.findAll();
        // return {name: 'shilo', age: 28};
    };

    public async createChef(chef:chef) {
        const dal = new ChefsDal();
        const res = dal.createChef(chef);
        return res;
    };

    public async updateChef(chef:chef) {
        const dal = new ChefsDal();
        const res = await dal.updateChef(chef);
        return res;
    };
};



