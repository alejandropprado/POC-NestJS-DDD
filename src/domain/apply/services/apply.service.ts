import { IApply } from '../entities/apply.entity';
import { IApplyRepository } from '../interfaces/apply.repository';
import { IApplyService } from '../interfaces/apply.service';

export class ApplyService implements IApplyService {
  constructor(private readonly applyRepository: IApplyRepository) {}

  createApply(apply: Partial<IApply>): Promise<IApply> {
    return this.applyRepository.createApply(apply);
  }

  getApply(id: string): Promise<IApply> {
    return this.applyRepository.getApply(id);
  }
}
