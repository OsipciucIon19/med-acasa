import { createApp } from './app.js';
import { config, validateRuntimeConfig } from './config.js';

validateRuntimeConfig();

const app = createApp();

app.listen(config.port, () => {
  console.info(`Med Acasa API listening on port ${config.port}`);
});
