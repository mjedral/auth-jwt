import { ConfigService } from '@nestjs/config/dist/config.service';
import { Strategy } from 'passport-jwt';
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor(config: ConfigService);
    validate(payload: any): any;
}
export {};
