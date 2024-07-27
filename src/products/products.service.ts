import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products.name) private model: Model<Products>) {}

  async create(createProductDto: CreateProductDto) {

    const exisitngProduct = await this.model
      .findOne({ product_id: createProductDto.product_id })
      .lean(true);
    if (exisitngProduct) {
      throw new BadRequestException('Product id is already exists');
    }

    return await this.model.create(createProductDto);
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.model.findByIdAndUpdate(id, updateProductDto).lean();
  }

  async remove(id: string) {
    const product =  await this.model.findByIdAndDelete(id);
    return {
      product: product.product_name,
      message : 'Product deleted Successfully'
    }
  }
}
