import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from 'src/app/shared/components/modal/models/modal-ref';
import { ModalService } from 'src/app/shared/components/modal/service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a11y-p2';

  public firstName = 'João Pedro';
  public modalRef: ModalRef;

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  constructor(private modalService: ModalService) {}

  public showModal() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public closeModal() {
    this.modalRef.close();
  }
}
