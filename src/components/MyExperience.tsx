import Terminal from "./Terminal";

export default function MyExperience() {
    return (
        <div className="flex w-full flex-col gap-4">
            <article
                key={1}
                className="relative m-auto flex h-full w-full transform-gpu items-center justify-center rounded-2xl border-4 border-primary shadow-xl lg:p-8"
            >
                <div className="align-center flex h-full w-full flex-col justify-center p-4 py-28">
                    <div className="transform-gpu duration-300 ease-in-out">
                        <article className="m-auto flex flex-col">
                            <p className="text-base font-extrabold opacity-100 lg:text-lg">Telecom Engineer</p>
                            <p className="text-sm font-bold italic opacity-100 lg:text-base">FullStack Developer @ ionIDe Telematics</p>
                            <p className="text-sm font-bold italic opacity-100 lg:text-base">2022 - present</p>
                        </article>
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
                            <p className="text-base font-extrabold opacity-100 lg:text-lg">Technology and Math Teacher</p>
                            <p className="text-sm font-bold italic opacity-100 lg:text-base">Part time job in University</p>
                            <p className="text-sm font-bold italic opacity-100 lg:text-base">2019 - 2022</p>
                        </article>
                    </div>
                </div>
                <Terminal />
            </article>
        </div>
    );
}
