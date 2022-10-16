import { IUserRepository, UserRepository } from "@repositories/user.repository";

export class UserBaseOperation {
  constructor(
    readonly userRepository: IUserRepository = new UserRepository
  ){}
}