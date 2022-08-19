import Timer from "../src/components/Timer";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../src/components/Footer";

function MyApp() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="grid h-screen place-items-center dark:bg-black">
        <Timer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
