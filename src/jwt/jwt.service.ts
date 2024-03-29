import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Admin } from '@prisma/client';
import { sign } from 'jsonwebtoken';
@Injectable()
export class JwtService {
  constructor(private configService: ConfigService) {}

  sign(id: number): string {
    return sign({ id }, this.configService.get<string>('ACCESS_TOKEN_SECRET_KEY')!, {
      expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRES_IN')!,
    });
  }
}
