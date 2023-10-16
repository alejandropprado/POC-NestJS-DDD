import { Prop, Schema } from '@nestjs/mongoose';
import { ICompany } from 'src/domain/company/company.entity';
import { Audit } from './audit.schema';

@Schema({})
export class Company extends Audit implements ICompany {
  @Prop({ required: true })
  name: string;
}
