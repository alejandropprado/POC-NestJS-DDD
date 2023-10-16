export interface IUseCase<Args, Output> {
  execute(args: Args): Output;
}
