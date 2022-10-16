import { ObjectId } from 'mongodb'
export interface UserDto {
  _id?: ObjectId
  name: string
}