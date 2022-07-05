"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var LocalStorageProvider_1 = require("./implementations/LocalStorageProvider");
var S3StogareProvider_1 = require("./implementations/S3StogareProvider");
var diskStorage = {
    local: LocalStorageProvider_1.LocalStorageProvider,
    s3: S3StogareProvider_1.S3StorageProvider
};
tsyringe_1.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);
