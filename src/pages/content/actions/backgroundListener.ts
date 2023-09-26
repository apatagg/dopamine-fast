import { ContentAction } from '../../../shared/models/content/ContentAction';
import { BackgroundResponse } from '../../../shared/models/background/BackgroundResponse';
import { sendToContent } from '../../background/actions/sendToContent';
import { BackgroundAction } from '../../../shared/models/background/BackgroundAction';

export function backgroundListener(
  request: BackgroundAction,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: BackgroundResponse) => void
) {
  switch (request.type) {
    case 'testToBackground':
      console.log('testFromContent', request.data);
      sendResponse({ data: 'testFromContent works' });

      sendToContent({
        type: 'testToContent',
        data: 'testFromBackground works',
      });
      break;
    default:
      sendResponse({ error: 'Unknown action type' });
      break;
  }
}
