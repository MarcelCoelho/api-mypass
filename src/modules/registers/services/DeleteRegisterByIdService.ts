import { injectable, inject } from 'tsyringe';

import IRegisterRepository from '../repositories/IRegisterRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteRegisterByIdService {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegisterRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<void> {

    const register = await this.registersRepository.findById(id);

    if (register) {
      await this.registersRepository.remove(register.id);
    }
  }
}

export default DeleteRegisterByIdService;
