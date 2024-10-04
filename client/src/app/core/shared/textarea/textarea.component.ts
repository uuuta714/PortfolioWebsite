import { Component, input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent implements ControlValueAccessor{
  label = input<string>('');
  placeholder = input<string>('');

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
}
