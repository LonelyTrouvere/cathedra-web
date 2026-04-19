import { Component, ElementRef, input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MagnifyingGlass } from '../svg/magnifying-glass/magnifying-glass';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [MagnifyingGlass],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.scss',
})
export class Searchbar implements OnInit, OnDestroy {
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;
  form_control = input<FormControl>();

  ngOnInit() {
    this.input.nativeElement.addEventListener('input', () => {
      if (this.form_control()) {
        this.form_control()!.setValue(this.input.nativeElement.value);
      }
    });
  }

  ngOnDestroy() {
    this.input.nativeElement.removeEventListener('input', () => {});
  }
}
