import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControlService } from '../../services/form-control.service';
import { SidebarService } from '../../services/sidebar.service'
import { FormGroup, FormControl } from '@angular/forms';
import { FormInputBase } from './InputTypes/FormInputBase';
@Component({
    selector: 'app-general-form',
    templateUrl: './GeneralForm.component.html',
    styleUrls: ['./GeneralForm.component.scss'],
    providers: [ FormControlService ]
  })
  export class GeneralFormComponent implements OnInit {
    @Output() formSubmit: EventEmitter<any> = new EventEmitter();
    @Input() data: FormInputBase<string>[] = [];
    @Input() showActions = false;
    form: FormGroup;
    payLoad = '';
    @Input() actions = [];
    constructor(private fcs: FormControlService, public sidebarService: SidebarService) {  }

    ngOnInit() {
      this.form = this.fcs.toFormGroup(this.data);
    }

    emitFormSubmit() {
      this.formSubmit.emit(this.form);
    }
  }
