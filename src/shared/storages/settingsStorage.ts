import {
  BaseStorage,
  createStorage,
  StorageType,
} from "@src/shared/storages/base";
import { DefaultSettings, Settings, SettingsType } from '../models/Settings';

type SettingsStorage = BaseStorage<Settings> & {
  toggleSetting: (settingKey: SettingsType) => void;
};

const storage = createStorage<Settings>("settings-storage", DefaultSettings, {
  storageType: StorageType.Local,
});

const settingsStorage: SettingsStorage = {
  ...storage,
  // TODO: extends your own methods
  toggleSetting: (settingKey) => {
    storage.set((settings) => {
      return {...settings, [settingKey]: !settings[settingKey]};
    });
  },
};

export default settingsStorage;
