export type EventCategory = "mat" | "vault" | "bar";
export type LevelStatus = "completed" | "in_progress" | "not_started";
export type LevelSystem = "kyu" | "dan";

export type SkillItem = {
	id: string;
	name: string;
	pass: boolean;
};

export type Level = {
	id: string;
	system: LevelSystem;
	levelNumber: number;
	status: string;
	title: string;
	skills: SkillItem[];
};

export type EventProgress = {
	event: EventCategory;
	levels: Level[];
};
