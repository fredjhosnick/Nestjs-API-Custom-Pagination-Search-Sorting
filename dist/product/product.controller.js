"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async frontend() {
        return this.productService.find({}).exec();
    }
    async backend(req) {
        let options = {};
        if (req.query.s) {
            options = {
                $or: [
                    { title: new RegExp(req.query.s.toString(), 'i') },
                    { description: new RegExp(req.query.s.toString(), 'i') },
                ]
            };
        }
        const query = this.productService.find(options);
        if (req.query.sort && typeof req.query.sort === 'string') {
            query.sort({ price: req.query.sort.toLowerCase() === 'asc' ? 1 : -1 });
        }
        const page = parseInt(req.query.page) || 1;
        const limit = 9;
        const total = await this.productService.count(options);
        const data = await query.skip((page - 1) * limit).limit(limit).exec();
        return {
            data,
            total,
            page,
            last_page: Math.ceil(total / limit)
        };
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)('frontend'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "frontend", null);
__decorate([
    (0, common_1.Get)('Backend'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "backend", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('api/products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map