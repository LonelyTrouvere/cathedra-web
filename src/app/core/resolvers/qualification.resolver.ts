import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { QualificationsService } from '../services/qualifications.service';
import { QualificationFiltersDTO } from '../dto/qualification-filters-dto';

export const qualificationsResolver = (route: ActivatedRouteSnapshot) => {
  const params: QualificationFiltersDTO = {};
  if (route.queryParamMap.has('degree')) {
    params.degree = route.queryParamMap.get('degree') as any;
  }
  if (route.queryParamMap.has('startYear')) {
    params.startYear = Number(route.queryParamMap.get('startYear'));
  }
  if (route.queryParamMap.has('endYear')) {
    params.endYear = Number(route.queryParamMap.get('endYear'));
  }

  const qualificationsService = inject(QualificationsService);
  return qualificationsService.getQualifications(params);
};
