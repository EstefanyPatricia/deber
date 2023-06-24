import { PartialType } from "@nestjs/mapped-types";
import { ProfesorDto } from "./profesor-dto";

export class UpdateProfesorDto extends PartialType(ProfesorDto){
    //esta herrerando todo lo que esta en el DTO no va mas codigo.
}