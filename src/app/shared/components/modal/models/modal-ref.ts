import { ComponentRef } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    console.log('close called');
    this.componentRef.destroy();
  }
}
