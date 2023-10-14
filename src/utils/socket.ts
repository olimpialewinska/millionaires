import { io } from "socket.io-client";

export const createSocket = (namespace: string, username: string) => {
  const socket = io("http://localhost:3010", {
    withCredentials: false,
    query: {
      namespace,
      username,
    },
  });

  return socket;
};
