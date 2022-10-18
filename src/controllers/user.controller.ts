import { Request, Response } from "express";
import { UserCreateOperation } from "@operations/user/create";

export class UserController {
  async create(req: Request, res: Response){
    const { body } = req
    const result = await new UserCreateOperation().execute(body)
    res.send(result)
  }
}