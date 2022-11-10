import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IsEqualTo } from 'src/common/decorators/validations';

export class LoginDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class ChangePasswordDTO {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @IsEqualTo('newPassword')
  confirmNewPassword: string;
}
