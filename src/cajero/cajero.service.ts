import { BadRequestException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCuentaNequiDto } from './dto/create-cuenta-nequi.dto';
import { CreateCuentaAhorroDto } from './dto/create-cuenta-ahorro.dto';

@Injectable()
export class CajeroService extends PrismaClient implements OnModuleInit {

    private readonly logger = new Logger('CajeroService');

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Conexión a la base de datos establecida');
    }

    async crearCuentaNequi(createCuentaNequiDto: CreateCuentaNequiDto) {

        try {

            const cuenta = await this.cuenta.findFirst({
                where: {
                    numeroCuenta: createCuentaNequiDto.numeroCuenta
                }
            })

            if (cuenta) {
                throw new BadRequestException('La cuenta ya existe');
            }

            createCuentaNequiDto.numeroCuenta = '0'+ createCuentaNequiDto.numeroCuenta;
            return this.cuenta.create(
                {
                    data: createCuentaNequiDto
                }
            )  
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async crearCuentaAhorro(createAhorroDto:CreateCuentaAhorroDto ) {

        try {

            const cuenta = await this.cuenta.findFirst({
                where: {
                    numeroCuenta: createAhorroDto.numeroCuenta
                }
            })

            if (cuenta) {
                throw new BadRequestException('La cuenta ya existe');
            }
            return this.cuenta.create(
                {
                    data: createAhorroDto
                }
            )  
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async getAccountByNumber(numeroCuenta: string) {

        if(numeroCuenta.length === 10) numeroCuenta = '0' + numeroCuenta; 

        const numeroC =  await this.cuenta.findFirst({
            where: {
                numeroCuenta:  numeroCuenta
            }
        })

        if (!numeroC) {
            throw new BadRequestException('No se encontró la cuenta');
        }

        return numeroC;
    }

    
}
