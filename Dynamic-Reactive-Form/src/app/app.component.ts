import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {}
  title = 'Dynamic-Reactive-Form';
  dynamicForm!: FormGroup;
  formConfig = [
    {
      type: 'text',
      label: 'Full Name',
      name: 'fullName',
      validators: ['required'],
    },
    {
      type: 'email',
      label: 'Email Address',
      name: 'email',
      validators: ['required', 'email'],
    },
     {
      type: 'number',
      label: 'Phone Number',
      name: 'phone',
      validators: ['required', 'phone'],
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: ['India', 'USA', 'UK'],
      validators: ['required'],
    },
  ];

  ngOnInit(): void {
    const group: any = {};
   
    this.formConfig.forEach((item) => {
       const validators = [];
      if (item.validators.includes('required')) {
        validators.push(Validators.required);
      }
      if (item.validators.includes('email')) {
        validators.push(Validators.email);
      }
      if(item.validators.includes('phone')) {
        validators.push(Validators.pattern('^[0-9]{10}$')); 
      }
      group[item.name] = new FormControl('', validators);
    });
    this.dynamicForm = new FormGroup(group);
  }

  onSubmit() {
    console.log('Form Values', this.dynamicForm.value);
  }
}
