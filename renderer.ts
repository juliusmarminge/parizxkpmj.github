import handler from "@tanstack/react-start/server-entry";

export default function renderer({ req }: { req: Request }) {
  return handler.fetch(req);
}
