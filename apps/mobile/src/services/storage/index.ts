import { IStorage } from './IStorage';
import { LocalStorage as Local } from './LocalStorage';

export const LocalStorage: IStorage = new Local();
