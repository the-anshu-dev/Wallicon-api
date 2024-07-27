import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  email: String;
  
  @ApiProperty()
  password: String;
}
