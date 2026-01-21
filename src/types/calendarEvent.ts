export type ClassCategory =
	| "examPrep"
	| "toddler"
	| "toddlerElementary"
	| "preschool"
	| "elementary"
	| "elementaryMiddle"
	| "acrobat";

export type CalendarEvent = {
	id: string;
	category: ClassCategory;
	label: string;
	subLabel?: string;
	ageGroup?: string;
	dayIndex: number; // 0=月, 1=火, ... 6=日
	startTime: string; // 10:45
	endTime: string; // 11:45
	isConfirmed: boolean;
};
