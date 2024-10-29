import { MongooseModule } from "@nestjs/mongoose";
import { seeder } from "nestjs-seeder";
import { Product, ProductSchema } from "./product.entity";
import { ProductSeeder } from "./product.seeder";


seeder({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest_search'),
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
    ]

}).run([ProductSeeder]);