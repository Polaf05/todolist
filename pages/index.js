import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Format from "../layout/format";

// components
import Section1 from "../components/section1";

export default function Home() {
  return (
    <Format>
      <Section1 />
    </Format>
  );
}
