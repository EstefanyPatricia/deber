import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfesorEntity } from './entities/profesor.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProfesorDto } from './dto/profesor-dto';
import { UpdateProfesorDto } from './dto/update-profesor-dto';


@Injectable()
export class profesorService {
  constructor (@InjectRepository(ProfesorEntity) private profesorRepository: Repository<ProfesorEntity>){}

  async create(profesorDto: ProfesorDto):Promise<ProfesorEntity> {
    const profesor: ProfesorEntity = await this.profesorRepository.save(profesorDto);
        return profesor;
        //se guada en la bd la variable que se crea en la variable de la funcion
  }

  async findAll() :Promise<ProfesorEntity [] >{
    const profesor: ProfesorEntity [] = await this.profesorRepository.find();
        return profesor;
  }

  async findOne(id: string) :Promise<ProfesorEntity> {
    const profesor: ProfesorEntity = await this.profesorRepository.findOneBy({id});
        return profesor;
  }

  async update(id: string, updateprofesor: UpdateProfesorDto) :Promise<UpdateResult | undefined> {
    const profesor: UpdateResult = await this.profesorRepository.update(id, updateprofesor);
        return profesor;
  }

  async remove(id: string) :Promise<DeleteResult | undefined> {
    const profesor: DeleteResult = await this.profesorRepository.delete(id);
    /*if (profesor) {
        return profesor;
    } else {
        throw new Error('El profesor no se pudo borrar')
    }*/
        return profesor;
  }
}
