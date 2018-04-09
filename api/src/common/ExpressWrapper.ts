import { Request, Response, NextFunction } from 'express';

interface ExtendedRequest extends Request {
    userPrinciple?: string
}

export interface Middleware { (req: ExtendedRequest, res: Response, next: NextFunction): void }

export interface Route { (req: ExtendedRequest, res: Response): void }
