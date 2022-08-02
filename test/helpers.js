"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const supertest_1 = require("supertest");
const app_1 = require("../src/app");
exports.request = (0, supertest_1.agent)((0, app_1.get)());
