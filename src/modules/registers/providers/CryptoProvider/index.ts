import { container } from 'tsyringe';

import ICryptoProvider from '../../../registers/providers/CryptoProvider/models/ICryptoProvider';
import CryptoProvider from '../../../registers/providers/CryptoProvider/implementations/CryptoProvider';

container.registerSingleton<ICryptoProvider>('CryptoProvider', CryptoProvider);
