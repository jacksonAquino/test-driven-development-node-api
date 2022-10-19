import { Request, Response } from "express";
import { CompanyCountOperation } from "@operations/company/count";

export class CompanyController {
  async count(req: Request, res: Response){
    const result = await new CompanyCountOperation().execute()
    res.send(result)
  }
}