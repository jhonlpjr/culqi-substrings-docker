import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindSubStringIndexes } from 'src/utils/functions/strings.function';
import { IndexSubstringDto } from './dto/index-substring.dto';
import { Substring, SubstringDocument } from './schemas/substring.schema';

@Injectable()
export class SubstringService {

  constructor( 
    @InjectModel(Substring.name) private readonly substringModel: Model<SubstringDocument>, 
  ) {}
  
  async findIndexes({s, words}: IndexSubstringDto): Promise<Substring> {
    const indexes = FindSubStringIndexes(s, words);
    const res  = await this.substringModel.create({output: indexes});
    return res;
  }

  async findAllIndexes() {
    const indexes = await this.substringModel.find();
    return indexes;
  }


}
