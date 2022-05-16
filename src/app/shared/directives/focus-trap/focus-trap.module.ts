import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FocusTrapDirective } from 'src/app/shared/directives/focus-trap/focus-trap.directive';

@NgModule({
  declarations: [FocusTrapDirective],
  imports: [CommonModule],
  exports: [FocusTrapDirective]
})
export class FocusTrapModule {}
