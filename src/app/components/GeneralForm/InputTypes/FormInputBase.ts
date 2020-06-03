export class FormInputBase<T> {
    value: any;
    key: string;
    label: string;
    required: boolean;
    hidden: boolean;
    disabled: boolean;
    order: number;
    controlType: string;
    type: string;
    class: string;
    tooltip: string;
    options: {key: string, value: string}[];
    rowPlaceholder: string;
    maxRows: number;
    actionButtonClick: any;
    form: any;
    connectedField: string;
    validators?: any;
    afterGenerate: (value) => any;
    onClick: (value) => any;
    onClickAstraField?: (formGroup, formControl) => any;
    onChange: (formGroup, formControl) => any;
    constructor(options: {
        value?: any,
        key?: string,
        label?: string,
        required?: boolean,
        hidden?: boolean;
        disabled?: boolean;
        order?: number,
        controlType?: string,
        type?: string
        class?: string
        rowPlaceholder?: string,
        actionButtonClick?: any,
        maxRows?: number
        onChange?: (value) => any;
        form?: any;
        connectedField?: string;
        tooltip?: string;
        validators?: any;
        afterGenerate?: (value) => any;
        onClick?: (value) => any;
        onClickAstraField?: (formGroup, formControl) => any;
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.hidden = !!options.hidden;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.class = options.class || '';
      this.rowPlaceholder = options.rowPlaceholder || '';
      this.actionButtonClick = options.actionButtonClick || '';
      this.maxRows = options.maxRows || 5;
      this.disabled = options.disabled || false;
      this.onChange = options.onChange || function() {};
      this.form = options.form || '';
      this.tooltip = options.tooltip || '';
      this.afterGenerate = options.afterGenerate || function() {};
      this.onClick = options.onClick || function() {};
      this.onClickAstraField = options.onClickAstraField || function() {};
      this.connectedField = options.connectedField || '';
      this.validators = options.validators || [];
    }
  }
