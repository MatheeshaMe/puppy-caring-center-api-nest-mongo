import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/user/schema/user.schema';

export interface ProductType {
  shampoo?: string;
  toy?: string;
  vitamin?: string;
}

export class CreateShopDTO {
  owner: User;

  @IsNotEmpty()
  @IsString()
  productname: string;

  @IsNotEmpty()
  @IsNumber()
  productPrice: number;

  @IsNotEmpty()
  @IsString()
  productphoto: string;

  @IsNotEmpty()
  @IsString()
  producttype: string;
}