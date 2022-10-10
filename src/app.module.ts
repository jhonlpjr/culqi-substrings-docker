import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubstringModule } from './substring/substring.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://192.168.0.14:8081/local'), SubstringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
