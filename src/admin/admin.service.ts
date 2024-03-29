import { ConflictException, Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { ISerialNumber } from './types/request.interface';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AdminService {
  constructor(
    private adminRepository: AdminRepository,
    private jwtService: JwtService,
  ) {}

  /* 관리자 일련코드 생성 */
  async create(data: ISerialNumber) {
    const serialNumber = await this.adminRepository.serialCode();
    return await this.adminRepository.create({ ...data, serialNumber });
  }

  async compareSerialNumber(serialNumber: number): Promise<string> {
    const compare = await this.adminRepository.findSerialNumber(serialNumber);
    if (!compare) throw new ConflictException('인증번호가 일치하지 않습니다. 확인 후 입력 바랍니다.');

    const accessToken = this.jwtService.sign(compare.id);
    return accessToken;
  }
}
