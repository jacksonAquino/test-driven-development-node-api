import { UserDto } from "@dtos/user.dto";
import { BaseRepository } from "./base";
import { ObjectId } from 'mongodb'

export interface IUserRepository {
  create(params: UserDto): Promise<UserDto>
}

export class UserRepository extends BaseRepository implements IUserRepository {
  async create(params: UserDto): Promise<any> {
    params = { _id: new ObjectId(), ...params}
    const user_created = await this.client.collection('users').insertOne(params)
    return user_created
  }
}