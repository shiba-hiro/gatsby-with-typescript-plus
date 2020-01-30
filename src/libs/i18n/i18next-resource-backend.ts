/* eslint-disable @typescript-eslint/no-empty-function */

import { BackendModule } from 'i18next';

import en from './locales/en/gatsby-with-typescript-plus.json';
import ja from './locales/ja/gatsby-with-typescript-plus.json';

const ResourceBackend: BackendModule = {
  type: 'backend',
  init(): void { },
  read(language: string, _, callback: Function): void {
    switch (language) {
      case 'ja':
        callback(null, ja);
        break;
      case 'en':
      default:
        callback(null, en);
        break;
    }
  },
  create(): void { },
};

export default ResourceBackend;
