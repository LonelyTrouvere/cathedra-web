import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from '../core/services/program.service';
import {
  Program,
  ProgramDegree,
  ProgramDegreeDescriptionViewObject,
  ProgramDegreeNameViewObject,
  ProgramDocumentType,
} from '../core/entity/program';
import { Divider } from "../core/components/divider/divider";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-program-page',
  imports: [Divider],
  templateUrl: './program-page.html',
  styleUrl: './program-page.scss',
})
export class ProgramPage {
  env = environment;

  curriculums: Program[] = [];
  syllabuses: Program[] = [];
  programsList: Program[] = [];

  degree: ProgramDegree;
  programDocumentType = ProgramDocumentType;
  programName = ProgramDegreeNameViewObject;
  programDescription = ProgramDegreeDescriptionViewObject;

  constructor(
    protected route: ActivatedRoute,
    protected programsService: ProgramsService,
    protected cdr: ChangeDetectorRef
  ) {
    this.degree = route.snapshot.params['degree'];
    programsService.getPrograms(this.degree).subscribe((programs) => {
      this.curriculums = programs.filter((p) => p.documentType === ProgramDocumentType.CURRICULUM);
      this.syllabuses = programs.filter((p) => p.documentType === ProgramDocumentType.SYLLABUS);
      this.programsList = programs.filter((p) => p.documentType === ProgramDocumentType.PROGRAM);
      this.cdr.markForCheck();
    });
  }
}
