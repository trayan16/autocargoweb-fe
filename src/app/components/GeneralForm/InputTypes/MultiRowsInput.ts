import { FormInputBase } from './FormInputBase';

export class MultiRowsInput extends FormInputBase<string> {
  controlType = 'multi-rows';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
