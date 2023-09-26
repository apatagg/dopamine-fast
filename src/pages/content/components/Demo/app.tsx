import { useEffect } from 'react';
import useStorage from '../../../../shared/hooks/useStorage';
import settingsStorage from '../../../../shared/storages/settingsStorage';
import { sendToBackground } from '../../actions/sendToBackground';

export default function App() {
  const settings = useStorage(settingsStorage);

  useEffect(() => {
    if(settings.blurAllMedia) {
      document.body.classList.add('blur-all-media');
    } else {
      document.body.classList.remove('blur-all-media');
    }
  }, [settings.blurAllMedia]);

  return (
    <>
      <div
        onClick={() =>
          sendToBackground({ type: 'testToBackground', data: 'test' })
        }
      >
        Click to send to back
      </div>
    </>
  );
}
