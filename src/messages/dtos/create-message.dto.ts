import { IsString } from 'class-validator'
//class-transformer

export class CreateMessageDto {
  @IsString()
  content: string;
}