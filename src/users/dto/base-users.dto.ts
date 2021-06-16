import { IsNumber, IsNotEmpty } from 'class-validator';

export class BaseUsersDto {
  
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  description?: string;
    
  @IsNotEmpty()
  @IsNumber()
  age: number;
  }