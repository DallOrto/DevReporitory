import { CategoriesRepository } from "../../repositories/CategoriesRepository";



interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository){

    }
   
    execute({name, description}: IRequest ): void {
        const categoriesRepository = new CategoriesRepository();

        const categoryAlreadyExists = categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }
    
        categoriesRepository.create({name, description});
        
    }    
}


export { CreateCategoryUseCase }