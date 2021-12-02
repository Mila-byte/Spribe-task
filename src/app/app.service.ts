import {Injectable} from '@angular/core';

import {ProfilesService} from './profile.service'
import {Profile} from "./profile.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private profiles: Profile[] = []

  constructor(private profilesService: ProfilesService) {
  }

  setProfiles() {
    this.profilesService.getProfiles()
      .subscribe((data) => {
        this.profiles = data
      })
  }

  getProfiles(): Profile[] {
    return this.profiles
  }

  addProfile(profile: Profile) {
    return this.profilesService.postProfile(profile)
  }

  changeProfile(profile: Profile) {
    const currentProfile = this.profiles.find(item => item.id === profile.id)

    if (currentProfile !== undefined) {
      const data = {...currentProfile, ...profile};
      this.profilesService.putProfile(data).subscribe(() => {
        this.updateProfiles(data)
      })
    }
  }

  updateProfiles(profile: Profile) {
    this.profiles = this.profiles.map(el => {
      if (el.id === profile.id) {
        return profile;
      }
      return el;
    })
  }

  removeProfileById(id: number): void {
    this.profilesService.deleteProfile(id).subscribe(() => {
      const index = this.profiles.findIndex(el => el.id === id)
      this.profiles.splice(index, 1)
    })
  }

  filterDataProfile(type: string) {
    this.profiles.sort(
      (a, b) => {
        if (a.age > b.age) {
          return type === 'youngest' ? 1 : -1;
        }
        if (a.age < b.age) {
          return type === 'youngest' ? -1 : 1;
        }
        return 0;
      }
    )
  }
}
