import { FormInputBase } from './FormInputBase';

export class ButtonInput extends FormInputBase<string> {
  controlType = 'button';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
