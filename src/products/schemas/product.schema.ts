import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Products>;


export const ProductSchemaName="Products"
@Schema({ timestamps: true })
export class Products {
  

  @Prop({ type: String, default: null, trim:true})
  product_name: string;

  @Prop({ type: String, default: null, trim:true})
  product_id: string;
  @Prop({ type: String, default: null, trim:true})
  product_categ: string;
  @Prop({ type: String, default: null, trim:true})
  product_color: string;

  @Prop({ type: String, default: null, trim:true})
  product_material: string;

  
  

  
}

export const ProductSchema = SchemaFactory.createForClass(Products);