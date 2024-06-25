/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/button-has-type */
import Link from "next/link";

import styles from "@/styles/myexperience.module.css";

export default function MyStudies() {
    return (
        <div className="flex w-full flex-col gap-4">
            <article
                key={1}
                className="relative m-auto flex h-full w-full transform-gpu items-center justify-center rounded-2xl border-4 border-primary shadow-xl lg:p-8"
            >
                <div className="align-center flex h-full w-full flex-col justify-center p-4 py-28">
                    <div className="transform-gpu duration-300 ease-in-out">
                        <Link href="/degree">
                            <article className="m-auto flex flex-col hover:cursor-pointer hover:text-orange-500">
                                <p className="text-base font-extrabold opacity-100 lg:text-lg">Telecommunications Engineering</p>
                                <p className="text-sm font-bold italic opacity-100 lg:text-base">Universidad Carlos III de Madrid</p>
                                <p className="text-sm font-bold italic opacity-100 lg:text-base">Finished in 2023</p>
                            </article>
                        </Link>
                    </div>
                </div>
            </article>
            <article
                key={2}
                className="relative m-auto flex h-full w-full transform-gpu items-center justify-center rounded-2xl border-4 border-primary shadow-xl lg:p-8"
            >
                <div className="align-center flex h-full w-full flex-col justify-center p-4 py-28">
                    <div className="transform-gpu duration-300 ease-in-out">
                        <article className="m-auto flex flex-col">
                            <p className="text-base font-extrabold opacity-100 lg:text-lg">Technology Bachelors and ESO</p>
                            <p className="text-sm font-bold italic opacity-100 lg:text-base">IES Joaquín Araújo</p>
                            <p className="text-sm font-bold italic opacity-100 lg:text-base">Finished in 2017</p>
                            <article className={styles.toggle_container}>
                                <input className={styles.toggle_input} type="checkbox" />
                                <div className={styles.toggle_handle_wrapper}>
                                    <div className={styles.toggle_handle}>
                                        <div className={styles.toggle_handle_knob} />
                                        <div className={styles.toggle_handle_bar_wrapper}>
                                            <div className={styles.toggle_handle_bar} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.toggle_base}>
                                    <div className={styles.toggle_base_inside} />
                                </div>
                            </article>
                        </article>
                    </div>
                </div>
            </article>
        </div>
    );
}
