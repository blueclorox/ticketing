import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { Category } from '../types/show-category.type';

export class CreateShowDto {
  @IsString()
  @IsNotEmpty({ message: '공연 제목을 입력해주세요.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: '공연 소개를 입력해주세요.' })
  description: string;

  @IsEnum(Category)
  @IsNotEmpty({ message: '공연 카테고리를 설정해주세요.' })
  category: Category;

  @IsString()
  @IsNotEmpty({ message: '공연 장소를 입력해주세요.' })
  address: string;

  @IsNumber()
  @IsNotEmpty({ message: '티켓 가격을 입력해주세요.' })
  price: number;

  @IsUrl()
  @IsNotEmpty({ message: '공연 이미지를 등록해주세요.' })
  image: string;

  @IsString()
  @IsNotEmpty({ message: '공연 날짜와 시간을 입력해주세요.' })
  date: string;

  @IsNumber()
  @IsNotEmpty({ message: '총 좌석 수를 입력해주세요.' })
  seatsLeft: number;
}
