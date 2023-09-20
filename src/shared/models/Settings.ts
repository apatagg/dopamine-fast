export interface Settings {
    blurAllMedia: boolean;
}

export const DefaultSettings: Settings = {
    blurAllMedia: false,
}

export type SettingsType = keyof Settings;
