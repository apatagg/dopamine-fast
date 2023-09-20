import React, { useState } from "react";
import "@pages/options/Options.css";
import '@mantine/core/styles.css';

import { AppShell, Button, Group, MantineProvider, ScrollArea, Text } from '@mantine/core';
import { IconSettingsCog } from '@tabler/icons-react';
import GeneralOptions from './General/GeneralOptions';

type OpenSettings = 'General'
const Options: React.FC = () => {
    const [openSettings, setOpenSettings] = useState<OpenSettings>('General');

    return (
        <MantineProvider>
        <AppShell
            header={ { height: 60 } }
            navbar={ { width: 300, breakpoint: 'sm' } }
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Text size="md" ml="sm"> DopamineFast </Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <AppShell.Section grow my="md" component={ ScrollArea }>
                  <Button leftSection={<IconSettingsCog size={14} />} variant="subtle" fullWidth onClick={() => setOpenSettings('General')}>
                    Settings
                  </Button>
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{
                openSettings === 'General' ? <GeneralOptions/>
                    : <div>Other</div>
            }</AppShell.Main>
        </AppShell>
        </MantineProvider>);
};

export default Options;
