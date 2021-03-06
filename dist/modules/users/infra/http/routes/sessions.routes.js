"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SessionsController_1 = __importDefault(require("@modules/users/infra/http/controllers/SessionsController"));
var sessionsRouter = express_1.Router();
var sessionsController = new SessionsController_1.default();
// SoC - Separator of concerns - Separação de responsabilidades
// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
sessionsRouter.post('/', sessionsController.create);
exports.default = sessionsRouter;
