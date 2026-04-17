import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  if (
    !req.url.startsWith('http') &&
    !req.url.startsWith('https') &&
    !req.url.includes('.svg')
  ) {
    const modifiedReq = req.clone({
      url: `${environment.apiUrl}${req.url}`,
    });

    return next(modifiedReq);
  }

  return next(req);
};
