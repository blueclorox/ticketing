import { UserInfo } from 'src/utils/userInfo.decorator';

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { SignInDto } from './dto/sign-in.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.userService.signUp(signUpDto);
  }

  @Post('signIn')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.userService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('email')
  getEmail(@UserInfo() user: User) {
    return { email: user.email };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@UserInfo() user: User) {
    const userProfile = this.userService.getProfile(user.id);
    return userProfile;
  }
}
