import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

}
