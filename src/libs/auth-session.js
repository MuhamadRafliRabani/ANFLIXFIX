import { useSession } from "next-auth/react";

export const userSessions = () => {
  const { data, status } = useSession();

  if (!data?.user) {
    return { user: null, status: "not logged in" };
  }

  if (data?.user) {
    return { user: data?.user, status };
  }
};
