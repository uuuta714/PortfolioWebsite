import { Component, inject, OnInit } from '@angular/core';
import * as profileData from '../../../assets/profile.json';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from "../../core/shared/text-input/text-input.component";
import { TextareaComponent } from '../../core/shared/textarea/textarea.component';
import { ContactService } from '../../_service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent, TextareaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  data: any = profileData;
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  contactForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm()
    console.log(this.contactForm.controls);
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      message: ['', Validators.required],
    })
  }

  sendMessage() {
    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: _ => console.log(this.contactForm.value),
      error: error => console.log(error)
    })
  }
}
