import { useState } from "react";

export default function useAdmin(initialValue) {
  const [isAd, setIsAdmin] = useState(initialValue);
  function isAdmn() {
    setIsAdmin(true);
  }
  function notAdmn() {
    setIsAdmin(false);
  }
  return [isAd, isAdmn, notAdmn];
}
