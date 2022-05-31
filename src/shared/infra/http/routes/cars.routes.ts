import { CreateCarController } from "@modules/cars/UseCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/UseCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/UseCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/UseCases/uploadCarImages/UploadCarImagesController";
import uploadConfig from "config/upload";
import { Router } from "express";
import multer from "multer";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const carsRoutes = Router();


const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post("/specifications/:id", ensureAuthenticated, ensureAdmin, createCarSpecificationController.handle);

carsRoutes.post("/images/:id", ensureAuthenticated, ensureAdmin, upload.array("images") ,uploadCarImagesController.handle);

export { carsRoutes }