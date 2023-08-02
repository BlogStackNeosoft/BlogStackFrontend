import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { postQuestionBean } from 'src/app/model/model';

@Component({
  selector: 'app-post-questions',
  templateUrl: './post-questions.component.html',
  styleUrls: ['./post-questions.component.css']
})
export class PostQuestionsComponent implements OnInit {


  questionForm!: FormGroup;
  isOptional = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = ['Java'];
  allTags: string[] = ['Cobol', 'Java', 'C#', 'Ruby', 'C++', 'C'];

  @ViewChild('tagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  categories = [
    'Language',
    'Framework',
    'Database',
    'IDE'
  ];

  firstFormGroup = this.fb.group({
    questionCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    categoryCtrl: ['', Validators.required],
    subcategoryCtrl: ['', Validators.required],
    // tagCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    codeCtrl: ''
  });

  constructor(
    private fb: FormBuilder,
    private _formBuilder: FormBuilder
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.allTags.slice())),
    );
  }

  ngOnInit(): void {
  }

  postQuestionBean: postQuestionBean=<postQuestionBean>{}
  postQuestion() { 
    this.postQuestionBean.question = this.firstFormGroup.get('questionCtrl')?.value
    this.postQuestionBean.categoryId = this.secondFormGroup.get('categoryCtrl')?.value
    this.postQuestionBean.subCategoryId = this.secondFormGroup.get('subcategoryCtrl')?.value
    this.postQuestionBean.tagId = this.secondFormGroup.get('tagCtrl')?.value
    this.postQuestionBean.codeSnippet = this.thirdFormGroup.get('codeCtrl')?.value
    this.postQuestionBean.status = "ACTIVE"
    this.postQuestionBean.userId = "USERID23234234"
    console.log("postQBean",this.postQuestionBean);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

}
