import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ToastTypes {
  Success = 'success',
  Error = 'error'
}

export interface Toast {
  id: number;
  title: string;
  message: string;
  type: ToastTypes;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastCounter = 0;
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();

  showSuccessToast(title: string, message: string, duration: number = 5000) {
    this.showToast(title, message, ToastTypes.Success, duration);
  }

  showErrorToast(title: string, message: string, duration: number = 5000) {
    this.showToast(title, message, ToastTypes.Error, duration);
  }

  private showToast(title: string, message: string, type: ToastTypes, duration: number) {
    const toast: Toast = {
      id: this.toastCounter++,
      title,
      message,
      type,
    };
    const currentToasts = this.toastsSubject.getValue();
    this.toastsSubject.next([...currentToasts, toast]);
    console.log("alert alert-"+toast.type)

    setTimeout(() => this.removeToast(toast.id), duration);
  }

  private removeToast(id: number) {
    const currentToasts = this.toastsSubject.getValue().filter(toast => toast.id !== id);
    this.toastsSubject.next(currentToasts);
  }
}
