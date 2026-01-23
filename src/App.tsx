import { Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell/AppShell";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import ProgressPage from "./pages/ProgressPage/ProgressPage";

function App() {
	return (
		<AppShell>
			<Routes>
				<Route path="/" element={<CalendarPage />} />
				<Route path="/calendar" element={<CalendarPage />} />
				<Route path="/progress" element={<ProgressPage />} />
			</Routes>
		</AppShell>
	);
}

export default App;
