import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { FormInputBase } from '../components/GeneralForm/InputTypes/FormInputBase';

@Injectable()
export class FormControlService {
  constructor() { }

  toFormGroup(items: FormInputBase<string>[] ) {
    const group: any = {};

    items.forEach(item => {
      group[item.key] = item.validators ? new FormControl(item.value || '', item.validators) : new FormControl(item.value || null);
      switch (item.controlType) {
        case 'multi-rows': {
          const itemValues = item.value;
          const formControls = [];
          if (itemValues) {
           itemValues.map(url => {
             formControls.push(new FormControl(url));
           });
         } else {
           formControls.push(new FormControl(''));
         }
          group[item.key] = new FormArray(formControls);
          break;
        }
        case 'dropdown-multiple-select':
        case 'dropdown':
        case 'autocomplete': {
          group[item.key].options = item.options;
          break;
        }
        default: {
          group[item.key] = item.validators ? new FormControl(item.value || '', item.validators) : new FormControl(item.value || null);
          break;
        }
      }
    });
    return new FormGroup(group);
  }
}
