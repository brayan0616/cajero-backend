import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CajeroService } from './cajero.service';
import { CreateCuentaNequiDto } from './dto/create-cuenta-nequi.dto';
import { CreateCuentaAhorroDto } from './dto/create-cuenta-ahorro.dto';

@Controller('cajero')
export class CajeroController {
  constructor(private readonly cajeroService: CajeroService) {}

  @Post('nequi')
  create(@Body() createNequiDto: CreateCuentaNequiDto) {
    return this.cajeroService.crearCuentaNequi(createNequiDto);
  }
  @Post('ahorro')
  createAhorro(@Body() createAhorroDto: CreateCuentaAhorroDto) {
    return this.cajeroService.crearCuentaAhorro(createAhorroDto);
  }

  @Get('nequi/:numeroCuenta')
  getAccountByNumber(@Param('numeroCuenta') numeroCuenta: string) {
    return this.cajeroService.getAccountByNumber(numeroCuenta);
  }
}
