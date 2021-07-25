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
var productsRepository_1 = require("repositories/productsRepository");
var CreateProductService_1 = require("services/CreateProductService");
var DeleteProductService_1 = require("services/DeleteProductService");
var UpdateProductService_1 = require("services/UpdateProductService");
var typeorm_1 = require("typeorm");
var productsRoutes = express_1.Router();
// CREATE
productsRoutes.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, bar_code, have_gluten, description, have_lactose, img_url, is_ecologic, is_vegan, createProduct, product, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, bar_code = _a.bar_code, have_gluten = _a.have_gluten, description = _a.description, have_lactose = _a.have_lactose, img_url = _a.img_url, is_ecologic = _a.is_ecologic, is_vegan = _a.is_vegan;
                createProduct = new CreateProductService_1["default"]();
                return [4 /*yield*/, createProduct.execute({
                        bar_code: bar_code,
                        description: description,
                        have_gluten: have_gluten,
                        have_lactose: have_lactose,
                        img_url: img_url,
                        is_ecologic: is_ecologic,
                        is_vegan: is_vegan,
                        name: name_1
                    })];
            case 1:
                product = _b.sent();
                return [2 /*return*/, res.json(product)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// READ
productsRoutes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, q, is_vegan, is_ecologic, have_gluten, have_lactose, productsRepository, products, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.query, q = _a.q, is_vegan = _a.is_vegan, is_ecologic = _a.is_ecologic, have_gluten = _a.have_gluten, have_lactose = _a.have_lactose;
                productsRepository = typeorm_1.getCustomRepository(productsRepository_1["default"]);
                return [4 /*yield*/, productsRepository.findByProductNameAndFilters({
                        key_name: String(q),
                        filters: {
                            is_vegan: is_vegan === 'true' ? true : is_vegan === 'false' ? false : undefined,
                            is_ecologic: is_ecologic === 'true'
                                ? true
                                : is_ecologic === 'false'
                                    ? false
                                    : undefined,
                            have_gluten: have_gluten === 'true'
                                ? true
                                : have_gluten === 'false'
                                    ? false
                                    : undefined,
                            have_lactose: have_lactose === 'true'
                                ? true
                                : have_lactose === 'false'
                                    ? false
                                    : undefined
                        }
                    })];
            case 1:
                products = _b.sent();
                return [2 /*return*/, res.json(products)];
            case 2:
                err_2 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// UPDATE
productsRoutes.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_2, bar_code, have_gluten, description, have_lactose, img_url, is_ecologic, is_vegan, updateProductService, product, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name_2 = _a.name, bar_code = _a.bar_code, have_gluten = _a.have_gluten, description = _a.description, have_lactose = _a.have_lactose, img_url = _a.img_url, is_ecologic = _a.is_ecologic, is_vegan = _a.is_vegan;
                updateProductService = new UpdateProductService_1["default"]();
                return [4 /*yield*/, updateProductService.execute({
                        id: id,
                        bar_code: bar_code,
                        is_vegan: is_vegan,
                        is_ecologic: is_ecologic,
                        have_lactose: have_lactose,
                        name: name_2,
                        img_url: img_url,
                        description: description,
                        have_gluten: have_gluten
                    })];
            case 1:
                product = _b.sent();
                return [2 /*return*/, res.json(product)];
            case 2:
                err_3 = _b.sent();
                return [2 /*return*/, res.status(400).json({ error: err_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
// DELETE
productsRoutes["delete"]('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteProductService, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                deleteProductService = new DeleteProductService_1["default"]();
                return [4 /*yield*/, deleteProductService.execute({ id: id })];
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
exports["default"] = productsRoutes;
