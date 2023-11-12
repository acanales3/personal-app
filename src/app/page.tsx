import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/Home";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";

export default function Page() {
  return (
    <div>
      <Projects />
    </div>
  );
}

//<Home />
