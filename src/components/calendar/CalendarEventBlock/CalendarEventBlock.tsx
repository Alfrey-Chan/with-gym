import styles from "./CalendarEventBlock.module.css";
import { type ClassCategory } from "../../../types/calendar";

type CalendarEventBlockProps = {
	category: ClassCategory;
	startTime: string; // "10:45"
	endTime: string; // "11:30"
	dayIndex: number; // 0=月, 1=火, ...
	label: string;
	subLabel?: string;
	ageGroup?: string;
	isConfirmed: boolean;

	calendarStartHour: number;
	rowHeightPx?: number;
	timeColumnWidth?: number;
	headerRowHeight?: number;
};

function parseTimeToMinutes(time: string): number {
	const [hourString, minuteString

	] = time.split(":");
	const hours = Number(hourString);
	const minutes = Number(minuteString
		 ?? "0");
	return (Number.isFinite(hours) ? hours : 0) * 60 + (Number.isFinite(minutes) ? minutes : 0);
}

function CalendarEventBlock({
	category,
	startTime,
	endTime,
	dayIndex,
	label,
	subLabel,
	ageGroup,
	isConfirmed,
	calendarStartHour,
	rowHeightPx = 80,
	timeColumnWidth = 64,
	headerRowHeight = 37,
}: CalendarEventBlockProps) {
	const startMin = parseTimeToMinutes(startTime);
	const endMin = parseTimeToMinutes(endTime);

	const calendarStartMin = calendarStartHour * 60;
	const offsetMin = Math.max(0, startMin - calendarStartMin);

	const pxPerMinute = rowHeightPx / 60;

	// Calculate absolute position from top-left of grid
	const topPx = headerRowHeight + offsetMin * pxPerMinute;

	// Use calc() for flexible column width: (100% - timeColumn) / 7 days
	const leftCalc = `calc(${timeColumnWidth}px + (100% - ${timeColumnWidth}px) * ${dayIndex} / 7)`;
	const widthCalc = `calc((100% - ${timeColumnWidth}px) / 7)`;

	const durationMin = Math.max(5, endMin - startMin);
	const heightPx = Math.max(8, durationMin * pxPerMinute);

	return (
		<div
			className={`${styles.eventBlock} ${styles[category]}`}
			style={{
				position: "absolute",
				top: `${topPx}px`,
				left: leftCalc,
				width: widthCalc,
				height: `${heightPx}px`,
			}}
		>
			<div className={styles.timeAndStatus}>
				<span className={styles.time}>
					{startTime} – {endTime}
				</span>

				{/* <div className={styles.pill}>
					<span
						className={`${styles.statusDot} ${
							isConfirmed ? styles.confirmed : styles.cancelled
						}`}
					/>
					<span className={styles.statusText}>
						{isConfirmed ? "確定" : "停止"}
					</span>
				</div> */}
			</div>

			<div className={styles.labels}>
				<span className={styles.label}>{label}</span>
				<span className={styles.subLabel}>{subLabel ? `${subLabel}` : ""}</span>
				<span className={styles.ageLabel}>{ageGroup}</span>
			</div>
		</div>
	);
}

export default CalendarEventBlock;
