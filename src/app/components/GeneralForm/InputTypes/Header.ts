import { FormInputBase } from './FormInputBase';

export class Header extends FormInputBase<string> {
  controlType = 'header';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
