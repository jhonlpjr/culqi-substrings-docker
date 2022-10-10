import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubstringDocument = Substring & Document;

@Schema({ collection: 'culqi' })
export class Substring {
  @Prop()
  output: Number[];
}

export const SubstringSchema = SchemaFactory.createForClass(Substring);
