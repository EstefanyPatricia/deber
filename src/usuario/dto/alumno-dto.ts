import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AlumnoDto  {
    //@IsString()
   // @IsNotEmpty() van obligatorios en los dto

    @IsString()
    @IsNotEmpty()
    nombreAlumno: string;

    @IsNumber()
    @IsNotEmpty()
    notasFinal: number;

    @IsDate()
    @IsNotEmpty()
    asistencia: Date;

    @IsBoolean()
    @IsOptional()
    actuacion: boolean;



}