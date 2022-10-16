import { Request, Response } from "express";
import { UserCreateOperation } from "@operations/user/create";

export class UserController {
  async create(req: Request, res: Response){
    const params = req.body
    const result = await new UserCreateOperation().execute(params)
    res.send(result)
  }
}