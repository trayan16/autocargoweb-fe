import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormInputBase } from './InputTypes/FormInputBase';
import { DialogService } from '../../services/dialog.service';
import { DialogFormComponent } from '../Dialog/DialogForm/DialogForm.component';

@Component({
  selector: 'app-input',
  templateUrl: './GeneralFormInput.component.html',
  styleUrls: ['./GeneralFormInput.component.scss']
})
export class GeneralFormInputComponent implements OnInit {
  constructor(public dialogService: DialogService, private ref: ChangeDetectorRef) {}
  @Input() item: FormInputBase<string>;
  @Input() form: FormGroup;
  
  get isValid() { return this.form.controls[this.item.key].valid; }
  ngOnInit() {
    if (this.item.validators.length > 0) {
      this.item.required = true;
    }
  }
  addMultiRow = (formGroup) => {
    const formAstraUrls = this.form.get(formGroup) as FormArray;
    if (this.item.maxRows >= formAstraUrls.length) {
      formAstraUrls.push(new FormControl());
    }
  }
  removeMultiRow = (formGroup, index) => {
    const formAstraUrls = this.form.get(formGroup) as FormArray;
    formAstraUrls.removeAt(index);
  }
  drop(formGroup, event: CdkDragDrop<string[]>) {
    const rows = this.form.get(formGroup) as FormArray;
    const formAstraUrls = this.form.controls[formGroup]['controls'];
    moveItemInArray(formAstraUrls, event.previousIndex, event.currentIndex);
    const newOrder = formAstraUrls.map(url => url.value);
    rows.setValue(newOrder);
  }
  onClickField = () => {
    this.item.onClick(this.form);
  }
  onClickAstra(formControl: FormControl) {
    this.item.onClickAstraField(this.form, formControl);
  }
  onButtonClick = () => {
    this.item.onClick(this.form);
    this.ref.detectChanges();
  }
  onChange(event) {
    this.item.onChange(this.form, event);
  }
}
