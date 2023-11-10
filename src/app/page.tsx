import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/Home";

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
