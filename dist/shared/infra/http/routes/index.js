"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sessions_routes_1 = __importDefault(require("@modules/users/infra/http/routes/sessions.routes"));
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var register_routes_1 = __importDefault(require("@modules/registers/infra/http/routes/register.routes"));
var registers_routes_1 = __importDefault(require("@modules/registers/infra/http/routes/registers.routes"));
var routes = express_1.Router();
// quando utiliza o 'use' para setar direção, quando for criar os endpoint(get, post, put...)
// nao precisar passar o endereço 'appointments'
// ex: appointmentsRouter.post('/')
routes.use('/sessions', sessions_routes_1.default);
routes.use('/users', users_routes_1.default);
routes.use('/register', register_routes_1.default);
routes.use('/registers', registers_routes_1.default);
exports.default = routes;
