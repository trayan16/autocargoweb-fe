export interface IActionItem {
    label: string;
    action: any;
    className?: string;
  }
export interface ActionItems extends Array<IActionItem>{}