import { CreateUserDTO } from './create_user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
