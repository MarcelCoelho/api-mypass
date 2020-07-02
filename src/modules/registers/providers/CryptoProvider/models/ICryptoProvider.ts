export default interface ICryptoProvider {
  encrypt(key: string, password: string): Promise<string>;
  decrypt(key: string, hash: string): Promise<string>;
}
