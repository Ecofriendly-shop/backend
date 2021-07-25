"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var companiesRepository_1 = require("repositories/companiesRepository");
var CreateCompanyService_1 = require("services/CreateCompanyService");
var DeleteCompanyService_1 = require("services/DeleteCompanyService");
var UpdateCompanyService_1 = require("services/UpdateCompanyService");
var typeorm_1 = require("typeorm");
var companiesRoutes = express_1.Router();
// CREATE
companiesRoutes.post('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, description, img_url, lat, long, createCompany, company, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, description = _a.description, img_url = _a.img_url, lat = _a.lat, long = _a.long;
                createCompany = new CreateCompanyService_1["default"]();
                return [4 /*yield*/, createCompany.execute({
                        name: name_1,
                        description: description,
                        img_url: img_url,
                        lat: lat,
                        long: long
                    })];
            case 1:
                company = _b.sent();
                return [2 /*return*/, res.json(company)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// READ
companiesRoutes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var companiesRepository, companies, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                companiesRepository = typeorm_1.getCustomRepository(companiesRepository_1["default"]);
                return [4 /*yield*/, companiesRepository.find()];
            case 1:
                companies = _a.sent();
                return [2 /*return*/, res.json(companies)];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// UPDATE
companiesRoutes.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_2, description, lat, long, img_url, updateCompany, company, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name_2 = _a.name, description = _a.description, lat = _a.lat, long = _a.long, img_url = _a.img_url;
                updateCompany = new UpdateCompanyService_1["default"]();
                return [4 /*yield*/, updateCompany.execute({
                        description: description,
                        name: name_2,
                        lat: lat,
                        long: long,
                        id: id,
                        img_url: img_url
                    })];
            case 1:
                company = _b.sent();
                return [2 /*return*/, res.json(company)];
            case 2:
                err_3 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// DELETE
companiesRoutes["delete"]('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteCompany, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                deleteCompany = new DeleteCompanyService_1["default"]();
                return [4 /*yield*/, deleteCompany.execute({
                        id: id
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, res.json({ message: 'successfully deleted' })];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, res.status(400).json({ error: err_4.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports["default"] = companiesRoutes;
