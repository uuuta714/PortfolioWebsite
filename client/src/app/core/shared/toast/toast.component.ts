import { Component, inject, OnInit } from '@angular/core';
import { Toast, ToastService } from '../../../_service/toast.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit{
  toasts: Toast[] = [];
  toastService = inject(ToastService);

  ngOnInit() {
    this.toastService.toasts$.subscribe((toasts) => {
      this.toasts = toasts;
    })
  }
}
