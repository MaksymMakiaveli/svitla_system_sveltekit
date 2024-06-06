import type { Translations } from '$lib/shared/context';

export async function load() {
	const translations: Translations = {
		en: {
			shop_now: 'Show Now',
			white_dress: 'White loose dress',
			next: 'Next',
			previous: 'Previous',
			page_title: 'Summer',
			page_subtitle: 'Summer <br/> Collection <br/> 2020'
		},
		fr: {
			shop_now: 'Afficher maintenant',
			white_dress: 'Robe ample blanche',
			next: 'Suivant',
			previous: 'Précédent',
			page_title: 'Été',
			page_subtitle: "Collection <br/> d'été <br/> 2020"
		}
	};

	return {
		translations
	};
}
