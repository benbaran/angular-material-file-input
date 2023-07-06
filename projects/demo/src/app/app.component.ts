import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'angular-material-file-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formDoc!: FormGroup;

  readonly maxSize = 104857600;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.formDoc = this._fb.group({
      basicfile: [],
      removablefile: [],
      acceptfile: [],
      requiredfile: [{ value: undefined, disabled: false }, [Validators.required, FileValidator.maxContentSize(this.maxSize)]],
      disabledfile: [{ value: undefined, disabled: true }],
      multiplefile: [{ value: undefined, disabled: false }],
      errorStateFile: []
    });
  }
}
