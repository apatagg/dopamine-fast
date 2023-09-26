import { BackgroundAction } from '../../../shared/models/background/BackgroundAction';
import { BackgroundResponse } from '../../../shared/models/background/BackgroundResponse';

export function sendToBackground(
  action: BackgroundAction
): Promise<BackgroundResponse> {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(action, (response: BackgroundAction) => {
      if (response) {
        resolve(response);
      } else {
        reject('Something wrong');
      }
    });
  });
}
