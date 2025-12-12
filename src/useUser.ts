import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";

// 管理者として扱うメールアドレス
const ADMIN_EMAILS = [
  "mikaeru222@gmail.com",
  "yuutodayo222@gmail.com",
];

type UseUserResult = {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
};

export function useUser(): UseUserResult {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAdmin(!!u && ADMIN_EMAILS.includes(u.email ?? ""));
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { user, loading, isAdmin };
}
