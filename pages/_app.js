import { globalCss } from "@stitches/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../components/Container";
function MyApp({ Component, pageProps }) {
  const globalStyles = globalCss({
    "html, body": {
      padding: 0,
      margin: 0,
      fontFamily:
        "'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    a: { color: "inherit" },
    "*": { boxSizing: "border-box" },
  });
  globalStyles();

  const { pathname } = useRouter();

  return (
    <div>
      <main>
        {/* // 顯示當頁 */}
        <Component {...pageProps} />
      </main>
      {/* // 每一頁會有這 footer */}
    </div>
  );
}

// 記得用 export default 喔！
export default MyApp;
