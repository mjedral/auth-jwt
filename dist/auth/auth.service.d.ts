import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwtService;
    private config;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService);
    hashData(data: string): Promise<string>;
    getTokens(userId: number, email: string): Promise<Tokens>;
    signupLocal(dto: AuthDto): Promise<Tokens>;
    updateRefreshTokenHash(userId: number, rt: string): Promise<void>;
    signinLocal(): void;
    logout(): void;
    refreshTokens(): void;
}
