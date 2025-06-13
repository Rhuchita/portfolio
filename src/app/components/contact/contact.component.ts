import { Component } from '@angular/core';
import { ContactFormData, ContactService } from '../../core/services/contact.service';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitting = false;
  submissionSuccess = false;
  submissionError = false;
  constructor(private fb: FormBuilder, private contactService: ContactService) { }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  get f() {
    return this.contactForm.controls;
  };
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.submissionSuccess = false;
    this.submissionError = false;
    const formData: ContactFormData = this.contactForm.value;
    this.contactService.submitContactForm(formData).subscribe({
      next: () => {
        this.submitting = false;
        this.submissionSuccess = true;
        this.contactForm.reset();
      },
      error: () => {
        this.submitting = false;
        this.submissionError = true;
      }
    });
  }
}
