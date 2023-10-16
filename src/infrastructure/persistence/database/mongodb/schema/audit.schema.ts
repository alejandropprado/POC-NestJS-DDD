import { Prop, Schema } from '@nestjs/mongoose';
import { IAudit } from 'src/domain/audit/audit.entity';
import { IPartialEmployee } from 'src/domain/employee/employee.entity';

@Schema({ id: false, _id: false })
export class By implements IPartialEmployee {
  @Prop({ required: true })
  id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastname1: string;
  @Prop({ required: true })
  lastname2?: string | null;
  @Prop({ required: true })
  numberRut: string;
  @Prop({ required: true })
  phone: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  status: number;
}

@Schema({ id: false, _id: false })
export class Action {
  @Prop({ required: true })
  by: By;
  @Prop({ required: true })
  at: Date;
}

@Schema({ id: false, _id: false })
export class Audit implements IAudit {
  @Prop({ required: true })
  created: Action;
  @Prop({})
  updated?: Action;
  @Prop({})
  deleted?: Action;
}
