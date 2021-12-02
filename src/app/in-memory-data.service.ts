import {Injectable} from '@angular/core';
import {Profile} from "./profile.service";
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const profiles: Profile[] = [
      {
        id: 0,
        name: 'Dr Nice',
        age: 17,
        photo: '../../assets/profile.png'
      },
      {
        id: 1,
        name: 'Dr Nice',
        age: 53,
        photo: '../../assets/profile.png'
      },
      {
        id: 2,
        name: 'Dr Nice',
        age: 13,
        photo: '../../assets/profile.png'
      },
      {
        id: 3,
        name: 'Dr Nice',
        age: 19,
        photo: '../../assets/profile.png'
      },
      {
        id: 4,
        name: 'Dr Nice',
        age: 12,
        photo: '../../assets/profile.png'
      },
      {
        id: 5,
        name: 'Dr Nice',
        age: 21,
        photo: '../../assets/profile.png'
      },
      {
        id: 6,
        name: 'Dr Nice',
        age: 82,
        photo: '../../assets/profile.png'
      },
      {
        id: 7,
        name: 'Dr Nice',
        age: 32,
        photo: '../../assets/profile.png'
      },
      {
        id: 8,
        name: 'Dr Nice',
        age: 52,
        photo: '../../assets/profile.png'
      },
      {
        id: 9,
        name: 'Dr Nice',
        age: 25,
        photo: '../../assets/profile.png'
      }
    ];
    return {profiles};
  }
}
