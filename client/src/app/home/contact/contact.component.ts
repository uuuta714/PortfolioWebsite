import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import * as profileData from '../../../assets/profile.json';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from "../../core/shared/text-input/text-input.component";
import { TextareaComponent } from '../../core/shared/textarea/textarea.component';
import { ContactService } from '../../_service/contact.service';
import { ToastService } from '../../_service/toast.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, TextInputComponent, TextareaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, AfterViewInit{
  data: any = profileData;
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private toastr = inject(ToastService);
  contactForm: FormGroup = new FormGroup({});
  isSending: Boolean = false;

  @ViewChild('contactTitle')
  private contactTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChild('contactSubtitle')
  private contactSubtitle!: ElementRef<HTMLParagraphElement>;
  @ViewChild('contactFormGroup')
  private contactFormGroup!: ElementRef<HTMLDivElement>;
  
  ngOnInit(): void {
    this.initializeForm();
    console.log(this.contactForm.controls);
  }

  ngAfterViewInit(): void {
    this.contactAnimation();
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
    this.isSending = true;
    this.contactService.sendMessage(this.contactForm.value).subscribe({
      error: () => {
        this.isSending = false;
      },
      complete: () => {
        this.isSending = false;
        this.contactForm.reset();
        this.toastr.showSuccessToast('Success', 'Form submitted!');
      }
    })
  }

  private contactAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.contactTitle.nativeElement, {
      scrollTrigger: {
        trigger: this.contactTitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 200,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(this.contactSubtitle.nativeElement, {
      scrollTrigger: {
        trigger: this.contactSubtitle.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      x: 200,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(this.contactFormGroup.nativeElement, {
      scrollTrigger: {
        trigger: this.contactFormGroup.nativeElement,
        end: 'bottom center',
        scrub: true,
      },
      scale: 0,
      opacity: 0,
      ease: "power2.out",
    });
  }
}