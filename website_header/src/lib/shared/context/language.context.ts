import { type Writable, writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';

export const LANG = {
	EN: 'en',
	FR: 'fr'
} as const;

export type Languages = (typeof LANG)[keyof typeof LANG];

export type TranslationDictionary = Record<
	'shop_now' | 'white_dress' | 'next' | 'previous' | 'page_title' | 'page_subtitle',
	string
>;

export type Translations = {
	[key in Languages]: TranslationDictionary;
};

type LanguageContext = Writable<{
	translations: TranslationDictionary;
	language: Languages;
}>;

const CONTEXT_KEY = 'language';

export function setLanguageContext() {
	const language = writable<Languages>(LANG.EN);
	setContext(CONTEXT_KEY, language);
}

export function getLanguageContext() {
	return getContext<Writable<Languages>>(CONTEXT_KEY);
}
