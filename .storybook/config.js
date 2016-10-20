import { configure } from '@kadira/storybook';

function loadStories() {
  require('../imports/ui/stories/index.js');
}

configure(loadStories, module);
