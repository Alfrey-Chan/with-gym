import styles from "./CalendarWeek.module.css";
import type { CalendarEvent } from "../../../types/calendar";
import CalendarEventBlock from "../CalendarEventBlock/CalendarEventBlock";
import { Fragment } from "react/jsx-runtime";

type CalendarWeekProps = {
	weekStartDate: Date;
	startHour: number;
	endHour: number;
	events: CalendarEvent[];
};

const DAYS_OF_WEEK = ["月", "火", "水", "木", "金", "土", "日"] as const;

function CalendarWeek({
	weekStartDate,
	startHour,
	endHour,
	events,
}: CalendarWeekProps) {
	const hours = Array.from(
		{ length: endHour - startHour + 1 },
		(_, index) => startHour + index,
	);

	return (
		<div className={styles.calendar}>
			{/* single scroll container */}
			<div className={styles.grid}>
				{/* Corner - sticky top AND left */}
				<div className={styles.corner}></div>

				{/* Day headers - sticky top */}
				{DAYS_OF_WEEK.map((day) => (
					<div key={day} className={styles.dayHeader}>
						{day}
					</div>
				))}

				{/* For each hour row */}
				{hours.map((hour) => (
					<Fragment key={hour}>
						{/* Time cell - sticky left */}
						<div className={styles.timeCell}>{hour}:00</div>

						{/* Day cells */}
						{DAYS_OF_WEEK.map((_, dayIndex) => (
							<div key={dayIndex} className={styles.cell}></div>
						))}
					</Fragment>
				))}

				{/* CalendarEventBlocks (absolute positioned within grid) */}
				{events.map((event) => (
					<CalendarEventBlock
						key={event.id}
						category={event.category}
						startTime={event.startTime}
						endTime={event.endTime}
						dayIndex={event.dayIndex}
						label={event.label}
						subLabel={event.subLabel}
						ageGroup={event.ageGroup}
						isConfirmed={event.isConfirmed}
						calendarStartHour={startHour}
						rowHeightPx={80}
					/>
				))}
			</div>
		</div>
	);
}

export default CalendarWeek;
