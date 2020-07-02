"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RegistersControllers_1 = __importDefault(require("@modules/registers/infra/http/controllers/RegistersControllers"));
var registersController = new RegistersControllers_1.default();
var registersRouter = express_1.Router();
// SoC - Separator of concerns - Separação de responsabilidades
// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
//registersRouter.use(ensureAuthenticated);
registersRouter.get('/:user_id', registersController.index);
registersRouter.post('/', registersController.create);
registersRouter.put('/:id', registersController.update);
exports.default = registersRouter;
