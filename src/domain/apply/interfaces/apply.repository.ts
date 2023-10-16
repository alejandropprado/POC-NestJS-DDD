import { IApply } from '../entities/apply.entity';

export interface IApplyRepository {
  createApply(apply: Partial<IApply>): Promise<IApply>;
  getApply(id: string): Promise<IApply>;
}
