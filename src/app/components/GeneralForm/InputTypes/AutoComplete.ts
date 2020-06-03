import { FormInputBase } from './FormInputBase';

export class Autocomplete extends FormInputBase<string> {
  controlType = 'autocomplete';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}