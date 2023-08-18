import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-post-blogs',
  templateUrl: './post-blogs.component.html',
  styleUrls: ['./post-blogs.component.css']
})
export class PostBlogsComponent implements OnInit {

  tagCtrl = new FormControl();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  firstFormGroup = this.fb.group({
    titleCtrl : ['', [Validators.required]],
  });

  secondFormGroup = this.fb.group({
    imageCtrl : ['', [Validators.required]],
  });

  thirdFormGroup = this.fb.group({
    contentCtrl: ['', Validators.required],
  });

  fourthFormGroup = this.fb.group({
    codeCtrl: ''
  });

  isLinear = false;
}
