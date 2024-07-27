import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: String;

  @ApiProperty()
  email: String;
  
  @ApiProperty()
  password: String;
}
