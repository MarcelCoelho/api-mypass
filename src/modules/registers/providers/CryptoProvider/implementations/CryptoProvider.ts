import IHashProvider from '@modules/registers/providers/CryptoProvider/models/ICryptoProvider';
import CryptoJS from 'crypto-js';

class CryptoProvider implements IHashProvider {
  public async encrypt(key: string, password: string): Promise<string> {
    return CryptoJS.AES.encrypt(password, key).toString();
  }

  public async decrypt(key: string, hash: string): Promise<string> {
    const bytesDecrypt = CryptoJS.AES.decrypt(hash, key);
    return bytesDecrypt.toString(CryptoJS.enc.Utf8);
  }
}
export default CryptoProvider;
