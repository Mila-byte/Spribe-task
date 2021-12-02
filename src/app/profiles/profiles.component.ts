import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Profile} from '../profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  @Input() profile = <Profile>{};

  @Output() removeProfile = new EventEmitter();

  @Output() changeProfile = new EventEmitter<Profile>();

  readMode: boolean = true;
  validation: boolean = false;

  editedProfile = <Profile>{};

  constructor() {
  }

  openConfirmModal() {
    this.removeProfile.emit(this.profile.id)
  }

  setEditStatus() {
    if (this.readMode) {
      return this.editProfile()
    }
    this.saveChanges()
  }

  saveChanges() {
    if (this.editedProfile.name && this.editedProfile.age && this.editedProfile.photo) {
      this.validation = false
      this.changeProfile.emit(this.editedProfile)
      this.editedProfile = <Profile>{};
      this.readMode = true
    } else {
      this.validation = true
    }
  }

  editProfile() {
    this.editedProfile = {...this.profile}
    this.readMode = false
  }

  onChangeFileUpload(event: Event) {
    // @ts-ignore
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        // @ts-ignore
        this.editedProfile.photo = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
