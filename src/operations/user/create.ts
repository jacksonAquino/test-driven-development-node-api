import { UserDto } from "@dtos/user.dto";
import { UserBaseOperation } from "./base";

export class UserCreateOperation extends UserBaseOperation {
  async execute(params: UserDto){
    const userCreated = await this.userRepository.create(params)
    return userCreated
  }
}