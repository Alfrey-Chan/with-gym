import styles from "./EventLevelCard.module.css";
import { type Level, type SkillItem } from "../../types/event";

type EventLevelCardProps = {
	level: Level;
};

function EventLevelCard({ level }: EventLevelCardProps) {
	// const levelComplete = !!level.isComplete;
	const skillItems = level.skills ?? [];
	const levelStatus = level.status;
	console.log(level);

	const statusMap: Record<string, string> = {
		completed: "完了",
		in_progress: "挑戦中",
		not_started: "",
	};

	return (
		<article className={`${styles.card} ${styles[levelStatus]}`}>
			<header className={styles.header}>
				<h3 className={styles.level}>
					{level.levelNumber}
					{level.system === "kyu" ? "級" : "段"}
				</h3>

				<span className={styles.statusLabel}>{statusMap[levelStatus]}</span>
			</header>
			<div className={styles.main}>
				<h4 className={styles.levelTitle}>{level.title}</h4>
				<ul className={styles.skillsList}>
					{skillItems.length > 0 ? (
						skillItems.map((skill: SkillItem) => (
							<li
								key={skill.id}
								className={`${styles.skillItem} ${skill.pass ? styles.skillPassed : ""}`}
							>
								<span className={styles.skillCheck}></span>
								{skill.name}
							</li>
						))
					) : (
						<li className={styles.skillItemEmpty}>スキルなし</li>
					)}
				</ul>
			</div>
		</article>
	);
}

export default EventLevelCard;
