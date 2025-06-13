import { Injectable } from '@angular/core';
import {HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, from, never } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { error } from 'console';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private serviceID = 'YOUR_EMAILJS_SERVICE_ID';
  private templateID = 'YOUR_EMAILJS_TEMPLATE_ID';
  private userID = 'YOUR_EMAILJS_USER_ID';
  constructor() { }
  
  submitContactForm(formData: ContactFormData): Observable<EmailJSResponseStatus> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    // Send email via EmailJS and return as Observable
    return from(emailjs.send(this.serviceID, this.templateID, templateParams, this.userID));
  }
}

