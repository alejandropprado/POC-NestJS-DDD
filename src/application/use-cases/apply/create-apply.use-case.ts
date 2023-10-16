import { IApply } from 'src/domain/apply/entities/apply.entity';
import { IUseCase } from '../common/use-case.entity';
import { ApplyService } from 'src/domain/apply/services/apply.service';

export class CreateApplyUseCase
  implements IUseCase<Partial<IApply>, Promise<IApply>>
{
  constructor(private readonly applyService: ApplyService) {}

  execute(args: Partial<IApply>): Promise<IApply> {
    return this.applyService.createApply(args);
  }
}
