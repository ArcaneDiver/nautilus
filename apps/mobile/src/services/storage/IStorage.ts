export interface IStorage {
  setValue(key: string, value: string): Promise<void>;
  getValue(key: string): Promise<string>;
  removeValue(key: string): Promise<void>;
}
