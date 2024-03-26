import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Admin } from '@prisma/client';
import { ICompareNumber, ISerialNumber } from './types/request.interface';

@Injectable()
export class AdminRepository {
  constructor(private prisma: PrismaService) {}

  private adminRepository = this.prisma.extendedClient.admin;

  async create(data: ISerialNumber): Promise<Admin> {
    return this.adminRepository.create({ data: { ...data } });
  }

  async findSerialNumber(serialNumber: number): Promise<Admin> {
    return this.adminRepository.findFirst({ where: { serialNumber } });
  }

  // 일련숫자 6개 생성
  async serialCode() {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }
}
