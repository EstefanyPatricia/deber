import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateAlumnoDto {

    @IsString()
    @IsOptional()
    nombreAlumno: string;

    @IsNumber()
    @IsOptional()
    notasFinal: number;

    @IsDate()
    @IsOptional()
    asistencia: Date;

    @IsBoolean()
    @IsOptional()
    actuacion: boolean;
}