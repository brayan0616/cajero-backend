import { AccountType } from "@prisma/client";
import { IsEnum, IsNumber, IsString, Length, Matches } from "class-validator";
import { TipoCuentaList } from "../enum/tipoCuenta.enum";
import { Type } from "class-transformer";

export class CreateCuentaAhorroDto {

    @IsString()
    @Matches(/^[0-9]+$/, {
        message: 'El número de cuenta debe contener solo números'
    })
    @Length(11, 11, {
        message: 'El número de cuenta debe tener 11 dígitos'
    })
    numeroCuenta: string;

    @IsString()
    name: string;

    @IsEnum(TipoCuentaList, {
        message: `El tipo de cuenta debe ser uno de los siguientes valores: ${TipoCuentaList.join(', ')}`
    })
    tipoCuenta: AccountType;
}