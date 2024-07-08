import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('show')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  @Post('/')
  @UseGuards(RolesGuard)
  async create(@Body() createShowDto: CreateShowDto) {
    return await this.showService.create(createShowDto);
  }

  @Get('/search')
  async getListByCategory(@Query('category') category: number) {
    return await this.showService.getListByCategory(category);
  }

  @Get('/')
  getAll() {
    return this.showService.getAll();
  }

  @Get('/:showId')
  async getOne(@Param() showId: number) {
    return await this.showService.getOne(showId);
  }

  @Get('/title')
  async getSearchByTitle(@Body() title: string) {
    return await this.showService.getSearchByTitle(title);
  }
}
