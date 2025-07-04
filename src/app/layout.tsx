import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { getSession } from "~/auth"
import "~/app/globals.css";
import { Providers } from "~/app/providers";
import { APP_NAME, APP_DESCRIPTION } from "~/lib/constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  const session = await getSession()

  return (
    <html lang="en">
      <body>
        <Theme accentColor="lime" grayColor="slate">
          <Providers session={session}>{children}</Providers>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
