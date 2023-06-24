import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { UsuarioEntity } from "./usuario.entity";
import { AlumnoEntity } from "./alumno.entity";

@Entity('profesor')
export class ProfesorEntity extends UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    asignaruta: string;

    @Column()
    registroNotas: number;

    @Column()
    registroAsistencias: boolean

    @ManyToMany(() => AlumnoEntity, (alumno) => alumno.profesores)
    alumnos: AlumnoEntity[]
}