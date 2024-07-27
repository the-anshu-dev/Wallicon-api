import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  product_name: string;

  @ApiProperty()
  product_categ: string;

  @ApiProperty()
  product_color: string;

  @ApiProperty()
  product_material: string;
}
