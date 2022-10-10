import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IndexSubstringDto } from './dto/index-substring.dto';
import { SubstringService } from './substring.service';

@Controller('substring')
@ApiTags('Substring')
export class SubstringController {
  constructor(private readonly substringService: SubstringService) {}

  @Post()
  findIndexes(@Body() dto: IndexSubstringDto) {
    return this.substringService.findIndexes(dto);
  }

  @Get()
  findAllIndexes() {
    return this.substringService.findAllIndexes();
  }
}
