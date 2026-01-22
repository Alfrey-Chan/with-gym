import styles from "./ProgressPage.module.css";
import { useState, useEffect } from "react";
import sampleData from "../../data/mock_progress.json";
import EventLevelCard from "../../components/EventLevelCard/EventLevelCard";
import type {
	EventCategory,
	Level,
	LevelSystem,
	SkillItem,
} from "../../types/event";

function ProgressPage() {
	const [events] = useState(sampleData.events); // TODO:: retrieve from api
	const [selectedEvent, setSelectedEvent] = useState<EventCategory>("mat");

	const current = events.find((e) => e.event === selectedEvent);
	const kyuData = current?.systems.kyu ?? [];
	const danData = current?.systems.dan ?? [];

	const [sort, setSort] = useState("昇順 (Low to High)");
	const [selectedSystems, setSelectedSystems] = useState({
		kyu: true,
		dan: true,
	});

	function handleSort(): void {
		kyuData?.reverse();
		danData?.reverse();

		sort === "昇順 (Low to High)"
			? setSort("降順 (High to Low)")
			: setSort("昇順 (Low to High)");
	}

	return (
		<div className={styles.page}>
			<div className={styles.eventCategoryButtons}>
				<button
					className={`${styles.eventCategoryButton} ${selectedEvent === "mat" ? styles.active : ""}`}
					onClick={() => setSelectedEvent("mat")}
				>
					マット
				</button>
				<button
					className={`${styles.eventCategoryButton} ${selectedEvent === "vault" ? styles.active : ""}`}
					onClick={() => setSelectedEvent("vault")}
				>
					跳び箱
				</button>
				<button
					className={`${styles.eventCategoryButton} ${selectedEvent === "bar" ? styles.active : ""}`}
					onClick={() => setSelectedEvent("bar")}
				>
					鉄棒
				</button>
			</div>

			<div className={styles.filterRow}>
				<div className={styles.levelFilters}>
					<button
						className={`${styles.levelFilter} ${selectedSystems.kyu ? styles.activeLevel : ""}`}
						onClick={() =>
							setSelectedSystems((prev) => ({ ...prev, kyu: !prev.kyu }))
						}
					>
						<span className={styles.dot}></span>級 (Kyu)
					</button>
					<button
						className={`${styles.levelFilter} ${selectedSystems.dan ? styles.activeLevel : ""}`}
						onClick={() =>
							setSelectedSystems((prev) => ({ ...prev, dan: !prev.dan }))
						}
					>
						<span className={styles.dot}></span>段 (Dan)
					</button>
				</div>

				{/* Sort filter */}
				<button className={styles.sortButton} onClick={() => handleSort()}>
					{sort}
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path d="M5.47719 7.96225C5.1802 8.25099 5.17351 8.72582 5.46225 9.02281C5.75099 9.3198 6.22582 9.32649 6.52281 9.03775L5.47719 7.96225ZM9.6 5H10.35C10.35 4.69857 10.1695 4.42644 9.89188 4.30913C9.61422 4.19182 9.29331 4.25214 9.07719 4.46225L9.6 5ZM8.85 19C8.85 19.4142 9.18579 19.75 9.6 19.75C10.0142 19.75 10.35 19.4142 10.35 19H8.85ZM18.5228 16.0377C18.8198 15.749 18.8265 15.2742 18.5377 14.9772C18.249 14.6802 17.7742 14.6735 17.4772 14.9623L18.5228 16.0377ZM14.4 19H13.65C13.65 19.3014 13.8305 19.5736 14.1081 19.6909C14.3858 19.8082 14.7067 19.7479 14.9228 19.5377L14.4 19ZM15.15 5C15.15 4.58579 14.8142 4.25 14.4 4.25C13.9858 4.25 13.65 4.58579 13.65 5H15.15ZM6.52281 9.03775L10.1228 5.53775L9.07719 4.46225L5.47719 7.96225L6.52281 9.03775ZM8.85 5V19H10.35V5H8.85ZM17.4772 14.9623L13.8772 18.4623L14.9228 19.5377L18.5228 16.0377L17.4772 14.9623ZM15.15 19V5H13.65V19H15.15Z" />
					</svg>
				</button>
			</div>

			{/* Main content */}
			<div className={styles.progressCards}>
				{/* Dan */}
				{selectedSystems.dan &&
					danData.length > 0 &&
					danData.map((data) => {
						const level: Level = {
							id: data.id,
							system: data.system as LevelSystem, // declare API types later
							levelNumber: data.levelNumber,
							status: data.status,
							title: data.title_ja,
							skills: (data.skills ?? []).map(
								(s: any): SkillItem => ({
									id: s.id,
									name: s.description_ja,
									pass: s.status === "passed",
								}),
							),
						};
						return <EventLevelCard key={data.id} level={level} />;
					})}

				{/* Kyu */}
				{selectedSystems.kyu &&
					kyuData.length > 0 &&
					kyuData.map((data) => {
						const level: Level = {
							id: data.id,
							system: data.system as LevelSystem, // declare API types later
							levelNumber: data.levelNumber,
							status: data.status,
							title: data.title_ja,
							skills: (data.skills ?? []).map(
								(s: any): SkillItem => ({
									id: s.id,
									name: s.description_ja,
									pass: s.status === "passed",
								}),
							),
						};
						return <EventLevelCard key={data.id} level={level} />;
					})}
			</div>
		</div>
	);
}

export default ProgressPage;
