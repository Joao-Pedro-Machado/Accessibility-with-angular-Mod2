import {
  Component,
  HostBinding,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from 'src/app/shared/animations/fade';
import { ModalRef } from 'src/app/shared/components/modal/models/modal-ref';
import { ModalService } from 'src/app/shared/components/modal/service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade],
})
export class AppComponent implements OnInit {
  title = 'a11y-p2';

  @HostBinding('@fade') fade = true;
  public firstName = 'Johnny';
  public modalRef: ModalRef;
  public info = false;
  public form: FormGroup;

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false],
    });
  }

  public showModal() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.closeModal();
  }

  public closeModal() {
    this.modalRef.close();
  }
}
