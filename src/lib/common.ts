import { parseDate } from 'chrono-node';
import { items, store_val } from './stores';
import type { CountdownItem } from './types';

export const parse_time = (str: string, origin?: Date) => parseDate(str, origin);

export function countdown_from(date: Date, current: Date) {
	const diff = date.getTime() - current.getTime();
	let seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	seconds %= 60; // Remaining seconds
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60; // Remaining minutes
	const days = Math.floor(hours / 24);
	const remainingHours = hours % 24; // Remaining hours
	const weeks = Math.floor(days / 7);
	const remainingDays = days % 7; // Remaining days
	const months = Math.floor(days / 30);
	const remainingWeeks = weeks % 4; // Approximate remaining weeks
	const years = Math.floor(days / 365);

	const parts: string[] = [];
	if (years > 0) parts.push(`${years}y`);
	if (months > 0) parts.push(`${months}mo`);
	if (remainingWeeks > 0) parts.push(`${remainingWeeks}w`);
	if (remainingDays > 0) parts.push(`${remainingDays}d`);
	if (remainingHours > 0) parts.push(`${remainingHours}h`);
	if (remainingMinutes > 0) parts.push(`${remainingMinutes}m`);
	if (seconds > 0) parts.push(`${seconds}s`);
	return parts.join(', ');
}

function make_id() {
	let id = crypto.randomUUID();
	while (store_val(items).some((item) => item.id === id)) {
		id = crypto.randomUUID();
	}
	return id;
}

export const create_item = (data: Omit<CountdownItem, 'id'>) =>
	items.update((i) => [{ id: make_id(), ...data }, ...i].toSorted((a, b) => b.created_at - a.created_at));

export const remove_item = (id: string) => items.update((i) => i.filter((item) => item.id !== id));
