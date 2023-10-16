import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateApplyUseCase } from 'src/application/use-cases/apply/create-apply.use-case';
import {
  CreateApplyRequestDTO,
  CreateApplyResponseDTO,
} from 'src/application/use-cases/apply/dto/create-apply.dto';

@Controller('apply')
export class ApplyController {
  constructor(
    @Inject(CreateApplyUseCase.name)
    private readonly createApplyUseCase: CreateApplyUseCase,
  ) {}

  @Post('/')
  async createApply(
    @Body() createApplyRequest: CreateApplyRequestDTO,
  ): Promise<CreateApplyResponseDTO> {
    return this.createApplyUseCase.execute(createApplyRequest);
  }
}
