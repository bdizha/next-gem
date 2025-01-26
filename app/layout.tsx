import "@radix-ui/themes/styles.css";
import "styles/tailwind.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <Theme appearance="dark" accentColor="gray" grayColor="slate" scaling="100%" radius="full">
          {children}
        </Theme>
      </body>
    </html>
  )
}
