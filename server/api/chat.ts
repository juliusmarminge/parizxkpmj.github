import { defineEventHandler } from "nitro/deps/h3";

export default defineEventHandler((event) => {
  return {
    message: 'Hello "/api/chat" from Nitro',
  };
});
