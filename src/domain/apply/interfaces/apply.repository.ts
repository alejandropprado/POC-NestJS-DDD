import { IApply } from '../entities/apply.entity';

export interface IApplyRepository {
  createApply(apply: Partial<IApply>): Promise<void>;
  getApply(id: string): Promise<IApply>;
}
