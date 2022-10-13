import { Injectable } from '@nestjs/common';

export const healthCheckText = 'Everything works fine.';

@Injectable()
export class AppService {
  getHealthCheck(): string {
    return healthCheckText;
  }
}
