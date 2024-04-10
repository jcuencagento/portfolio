import TopTracks from "@/components/TopTracks";

export default function Personal() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="mx-auto mb-8 flex justify-center">
                <h1 className="text-xl xl:text-3xl">Personal</h1>
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Music</h2>
                <TopTracks />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Cinema</h2>
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Anime</h2>
            </div>
        </div>
    );
}
