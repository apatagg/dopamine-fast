export interface BackgroundAction {
  type: BackgroundActionType;
  data?: any;
}

export type BackgroundActionType = 'testToBackground';
