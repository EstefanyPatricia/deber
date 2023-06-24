import { Delete, Injectable } from '@nestjs/common';
import { AlumnoDto } from './dto/alumno-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoEntity } from './entities/alumno.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateAlumnoDto } from './dto/update-alumno-dto';

@Injectable()
export class AlumnoService {
  constructor (@InjectRepository(AlumnoEntity) private alumnoRepostory: Repository<AlumnoEntity>){}

  async create(alumnoDto: AlumnoDto):Promise<AlumnoEntity> {
    const alumno: AlumnoEntity = await this.alumnoRepostory.save(alumnoDto);
        return alumno;
        //se guada en la bd la variable que se crea en la variable de la funcion
  }

  async findAll() :Promise<AlumnoEntity [] >{
    const alumno: AlumnoEntity [] = await this.alumnoRepostory.find();
        return alumno;
  }

  async findOne(id: string) :Promise<AlumnoEntity> {
    const alumno: AlumnoEntity = await this.alumnoRepostory.findOneBy({id});
        return alumno;
  }

  async update(id: string, updateAlumno: UpdateAlumnoDto) :Promise<UpdateResult | undefined> {
    const alumno: UpdateResult = await this.alumnoRepostory.update(id, updateAlumno);
        return alumno;
  }

  async remove(id: string) :Promise<DeleteResult | undefined> {
    const alumno: DeleteResult = await this.alumnoRepostory.delete(id);
        return alumno;
  }
}


