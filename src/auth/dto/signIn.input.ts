import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsEmail } from 'class-validator';

@InputType()
export class SignInInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(8)
  password: string;
}
