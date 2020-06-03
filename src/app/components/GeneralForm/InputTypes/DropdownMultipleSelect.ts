import { FormInputBase } from './FormInputBase';

export class DropdownMultipleSelect extends FormInputBase<string> {
  controlType = 'dropdown-multiple-select';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}