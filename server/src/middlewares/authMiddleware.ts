import {NextFunction, Request, RequestHandler, Response} from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!;

interface JwtPayload {
    id: string;
    handle: string;
    role: string;
}

declare module 'express-serve-static-core' {
    interface Request {
        user?: JwtPayload;
    }
}

export const authMiddleware = (allowed: string[]): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ message: 'Token missing' });
            return;
        }

        try {
            req.user = jwt.verify(token, SECRET) as JwtPayload;

            if (!allowed.includes(req.user.role)) {
                res.status(403).json({ message: 'Access denied' });
                return;
            }

            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    };
};

