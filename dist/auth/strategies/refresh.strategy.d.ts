import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { JwtPayload } from '../types';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    constructor(config: ConfigService);
    validate(req: Request, payload: JwtPayload): {
        refreshToken: string;
        sub: number;
        email: string;
    };
}
export {};
