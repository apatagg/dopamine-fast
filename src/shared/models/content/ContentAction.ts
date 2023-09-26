export interface ContentAction {
  type: ContentActionType;
  data?: any;
}

export type ContentActionType = 'testToContent';
