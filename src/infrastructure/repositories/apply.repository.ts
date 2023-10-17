import { Inject, Injectable } from '@nestjs/common';
import { IApply } from 'src/domain/apply/entities/apply.entity';
import { IApplyRepository } from 'src/domain/apply/interfaces/apply.repository';

@Injectable()
export class ApplyRepositoryImp implements IApplyRepository {
  createApply(apply: Partial<IApply>): Promise<IApply> {
    return Promise.resolve({ ...apply, id: '123' } as IApply);
  }

  getApply(id: string): Promise<IApply> {
    return Promise.resolve({ id } as IApply);
  }
}
