import { container, delay } from "tsyringe";

import "@shared/container/providers";

import { ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImagesRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    delay(() => CategoriesRepository)
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    delay(() => SpecificationsRepository)
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    delay(() => UsersRepository)
);

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    delay(() => CarsRepository)
);

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",
    delay(() => CarsImagesRepository)
);

container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    delay(() => RentalsRepository)
);

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    delay(() => UsersTokensRepository)
);

