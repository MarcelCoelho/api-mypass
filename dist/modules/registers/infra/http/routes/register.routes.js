"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RegisterController_1 = __importDefault(require("@modules/registers/infra/http/controllers/RegisterController"));
var registerController = new RegisterController_1.default();
var registersRouter = express_1.Router();
//registersRouter.use(ensureAuthenticated);
registersRouter.get('/:id', registerController.index);
registersRouter.delete('/:id', registerController.delete);
exports.default = registersRouter;
