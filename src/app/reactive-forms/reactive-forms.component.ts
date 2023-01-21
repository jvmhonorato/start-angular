import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
  })

  constructor(private formBuilder: FormBuilder) { }

  public submitForm() {
    if(this.cadastroForm.valid){
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }

  }

}
