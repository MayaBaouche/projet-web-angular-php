import { Directive, ElementRef, HostListener, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Directive({
  selector: '[field-error]'
})
export class FormErrorDirective {
 constructor(private el: ElementRef) {
   this.el.nativeElement.style.color = 'red';
  }
}