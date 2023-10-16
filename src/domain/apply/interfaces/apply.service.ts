import { IApply } from '../entities/apply.entity';

export interface IApplyService {
  createApply(apply: Partial<IApply>): Promise<IApply>;
  getApply(id: string): Promise<IApply>;
}
