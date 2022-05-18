import { Category } from "../model/Category";
import { ICreateSpecificationDTO } from "./ISpecificationRepository";

interface ICategoriesRepository {
    findByName(name: string):Category;
    list(): Category[];
    create(name: ICreateSpecificationDTO, description: ICreateSpecificationDTO): void;
}

export { ICategoriesRepository };