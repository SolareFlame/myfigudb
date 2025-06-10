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
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ message: 'Authorization token missing or malformed' });
            return;
        }

        const token = authHeader.split(' ')[1];
        try {
            req.user = jwt.verify(token, SECRET) as JwtPayload;

            if (!allowed.includes(req.user.role)) {
                res.status(403).json({ message: 'Access denied: insufficient permissions' });
                return;
            }

            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid or expired token' });
            return;
        }
    };
};
