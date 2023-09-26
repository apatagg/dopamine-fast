import { ContentAction } from '../../../shared/models/content/ContentAction';
import { BackgroundResponse } from '../../../shared/models/background/BackgroundResponse';

export function sendToContent(
  action: ContentAction,
  query: chrome.tabs.QueryInfo = { active: true, currentWindow: true }
): Promise<BackgroundResponse> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query(query, (tabs) => {
      if (tabs.length === 0) {
        reject('No active tab found');
        return;
      }

      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, action, (response) => {
          if (!response) {
            reject('Tab is not active');
            return;
          }

          resolve(response);
        });
      });
    });
  });
}
