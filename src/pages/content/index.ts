import { backgroundListener } from './actions/backgroundListener';

console.log('content loaded');

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import('./components/Demo');

chrome.runtime.onMessage.addListener(backgroundListener);
