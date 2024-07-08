import { Injectable } from '@nestjs/common';
import { Ticket } from './entities/ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Show } from 'src/show/entities/show.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
    @InjectRepository(Show)
    private readonly showRepository: Repository<Show>,
  ) {}

  async create(count: number, showId: number) {
    const showInfo = await this.showRepository.findOne({
      where: { id: showId },
    });
    const totalPrice = showInfo.price * count;
    return await this.ticketRepository.save({
      showId: showId,
      count: count,
      totalPrice: totalPrice,
      date: showInfo.date,
    });
  }

  async getMy(userId: number) {
    return await this.ticketRepository.find({
      where: { id: userId },
    });
  }
}
