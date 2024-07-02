import { NextFunction, Request, Response } from "express"

export const CatchAsyncError = (TheFunction: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(TheFunction(req, res, next)).catch(next)
}