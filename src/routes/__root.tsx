import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <span className="font-mono-tag text-xs text-muted-foreground">Status 404</span>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground">Page Not Found</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The requested page does not exist or has been restructured as part of our transition to community infrastructure.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to Homepage
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Runtime error caught in boundary:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <span className="font-mono-tag text-xs text-destructive">Application Notice</span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
          Unexpected Error
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Something went wrong while rendering this section. You can refresh the view or return to the main portal.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retry View
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Punarjanam — Circular Community Infrastructure & Material Reuse" },
      {
        name: "description",
        content:
          "Punarjanam redirects end-of-life vehicle parts, industrial waste, and construction scrap into climate-resilient community infrastructure, shade pavilions, and public assets in Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Punarjanam — Circular Community Infrastructure & Material Reuse" },
      {
        property: "og:description",
        content:
          "Transforming urban scrap into participatory public infrastructure, shade roofs, and community spaces. Material reuse as a means, community resilience as the mission.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/logo.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
