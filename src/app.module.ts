import { Module } from '@nestjs/common';
import { CajeroModule } from './cajero/cajero.module';


@Module({
  imports: [CajeroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
