import { useEffect } from "react";
import useStorage from '../../../../shared/hooks/useStorage';
import settingsStorage from '../../../../shared/storages/settingsStorage';

export default function App() {
  const settings = useStorage(settingsStorage);

  useEffect(() => {
    if(settings.blurAllMedia) {
      document.body.classList.add('blur-all-media');
    } else {
      document.body.classList.remove('blur-all-media');
    }
  }, [settings.blurAllMedia]);

  return <div className="text-lime-400">content view</div>;
}
