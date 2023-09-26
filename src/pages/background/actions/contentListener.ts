import { BackgroundResponse } from '../../../shared/models/background/BackgroundResponse';
import { ContentAction } from '../../../shared/models/content/ContentAction';

export function contentListener(
  request: ContentAction,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: BackgroundResponse) => void
): boolean | void {
  switch (request.type) {
    case 'testToContent':
      console.log('testToContent', request.data);
      break;
    default:
      sendResponse({ error: 'Unknown action type' });
      break;
  }
}
