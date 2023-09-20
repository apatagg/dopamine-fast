import React, { useEffect, useState } from "react";
import { Container, Switch } from '@mantine/core';
import useStorage from '../../../shared/hooks/useStorage';
import settingsStorage from '../../../shared/storages/settingsStorage';

const GeneralOptions: React.FC = () => {
    const settings = useStorage(settingsStorage);

    return (
        <Container fluid h={50}>
            General settings tab
            <Switch
                checked={settings.blurAllMedia} onChange={(event) => settingsStorage.toggleSetting('blurAllMedia')}
                label="Blur all media"
            />
        </Container>
    );
};

export default GeneralOptions;
