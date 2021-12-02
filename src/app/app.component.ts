import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Profile} from "./profile.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  removedProfileId: number = -1;
  showCreateProfile: boolean = false;
  newProfileName: string = '';
  newProfileAge: number | string = '';
  newProfileImage: string = '';
  validation: boolean = false;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.setProfiles()
  }

  getProfiles(): Profile[] {
    return this.appService.getProfiles()
  }

  setRemovedProfileId(id: number): void {
    this.removedProfileId = id;
  }

  removeProfile(confirm: boolean) {
    if(confirm) {
      this.appService.removeProfileById(this.removedProfileId)
    }

    this.removedProfileId = -1;
  }

  changeProfile(profile: Profile) {
    this.appService.changeProfile(profile)
  }

  addNewProfileUser() {
    const data: Profile = {
      name: this.newProfileName,
      age: this.newProfileAge,
      photo: this.newProfileImage || '../../assets/profile.png',
    }
    if(data.name && data.age) {
      this.validation = false

      this.appService.addProfile(data).subscribe(() => {
        this.appService.setProfiles()
        this.showCreateProfile = false
        this.newProfileAge = ''
        this.newProfileName = ''
        this.newProfileImage = ''
      })
    } else {
      this.validation = true
    }



  }

  filterProfiles(event: Event): void {
    // @ts-ignore
    const value = event.target.value;

    if (value !== 'default') {
      this.appService.filterDataProfile(value)
    }
  }

  onChangeFileUpload(event: Event) {
    // @ts-ignore
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        // @ts-ignore
        this.newProfileImage = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
