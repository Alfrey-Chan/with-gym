import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";
import logo from "./../../assets/logo.png";

function AppHeader() {
	return (
		<header className={styles.header}>
			<Link to="#">
				<img className={styles.logo} src={logo} alt="" />
			</Link>

			<button className={styles.profileButton}>
				<svg viewBox="0 0 32 32" fill="none" stroke="#000" strokeWidth="2">
					<circle cx="16" cy="16" r="15" />
					<circle cx="16" cy="11" r="6" />
					<path d="M26,27c0-5.523-4.477-10-10-10s-10,4.477-10,10" />
				</svg>
				監物朔
			</button>
		</header>
	);
}

export default AppHeader;
