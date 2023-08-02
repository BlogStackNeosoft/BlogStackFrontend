import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gender } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  search!: string;
  role!: string | null;
  toggleButton: boolean = false;
  userForm!: FormGroup;
  userDemoForm!: FormGroup;
  user!: any;
  userFormDemo!: FormGroup;
  fileName!: string;
  genderOptions: Gender[] = [Gender.MALE, Gender.FEMALE, Gender.OTHER];

  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.role = localStorage?.getItem("role");
    console.log("the role value is", this.role);

    this.userForm = this.fb.group({
      user_id: [''],
      email_id: ['', Validators.email],
      last_name: ['', Validators.required],
      middle_name: [''],
      first_name: ['', Validators.required],
      address: [''],
      gender: [''],
      profile_photo: [''],
      date_of_birth: [''],
      status_set: ['', Validators.required],
    });


    this.userService.fetchByEmailId(localStorage.getItem("user_id")).subscribe(data => {
      this.user = data.data;
      console.log(data.data);
      this.patchForm();
    })

  }

  patchForm() {
    this.userForm.get('user_id')?.setValue(this.user.user_id);
    this.userForm.get('email_id')?.setValue(this.user.email_id);
    this.userForm.get('last_name')?.setValue(this.user.last_name);
    this.userForm.get('middle_name')?.setValue(this.user.middle_name);
    this.userForm.get('first_name')?.setValue(this.user.first_name);
    this.userForm.get('address')?.setValue(this.user.address);
    this.userForm.get('gender')?.setValue(this.user.gender);
    this.userForm.get('date_of_birth')?.setValue(this.user.date_of_birth);
    this.userForm.get('profile_photo')?.setValue(this.user.profile_photo);
    this.userForm.get('status_set')?.setValue(this.user.status_set);
  }
  onSubmit() {
    if (this.userForm.get('email_id')?.invalid && this.userForm.get('email_id')?.value) {
      Swal.fire("Invalid email")
    }
    if (this.userForm.get('last_name')?.invalid) {
      Swal.fire("Please enter last name");
    }
    if (this.userForm.get('first_name')?.invalid) {
      Swal.fire("Please enter first name");
    }

    else {
      if (!this.userForm.get('status_set')?.value) {
        this.userForm.get('status_set')?.setValue("valid");
      }

      console.log(this.userForm.get('date_of_birth')?.value);

      const date_of_birth = this.userForm.get('date_of_birth')?.value;
      //To convert the Date object to string due to parsing error in the backend 
      if (date_of_birth && date_of_birth instanceof Date) {

        const formattedDate = date_of_birth.toISOString().split('T')[0];

        this.userForm.get('date_of_birth')?.setValue(formattedDate);

      }
      this.userService.updateUserProfile(this.userForm.value).subscribe(data => {
        console.log(data)
      });
    }

  }


  onFileSelect(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      console.log(file)
      this.fileName = file.name;
      // this.user?.profile_photo = ;
      const formData = new FormData();
      formData.append("profile_pic", file);

      this.userService.uploadProfilePhoto(this.user.email_id, formData).subscribe(data => {
        console.log(data)
        window.location.reload();
      });


    }
  }
  logout() {
    localStorage.clear();
    Swal.fire('Successfully Logout').then(() => { this.router.navigate([""]) })
  }

  get email_id() {
    return this.userForm.get('email_id');
  }

}
