import styles from "./page.module.css";
import MyName from "./MyName";
import MyButton from "./MyButton";

export default function Home() {
    return (
        <div className={styles.main}>
            <h1>Hello</h1>
            <MyName />
            <MyButton />
        </div>
    );
}
