import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/Home";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { SocialMedia } from "@/components/SocialMedia";
import { ContactRev } from "@/components/ContactRev";

export default function Page() {
  return <Home />;
}
