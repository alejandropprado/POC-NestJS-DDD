import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateOfferUseCase } from 'src/application/use-cases/offer/create-offer.use-case';
import { CreateOfferRequestDTO } from 'src/application/use-cases/offer/dto/create-offer.dto';
import { IOffer } from 'src/domain/offer/entities/offer.entity';

@Controller('offer')
export class OfferController {
  constructor(
    @Inject(CreateOfferUseCase.name)
    private readonly createOfferUseCase: CreateOfferUseCase,
  ) {}

  @Post('/')
  async createOffer(
    @Body() createOfferRequest: CreateOfferRequestDTO,
  ): Promise<IOffer> {
    console.log('createOfferUseCase', Object.keys(this.createOfferUseCase));
    return this.createOfferUseCase.execute(createOfferRequest);
  }
}
