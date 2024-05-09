/* eslint-disable react/button-has-type */
import styles from "@/styles/myexperience.module.css";

export default function Pixel() {
    return (
        <article className={styles.container}>
            <div className={styles.terminal_toolbar}>
                <div className={styles.butt}>
                    <button className={styles.btn_red} />
                    <button className={styles.btn} />
                    <button className={styles.btn} />
                </div>
                <p className={styles.user}>jcuencagento@admin: ~</p>
                <div className={styles.add_tab}>+</div>
            </div>
            <div className={styles.terminal_body}>
                <div className={styles.terminal_promt}>
                    <span className={styles.terminal_user}>jcuencagento@admin:</span>
                    <span className={styles.terminal_location}>~</span>
                    <span className={styles.terminal_bling}>$</span>
                    <span className={styles.terminal_cursor} />
                </div>
            </div>
        </article>
    );
}
