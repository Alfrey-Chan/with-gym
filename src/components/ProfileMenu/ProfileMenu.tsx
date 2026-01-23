import { useState } from "react";
import styles from "./ProfileMenu.module.css";

function ProfileMenu() {
	const [show, setShow] = useState(false);
	const [current, setCurrent] = useState(true);

	return (
		<article className={styles.profileMenu}>
			<div className={styles.defaultView}>
				<span className={styles.avatarCircle}>S</span>
				<div className={styles.nameLocation}>
					<span className={styles.nameHiragana}>けんもつ さく</span>
					<span className={styles.location}>国分寺市東元町4-16-13 1F</span>
				</div>
				<span
					className={`${styles.chevronIcon} ${show ? styles.show : ""}`}
					onClick={() => setShow(!show)}
				></span>
			</div>

			{show && (
				<div className={styles.expandedView}>
					<div className={styles.header}>
						<svg fill="currentColor" viewBox="-4.5 0 32 32" version="1.1">
							<path d="M11.24 14.76c0.88-0.8 1.44-2 1.44-3.28 0-2.48-2-4.48-4.48-4.48s-4.48 2-4.48 4.48c0 1.32 0.56 2.48 1.44 3.28-1 0.36-1.88 0.92-2.64 1.72-2.68 2.88-2.52 7.52-2.52 7.72 0.040 0.48 0.4 0.84 0.88 0.8s0.8-0.4 0.8-0.88c0-0.040-0.16-4.12 2.12-6.52 1.080-1.12 2.56-1.72 4.44-1.72 1.84 0 3.32 0.56 4.4 1.68 2.28 2.36 2.12 6.48 2.12 6.52-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0-0.2 0.2-4.84-2.6-7.72-0.72-0.76-1.6-1.32-2.6-1.68zM5.44 11.48c0-1.52 1.24-2.8 2.8-2.8s2.8 1.24 2.8 2.8c0 1.52-1.24 2.8-2.8 2.8s-2.8-1.28-2.8-2.8zM21.4 13.36c-0.4-0.44-0.88-0.76-1.4-1 0.44-0.56 0.72-1.24 0.72-2 0-1.76-1.4-3.16-3.16-3.16s-3.16 1.4-3.16 3.16c0 0.76 0.28 1.44 0.72 2-0.4 0.2-0.8 0.44-1.12 0.76-0.36 0.32-0.36 0.84-0.080 1.2 0.32 0.36 0.84 0.36 1.2 0.080 0.64-0.56 1.44-0.84 2.44-0.84 1.12 0 1.96 0.32 2.6 1 1.36 1.44 1.28 3.92 1.28 3.96-0.040 0.48 0.32 0.84 0.8 0.88 0 0 0.040 0 0.040 0 0.44 0 0.8-0.36 0.84-0.8 0.040-0.16 0.12-3.28-1.72-5.24zM16.080 10.4c0-0.8 0.68-1.48 1.48-1.48s1.48 0.68 1.48 1.48-0.68 1.48-1.48 1.48c-0.8 0-1.48-0.68-1.48-1.48z" />
						</svg>
						プロファイル
					</div>

					<span className={styles.subheading}>アカウント切替</span>
					<ul className={styles.accountsList}>
						<li className={styles.accountItem}>
							<div className={styles.nameLocation}>
								<span className={styles.nameHiragana}>けんもつ さく</span>
								<span className={styles.location}>
									国分寺市東元町4-16-13 1F
								</span>
							</div>

							<button className={styles.switchAccountButton} disabled={current}>
								使用中
							</button>
						</li>

						<li className={styles.accountItem}>
							<div className={styles.nameLocation}>
								<span className={styles.nameHiragana}>けんもつ うた</span>
								<span className={styles.location}>
									東京都西東京市田無4-17-18ドミール田無101
								</span>
							</div>

							<button className={styles.switchAccountButton}>切替</button>
						</li>
					</ul>

					<button className={styles.logout}>
						<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M10 17l5-5-5-5"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M15 12H3"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							></path>
							<path
								d="M21 4v16"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
							></path>
						</svg>
						ログアウト
					</button>
				</div>
			)}

			<div className={styles.studentDetails}>
				{/* <h3 className={styles.name}>けんもつさく</h3> */}

				<h4 className={styles.scheduleLabel}>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
					>
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
						<line x1="16" y1="2" x2="16" y2="6"></line>
						<line x1="8" y1="2" x2="8" y2="6"></line>
						<line x1="3" y1="10" x2="21" y2="10"></line>
					</svg>
					自分のクラス
				</h4>
				<ul className={styles.classesList}>
					<li className={styles.class}>
						<span className={styles.day}>火</span>
						幼児クラス (15:10 - 16:00)
					</li>
					<li className={styles.class}>
						<span className={styles.day}>水</span>
						幼児クラス (15:10 - 16:00)
					</li>
				</ul>
			</div>
		</article>
	);
}

export default ProfileMenu;
