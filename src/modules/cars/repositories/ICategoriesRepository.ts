import { Category } from "../model/Category";
import { ICreateSpecificationDTO } from "./ISpecificationRepository";

interface ICategoriesRepository {
    findByName(name: string):Category;
    list(): Category[];
    create({name, description}: ICreateSpecificationDTO): void;
}

export { ICategoriesRepository };