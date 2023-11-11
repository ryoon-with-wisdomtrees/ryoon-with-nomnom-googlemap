"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, []);
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="bg-amber-300 ">first</div>
      <div className="bg-orange-300 col-span-3">second</div>
    </div>
  );
}
