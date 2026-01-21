import styles from "./CalendarPage.module.css";
import Banner from "../../components/Banner/Banner";
import CalendarWeek from "../../components/calendar/CalendarWeek/CalendarWeek";
import type { CalendarEvent } from "../../types/calendarEvent";
import { useState } from "react";

const sampleEvents: CalendarEvent[] = [
	{
		id: "1",
		category: "examPrep",
		label: "小学校受験対策クラス",
		ageGroup: "（年長）",
		dayIndex: 5,
		startTime: "08:30",
		endTime: "09:30",
		isConfirmed: true,
	},
	{
		id: "2",
		category: "examPrep",
		label: "小学校受験対策クラス",
		ageGroup: "（年長）",
		dayIndex: 6,
		startTime: "08:30",
		endTime: "09:30",
		isConfirmed: true,
	},
	{
		id: "3",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 5,
		startTime: "10:00",
		endTime: "10:50",
		isConfirmed: true,
	},
	{
		id: "4",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 6,
		startTime: "10:00",
		endTime: "10:50",
		isConfirmed: true,
	},
	{
		id: "5",
		category: "toddler",
		label: "未就園児クラス",
		dayIndex: 1,
		startTime: "10:45",
		endTime: "11:30",
		isConfirmed: true,
	},
	{
		id: "6",
		category: "toddler",
		label: "未就園児クラス",
		dayIndex: 2,
		startTime: "10:45",
		endTime: "11:30",
		isConfirmed: true,
	},
	{
		id: "7",
		category: "toddler",
		label: "未就園児クラス",
		dayIndex: 4,
		startTime: "10:45",
		endTime: "11:30",
		isConfirmed: true,
	},
	{
		id: "8",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 5,
		startTime: "11:00",
		endTime: "11:50",
		isConfirmed: true,
	},
	{
		id: "9",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 6,
		startTime: "11:00",
		endTime: "11:50",
		isConfirmed: true,
	},
	{
		id: "10",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 5,
		startTime: "13:20",
		endTime: "14:10",
		isConfirmed: true,
	},
	{
		id: "11",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 6,
		startTime: "13:20",
		endTime: "14:10",
		isConfirmed: true,
	},
	{
		id: "12",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 5,
		startTime: "14:20",
		endTime: "15:10",
		isConfirmed: true,
	},
	{
		id: "13",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 6,
		startTime: "14:20",
		endTime: "15:10",
		isConfirmed: true,
	},
	{
		id: "14",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 0,
		startTime: "15:10",
		endTime: "16:00",
		isConfirmed: true,
	},
	{
		id: "15",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 1,
		startTime: "15:10",
		endTime: "16:00",
		isConfirmed: true,
	},
	{
		id: "16",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 2,
		startTime: "15:10",
		endTime: "16:00",
		isConfirmed: true,
	},
	{
		id: "17",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 3,
		startTime: "15:10",
		endTime: "16:00",
		isConfirmed: true,
	},
	{
		id: "18",
		category: "toddler",
		label: "幼児クラス",
		ageGroup: "（年少〜年長）",
		dayIndex: 4,
		startTime: "15:10",
		endTime: "16:00",
		isConfirmed: true,
	},
	{
		id: "19",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 0,
		startTime: "16:10",
		endTime: "17:00",
		isConfirmed: true,
	},
	{
		id: "20",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 1,
		startTime: "16:10",
		endTime: "17:00",
		isConfirmed: true,
	},
	{
		id: "21",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 2,
		startTime: "16:10",
		endTime: "17:00",
		isConfirmed: true,
	},
	{
		id: "22",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 3,
		startTime: "16:10",
		endTime: "17:00",
		isConfirmed: true,
	},
	{
		id: "23",
		category: "preschool",
		label: "幼児・",
		subLabel: "小学生クラス",
		ageGroup: "（年中〜小学生）",
		dayIndex: 4,
		startTime: "16:10",
		endTime: "17:00",
		isConfirmed: true,
	},
	{
		id: "24",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 0,
		startTime: "17:10",
		endTime: "18:00",
		isConfirmed: true,
	},
	{
		id: "25",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 1,
		startTime: "17:10",
		endTime: "18:00",
		isConfirmed: true,
	},
	{
		id: "26",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 2,
		startTime: "17:10",
		endTime: "18:00",
		isConfirmed: true,
	},
	{
		id: "27",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 3,
		startTime: "17:10",
		endTime: "18:00",
		isConfirmed: true,
	},
	{
		id: "28",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 4,
		startTime: "17:10",
		endTime: "18:00",
		isConfirmed: true,
	},
	{
		id: "29",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 5,
		startTime: "15:20",
		endTime: "16:10",
		isConfirmed: true,
	},
	{
		id: "30",
		category: "elementary",
		label: "小学生クラス",
		ageGroup: "（年長〜小学生）",
		dayIndex: 6,
		startTime: "15:20",
		endTime: "16:10",
		isConfirmed: true,
	},
	{
		id: "31",
		category: "elementaryMiddle",
		label: "小学生・",
		subLabel: "中学生クラス",
		ageGroup: "（小学生〜中学生）",
		dayIndex: 5,
		startTime: "16:20",
		endTime: "17:10",
		isConfirmed: true,
	},
	{
		id: "32",
		category: "elementaryMiddle",
		label: "小学生・",
		subLabel: "中学生クラス",
		ageGroup: "（小学生〜中学生）",
		dayIndex: 6,
		startTime: "16:20",
		endTime: "17:10",
		isConfirmed: true,
	},
	{
		id: "33",
		category: "acrobat",
		label: "バク転・",
		subLabel: "アクロバットクラス",
		ageGroup: "（小学生〜成人）",
		dayIndex: 5,
		startTime: "17:20",
		endTime: "18:10",
		isConfirmed: true,
	},
	{
		id: "34",
		category: "acrobat",
		label: "バク転・",
		subLabel: "アクロバットクラス",
		ageGroup: "（小学生〜成人）",
		dayIndex: 6,
		startTime: "17:20",
		endTime: "18:10",
		isConfirmed: true,
	},
];

function CalendarPage() {
	const [activeView, setActiveView] = useState<"all" | "self">("all");
	const [nokori, setNokori] = useState(2);

	return (
		<div className={styles.page}>
			<Banner />

			<div className={styles.toolbar}>
				<div className={styles.toolbarLeft}>
					<span className={styles.dateRange}>1/19（月）〜 1/25（日）</span>
					<div className={styles.toggleButtons}>
						<button
							className={`${styles.toggleButton} ${activeView === "all" ? styles.active : ""}`}
							onClick={() => setActiveView("all")}
						>
							全体
						</button>
						<button
							className={`${styles.toggleButton} ${activeView === "self" ? styles.active : ""}`}
							onClick={() => setActiveView("self")}
						>
							自分
						</button>
					</div>
				</div>

				<div className={styles.toolbarRight}>
					<span className={styles.nokoriLabel}>残り{nokori}</span>
					<button className={styles.rescheduleButton}>
						<svg viewBox="0 0 24 24" fill="none">
							<path
								d="M18 10L21 7M21 7L18 4M21 7H7M6 14L3 17M3 17L6 20M3 17H17"
								stroke="currentColor"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						振替
					</button>
				</div>
			</div>

			<CalendarWeek
				weekStartDate={new Date("2026-01-19")}
				startHour={8}
				endHour={19}
				events={sampleEvents}
			/>
		</div>
	);
}

export default CalendarPage;
