import { ConflictException, Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { ISerialNumber } from './types/request.interface';

@Injectable()
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  /* 관리자 일련코드 생성 */
  async create(data: ISerialNumber) {
    const serialNumber = await this.adminRepository.serialCode();
    return await this.adminRepository.create({ ...data, serialNumber });
  }

  async compareSerialNumber(serialNumber: number): Promise<string> {
    const compare = await this.adminRepository.findSerialNumber(serialNumber);
    if (!compare) throw new ConflictException('인증번호가 일치하지 않습니다. 확인 후 입력 바랍니다.');
    return '인증번호가 일치합니다.';
  }
}
