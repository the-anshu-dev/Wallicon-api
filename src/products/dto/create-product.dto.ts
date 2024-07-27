import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    @ApiProperty()
    product_name: string;
  
    @ApiProperty()
    product_id: string;
    @ApiProperty()
    product_categ: string;
    @ApiProperty()
    product_color: string;
  
    @ApiProperty()
    product_material: string;
  

}
