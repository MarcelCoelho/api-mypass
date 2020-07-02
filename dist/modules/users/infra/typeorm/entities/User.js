"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    url_photo: String,
    created_at: Date,
    updated_at: Date,
});
var User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
