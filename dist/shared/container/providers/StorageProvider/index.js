"use strict";

var _tsyringe = require("tsyringe");

var _LocalStorageProvider = require("./implementations/LocalStorageProvider");

var _S3StogareProvider = require("./implementations/S3StogareProvider");

const diskStorage = {
  local: _LocalStorageProvider.LocalStorageProvider,
  s3: _S3StogareProvider.S3StorageProvider
};

_tsyringe.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);