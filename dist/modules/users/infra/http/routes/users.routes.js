"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UsersControllers_1 = __importDefault(require("@modules/users/infra/http/controllers/UsersControllers"));
var usersControllers = new UsersControllers_1.default();
var usersRouter = express_1.Router();
// SoC - Separator of concerns - Separação de responsabilidades
// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
usersRouter.post('/', usersControllers.create);
exports.default = usersRouter;
