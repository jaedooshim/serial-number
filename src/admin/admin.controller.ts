import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { SerialNumberDto } from './types/request.dto';

@Controller('admins')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get()
  async create(data: SerialNumberDto) {
    return await this.adminService.create(data);
  }

  @Post()
  async compare(@Body() body: SerialNumberDto): Promise<string> {
    return await this.adminService.compareSerialNumber(body.serialNumber);
  }
}
