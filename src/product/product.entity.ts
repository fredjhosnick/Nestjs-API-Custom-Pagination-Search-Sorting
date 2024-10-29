import { faker } from '@faker-js/faker';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomInt } from "crypto";
import { HydratedDocument } from "mongoose";
import { Factory } from "nestjs-seeder";



export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

    @Factory(() => faker.lorem.words(2))
    @Prop()
    title: string;

    @Factory(() => faker.lorem.words(10))
    @Prop()
    description: string;

    @Factory(() => faker.image.url())
    @Prop()
    image: string;

    @Factory(() => randomInt(10, 100))
    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);