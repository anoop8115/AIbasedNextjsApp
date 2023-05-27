import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "ChatGpt",
  description: "Lets build chatgpt like app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className="gradient"></div>
          <main className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6"><Nav></Nav> {children}</main>
        </div>
      </body>
    </html>
  );
}
