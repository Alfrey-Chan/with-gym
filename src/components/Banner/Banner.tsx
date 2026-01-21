import styles from "./Banner.module.css";

function Banner() {
	return (
		<div className={styles.banner}>
			<svg viewBox="0 0 24 24" fill="none">
				<circle
					cx="12"
					cy="12"
					r="9"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.75"
				/>
				<rect
					height="0.01"
					stroke="currentColor"
					strokeLinejoin="round"
					strokeWidth="2.5"
					width="0.01"
					x="12"
					y="16"
				/>
				<path
					d="M12 12L12 8"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
				/>
			</svg>
			<p className={styles.text}>
				<strong>お知らせ：　</strong>
				今週の土曜クラスは設備点検のため第2体育館で行います。
			</p>
		</div>
	);
}

export default Banner;
