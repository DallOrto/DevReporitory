import { Category } from "../model/Category";

interface ICategoriesRepository {
    findByName(name: string):Category;
    list(): Category[];
    creat(name: string, description: string): void;
}

export { ICategoriesRepository };