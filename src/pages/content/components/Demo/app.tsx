import { useEffect } from "react";
import useStorage from '../../../../shared/hooks/useStorage';
import settingsStorage from '../../../../shared/storages/settingsStorage';

export default function App() {
  const settings = useStorage(settingsStorage);

  useEffect(() => {
    console.log('HAS UPDATED blurAllMedia', settings)
  }, [settings.blurAllMedia]);

  return <div className="text-lime-400">content view</div>;
}
