import { IsBoolean, IsEmpty, IsNumber, IsString, isEmpty } from "class-validator";

export class ProfesorDto {
    //@IsString()
   // @IsNotEmpty() van obligatorios en los dto

   @IsString()
   @IsEmpty()
    asignaruta: string;

    @IsNumber()
    @IsEmpty ()
    registroNotas: number;

    @IsBoolean()
    @IsEmpty()
    registroAsistencias: boolean

}

