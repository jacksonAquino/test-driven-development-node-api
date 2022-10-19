import { Request, Response } from "express";
import { CountOperation } from "@operations/company/count";

export class CompanyController {
  async count(req: Request, res: Response){
    const result = await new CountOperation().execute()
    res.send(result)
  }
}