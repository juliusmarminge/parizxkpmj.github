import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <html>
      <body>
        <Outlet />
      </body>
    </html>
  ),
  notFoundComponent: () => <div>Tanstack Start Not Found</div>,
});
