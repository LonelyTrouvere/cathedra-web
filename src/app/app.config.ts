import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from './core/error-handler.interceptor';
import { apiPrefixInterceptor } from './core/api-prefix.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([errorHandlerInterceptor, apiPrefixInterceptor]),
      withFetch(),
    ),
  ]
};
