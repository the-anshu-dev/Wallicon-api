import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users>;


export const UserSchemaName="Users"
@Schema({ timestamps: true })
export class Users {
  

  @Prop({ type: String, default: null, trim:true})
  name: string;

  

 
  
  @Prop({ type: String, required: true, index: true, unique: true })
  email: string;

  @Prop({ type: String,   })
  password: string;

  
}

export const UserSchema = SchemaFactory.createForClass(Users);
// export const StudentsModel = SchemaFactory.createForClass(Students);