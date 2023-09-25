export interface Settings {
  blurAllMedia: boolean;
  desaturateAllContent: boolean;
}

export const DefaultSettings: Settings = {
  blurAllMedia: false,
  desaturateAllContent: false,
};

export type SettingsType = keyof Settings;
