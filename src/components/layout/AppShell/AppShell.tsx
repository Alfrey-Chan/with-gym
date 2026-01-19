import type { ReactNode } from "react";
import styles from "./AppShell.module.css";
import AppNav from "./../../../components/AppNav/AppNav";
import AppHeader from "../../AppHeader/AppHeader";

type AppShellProps = {
	children: ReactNode;
};

function AppShell({ children }: AppShellProps) {
	return (
		<div className={styles.shell}>
			<AppHeader />
			<AppNav />

			<main className={styles.main}>{children}</main>
		</div>
	);
}

export default AppShell;
