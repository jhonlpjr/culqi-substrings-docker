import { Module } from '@nestjs/common';
import { SubstringService } from './substring.service';
import { SubstringController } from './substring.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Substring, SubstringSchema } from './schemas/substring.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Substring.name, schema: SubstringSchema }]), 
  ],
  controllers: [SubstringController],
  providers: [SubstringService]
})
export class SubstringModule {}
