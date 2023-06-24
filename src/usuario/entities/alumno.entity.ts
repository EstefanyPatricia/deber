import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { UsuarioEntity } from "./usuario.entity";
import { ProfesorEntity } from "./profesor.entity";

@Entity('alumno') //la clase es un tabla
export class AlumnoEntity extends UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    notasFinal: number;

    @Column()
    nombreAlumno: string;

    @Column()
    asistencia: Date;

    @Column()
    actuacion: boolean;

    @ManyToMany(() => ProfesorEntity, (profesor) => profesor.alumnos)
    @JoinTable()
    profesores: ProfesorEntity[]
}
