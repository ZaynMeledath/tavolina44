import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const restaurantStructuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://tavolina44.com/#restaurant",
  name: "Tavolina 44",
  alternateName: "Tavolina 44 Katy",
  description:
    "Tavolina 44 unites Italian soul and American spirit at Villagio Town Center in Katy, Texas. An upscale dining destination featuring daily handmade pasta, live-oak wood-fired steaks, artisan pizza, and curated cocktails.",
  url: "https://tavolina44.com/",
  telephone: "+1-346-387-6092",
  image: ["https://tavolina44.com/og-image.jpg"],
  logo: "https://tavolina44.com/favicon.png",
  servesCuisine: ["Italian", "American", "Italian-American"],
  priceRange: "$$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "22756 Westheimer Parkway, Suite 180",
    addressLocality: "Katy",
    addressRegion: "TX",
    postalCode: "77450",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.735607,
    longitude: -95.763312,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "23:00",
    },
  ],
  menu: "https://tavolina44.com/#menu",
  hasMap: "https://maps.app.goo.gl/opKdMxcdpQJWxsRb7",
  sameAs: ["https://www.instagram.com/tavolina.44/"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Tavolina 44 | Italian-American Restaurant in Katy, TX" },
        {
          name: "description",
          content:
            "Tavolina 44 unites Italian soul and American spirit at Villagio Town Center in Katy, Texas. Upscale dining featuring hand-rolled pastas, oak-charred steaks, and craft cocktails.",
        },
        { name: "author", content: "Tavolina 44" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "geo.region", content: "US-TX" },
        { name: "geo.placename", content: "Katy, Texas" },
        { name: "geo.position", content: "29.735607;-95.763312" },
        { name: "ICBM", content: "29.735607, -95.763312" },
        {
          property: "og:title",
          content: "Tavolina 44 | Italian-American Restaurant in Katy, TX",
        },
        {
          property: "og:description",
          content:
            "Tavolina 44 unites Italian soul and American spirit at Villagio Town Center in Katy, Texas. Upscale dining featuring hand-rolled pastas, oak-charred steaks, and craft cocktails.",
        },
        { property: "og:url", content: "https://tavolina44.com/" },
        { property: "og:type", content: "restaurant" },
        { property: "og:site_name", content: "Tavolina 44" },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:image",
          content: "https://tavolina44.com/og-image.jpg",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Tavolina 44 Italian-American Restaurant in Katy, Texas",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Tavolina 44 | Italian-American Restaurant in Katy, TX",
        },
        {
          name: "twitter:description",
          content:
            "Tavolina 44 unites Italian soul and American spirit at Villagio Town Center in Katy, Texas. Handcrafted pasta, wood-fired cooking, and craft cocktails.",
        },
        {
          name: "twitter:image",
          content: "https://tavolina44.com/og-image.jpg",
        },
        {
          name: "twitter:image:alt",
          content:
            "Tavolina 44 Italian-American Restaurant at Villagio Town Center",
        },
      ],
      links: [
        { rel: "canonical", href: "https://tavolina44.com/" },
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
        },
        { rel: "icon", href: "/favicon.png", type: "image/png" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData),
          }}
        />
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
