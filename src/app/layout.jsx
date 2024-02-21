import "./globals.css";

export const metadata = {
  title: "Louis Gerber",
  description: "A web developper portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="pageContainer">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
