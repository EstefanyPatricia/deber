import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

import { UsuarioEntity } from "./usuario.entity";
import { AlumnoEntity } from "./alumno.entity";

@Entity('profesor')
export class ProfesorEntity extends UsuarioEntity {
    @Column()
    asignaruta: string;

    @Column()
    registroNotas: number;

    @Column()
    registroAsistencias: boolean

    @ManyToMany(() => AlumnoEntity, (alumno) => alumno.profesores)
    @JoinTable()
    alumnos: AlumnoEntity[]
}