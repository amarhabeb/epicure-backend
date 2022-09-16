import Chefs, { chef } from "../db/models/chefs";

export class ChefsDal {

    public async createChef(chef: chef) {
        chef = new Chefs({
          chefName: chef.chefName,
          firstName: chef.firstName,
          about: chef.about,
          pathToChefPicture: chef.pathToChefPicture,
        });

        // chef.save(function (err: any, results: any) {
        //   return results;
        // });

        const response = await Chefs.create(chef);
        return response;
    }

    public async updateChef(chef:chef) {
      const data = await Chefs.findOne({
        name: chef.chefName,
      }).updateOne({$set: {firstName: chef.firstName,
        about: chef.about,
        pathToChefPicture: chef.pathToChefPicture,},})
        return data
      }


    public findAll(query: any = null) {
        return Chefs.find(query);
      }
}


