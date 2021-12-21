import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <div className="">
        <div className="dark:bg-gray-900">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
