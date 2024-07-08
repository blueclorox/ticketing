import { Injectable } from '@nestjs/common';
import { Show } from './entities/show.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShowDto } from './dto/create-show.dto';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show)
    private showRepository: Repository<Show>,
  ) {}

  create(createShowDto: CreateShowDto) {
    const dateString = JSON.stringify(createShowDto.date);
    return this.showRepository.save({
      createShowDto,
      date: dateString,
    });
  }

  getOne(id: number) {
    return this.showRepository.findOne({ where: { id } });
  }

  getAll() {
    return this.showRepository;
  }

  getListByCategory(category: number) {
    return this.showRepository.find({ where: { category } });
  }

  getSearchByTitle(title: string) {
    return this.showRepository.find({ where: { title } });
  }
}
