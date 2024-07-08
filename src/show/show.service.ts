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

  async create(createShowDto: CreateShowDto) {
    const dateString = JSON.stringify(createShowDto.date);
    return await this.showRepository.save({
      createShowDto,
      date: dateString,
    });
  }

  async getOne(id: number) {
    return await this.showRepository.findOne({ where: { id } });
  }

  getAll() {
    return this.showRepository.find();
  }

  async getListByCategory(category: number) {
    return await this.showRepository.find({ where: { category } });
  }

  async getSearchByTitle(title: string) {
    return await this.showRepository.find({ where: { title } });
  }

  async updateSeats(count: number, showId: number) {
    const showData = await this.showRepository.findOne({
      where: { id: showId },
    });
    const updateSeats = showData.seatsLeft - count;
    return await this.showRepository.update(
      { id: showId },
      { seatsLeft: updateSeats },
    );
  }
}
