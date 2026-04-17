import { Component } from '@angular/core';
import { Link } from "../core/components/link/link";

@Component({
  selector: 'app-server-error-page',
  imports: [Link],
  templateUrl: './server-error-page.html',
  styleUrl: './server-error-page.scss',
})
export class ServerErrorPage {}
