import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

import { UsuarioEntity } from "./usuario.entity";
import { ProfesorEntity } from "./profesor.entity";

@Entity('alumno') //la clase es un tabla
export class AlumnoEntity extends UsuarioEntity {
    @Column()
    notasFinal: number;

    @Column()
    asistencia: Date;

    @Column()
    actuacion: boolean;

    @ManyToMany(() => ProfesorEntity, (profesor) => profesor.alumnos)
    @JoinTable()
    profesores: ProfesorEntity[]
}
