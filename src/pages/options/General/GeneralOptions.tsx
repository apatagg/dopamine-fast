import React from 'react';
import { Container, Switch } from '@mantine/core';
import useStorage from '../../../shared/hooks/useStorage';
import settingsStorage from '../../../shared/storages/settingsStorage';

const GeneralOptions: React.FC = () => {
  const settings = useStorage(settingsStorage);

  return (
    <Container fluid h={50}>
      General settings tab
      <Switch
        checked={settings.blurAllMedia}
        onChange={(event) => settingsStorage.toggleSetting('blurAllMedia')}
        label="Blur all media"
      />
      <Switch
        checked={settings.desaturateAllContent}
        onChange={(event) =>
          settingsStorage.toggleSetting('desaturateAllContent')
        }
        label="Desaturate all content"
      />
    </Container>
  );
};

export default GeneralOptions;
