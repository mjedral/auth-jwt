import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signupLocal(dto: AuthDto): Promise<Tokens>;
    signinLocal(): void;
    logout(): void;
    refreshTokens(): void;
}
