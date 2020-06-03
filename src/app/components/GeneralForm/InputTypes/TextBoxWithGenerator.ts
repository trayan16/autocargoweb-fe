import { FormInputBase } from './FormInputBase';

export class TextboxWithGenerator extends FormInputBase<string> {
  controlType = 'textbox-with-generator';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
