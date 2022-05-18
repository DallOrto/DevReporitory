import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';


class ListCategoriesController {
    constructor(private listCategoriesUserCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUserCase.execute();

    return response.json(all);
    }

}


export { ListCategoriesController }