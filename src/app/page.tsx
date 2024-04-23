"use client";
import styles from "@/components/ui/homepage/homepage.module.scss";
import Sidebar from "@/components/ui/sidebar/sidebar";
import Navbar from "@/components/ui/navbar/navbar";

export default function Home() {
    return (
        <div className={styles.contain_bars}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar/>
                <h1>Home Page</h1>
            </div>
        </div>
    );
}
