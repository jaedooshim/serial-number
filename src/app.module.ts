import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [AdminModule, PrismaModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
