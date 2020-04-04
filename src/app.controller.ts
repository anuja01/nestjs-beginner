import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('name')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('name')
  getName(): string {
    return 'AnUja'
  }
  @Get('age')
  getAge(): string {
    return '31'
  }
}
