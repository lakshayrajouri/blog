import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to the Blog</h1>
      <p className={styles.description}>
        This is a simple blog application built with Next.js.
      </p>
      <Link href="/blogs" className={styles.button}>
        View Blogs
      </Link>
      <Link href="/newBlog" className={styles.button}>
        add blogs
      </Link>
      <Image
        src="/images/blog.jpg"
        alt="Blog Image"
        width={500}
        height={300}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2>Latest Posts</h2>
        {/* Add your latest posts here */}
      </div>
    </div>
  );
}
