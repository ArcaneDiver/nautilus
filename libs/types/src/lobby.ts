import { Location } from './location';
import { User } from './user';

export interface Lobby {
  id?: string;
  owner: User;
  members: User[]; // Owner is part of members
  hunter: Hunter;
  wanted: Wanted[];

  accRange: number; // Meters
}

export interface Hunter extends Player {
  caught: Wanted[];
}

export interface Wanted extends Player {
  caught: boolean;
  rangePosition: Location;
}

interface Player {
  user: User;
  location: Location;
}
