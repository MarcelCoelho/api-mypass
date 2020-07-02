import { container } from 'tsyringe';

import ICryptoProvider from '@modules/registers/providers/CryptoProvider/models/ICryptoProvider';
import CryptoProvider from '@modules/registers/providers/CryptoProvider/implementations/CryptoProvider';

container.registerSingleton<ICryptoProvider>('CryptoProvider', CryptoProvider);
