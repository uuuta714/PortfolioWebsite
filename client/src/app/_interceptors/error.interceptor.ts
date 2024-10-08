import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import { ToastService } from '../_service/toast.service';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastService);

  return next(req).pipe(
    catchError(error => {
      if (error) {
        switch (error.status) {
          case 400:
            if (error.error.errors) {
              const modalStateErrors = [];
              for (const key in error.error.errors) {
                if (error.error.errors[key]) {
                  modalStateErrors.push(error.error.errors[key])
                }
              }
              throw modalStateErrors.flat();
            } else {
              toastr.showErrorToast(error.error, error.status);
            }
            break;
          case 404:
            toastr.showErrorToast(error.status, 'Not Found');
            break;
          case 500:
            toastr.showErrorToast(error.status, 'Server Error');
            break;
          default:
            toastr.showErrorToast(error.status, 'Something Unexpected');
            break;
        }
      }
      throw error;
    })
  )
};
