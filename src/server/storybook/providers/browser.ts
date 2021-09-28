import cluster, { isMaster, workers } from 'cluster';
import { isWorkerMessage } from '../../../types';
import type { Config, SetStoriesData, StoryInput, WorkerMessage } from '../../../types';
import { loadStoriesFromBrowser } from 'src/server/selenium';

// TODO Get a browser
// TODO Connect to storybook
// TODO Call a storybook api

// Hot-reload
// TODO Use workers for it
// TODO Use separate message type for workers
export async function loadStories(
  config: Config,
  { watch, debug }: { watch: boolean; debug: boolean },
  storiesListener: (stories: { [browser: string]: Map<string, StoryInput[]> }) => void,
): Promise<{ [browser: string]: SetStoriesData }> {
  if (isMaster) {
    workers;
    // TODO look at each worker, get tests and browser key => merge => profit => subscribe if watch is true
  } else {
    return loadStoriesFromBrowser({ watch }, storiesListener);
  }
}
