import { Request } from 'express';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    frontend(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./product.entity").Product> & import("./product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./product.entity").Product> & import("./product.entity").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    backend(req: Request): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./product.entity").Product> & import("./product.entity").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./product.entity").Product> & import("./product.entity").Product & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
        total: number;
        page: number;
        last_page: number;
    }>;
}
