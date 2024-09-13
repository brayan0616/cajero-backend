import { Module } from '@nestjs/common';
import { CajeroService } from './cajero.service';
import { CajeroController } from './cajero.controller';

@Module({
  controllers: [CajeroController],
  providers: [CajeroService],
})
export class CajeroModule {}
