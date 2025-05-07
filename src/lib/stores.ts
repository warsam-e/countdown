import { persisted } from 'svelte-persisted-store';
import { get, readable, writable, type Readable } from 'svelte/store';
import type { CountdownItem } from './types';

export const overlay_count = writable(0);

export const current_time = readable(new Date(), (set) => {
	const interval = setInterval(() => set(new Date()), 1000);
	return () => clearInterval(interval);
});

export const items = persisted<CountdownItem[]>('items', [], {
	syncTabs: true,
	storage: 'local',
});

export const store_val = <T>(store: Readable<T>) => get<T>(store);
