import { Controller } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Post, Body } from '@nestjs/common';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('/')
  async create(@Body() createTicketDto: CreateTicketDto) {
    return await this.ticketService.create(
      createTicketDto.count,
      createTicketDto.showId,
    );
  }
}
