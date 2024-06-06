// See https://kit.svelte.dev/docs/types#app
// for information about these types

import type { Translations } from '$lib/shared/context';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			translations: Translations;
		}

		// interface PageState {}
		// interface Platform {}
	}
}

export {};
