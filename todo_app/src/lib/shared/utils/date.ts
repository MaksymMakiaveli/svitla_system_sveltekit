const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getCurrentDateInfo() {
	const currentDate = new Date();
	const day = DAYS[currentDate.getDay()];
	const month = MONTHS[currentDate.getMonth()];
	const dayNumber = currentDate.getDate();

	return {
		day: day,
		month: month,
		dayNumber: dayNumber
	};
}
