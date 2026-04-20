import { inject } from "@angular/core";
import { PositionsService } from "../services/positions.service";

export const positionsResolver = () => {
  const positionsService = inject(PositionsService);
  return positionsService.getPositions();
};