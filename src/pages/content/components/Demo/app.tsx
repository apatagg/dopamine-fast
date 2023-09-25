import { useEffect } from 'react';
import useStorage from '../../../../shared/hooks/useStorage';
import settingsStorage from '../../../../shared/storages/settingsStorage';
import {
  desaturateAllContent,
  removeDesaturateAllContent,
} from '../../utils/desaturateAllContent';
import { blurAllMedia, removeBlurAllMedia } from '../../utils/blurAllMedia';

export default function App() {
  const settings = useStorage(settingsStorage);

  useEffect(() => {
    settings.desaturateAllContent
      ? desaturateAllContent()
      : removeDesaturateAllContent();
  }, [settings.desaturateAllContent]);

  useEffect(() => {
    settings.blurAllMedia ? blurAllMedia() : removeBlurAllMedia();
  }, [settings.blurAllMedia]);

  return <></>;
}
