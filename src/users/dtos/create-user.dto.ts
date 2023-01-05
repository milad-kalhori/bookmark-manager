import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}





/*
npm i @nestjs/cli
//
//packages
// 404
// rest client

nest n car-value

nest g --help
(--flat)

nest g module user
nest g controller user
nest g service user

npm i @nestjs/typeorm typeorm sqlite3

npm run start:dev

npm i class-validator class-transformer
*/