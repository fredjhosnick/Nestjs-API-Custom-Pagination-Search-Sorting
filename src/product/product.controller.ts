import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';

@Controller('api/products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }


    @Get('frontend')
    async frontend() {
        return this.productService.find({}).exec()
    }

    @Get('Backend')
    async backend(@Req() req: Request) {
        let options = {};

        if (req.query.s) {
            options = {
                $or: [
                    { title: new RegExp(req.query.s.toString(), 'i') },
                    { description: new RegExp(req.query.s.toString(), 'i') },
                ]
            }
        }


        const query = this.productService.find(options);

        if (req.query.sort && typeof req.query.sort === 'string') {
            query.sort({ price: req.query.sort.toLowerCase() === 'asc' ? 1 : -1 });
        }
        const page: number = parseInt(req.query.page as any) || 1;
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
}
