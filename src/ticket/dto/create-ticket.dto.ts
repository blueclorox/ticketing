import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  @IsNotEmpty({ message: '예매 수량을 입력해주세요.' })
  count: number;

  @IsNumber()
  @IsNotEmpty({ message: '예매하려는 공연 ID를 입력해주세요.' })
  showId: number;
}
