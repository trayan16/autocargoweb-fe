import { FormInputBase } from './FormInputBase';

export class Switch extends FormInputBase<string> {
  controlType = 'switch';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
