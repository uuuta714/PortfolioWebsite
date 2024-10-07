import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
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
              console.log(error.error, error.status)
            }
            break;
          case 404:
            console.log('Not Found', error.status);
            break;
          case 500:
            console.log('Server Error', error.status);
            break;
          default:
            console.log('Something Unexpected');
            break;
        }
      }
      throw error;
    })
  )
};
