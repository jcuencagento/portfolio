import TopTracks from "@/components/TopTracks";

export default function Personal() {
    return (
        <div className="flex flex-col items-center">
            <div className="mx-auto mb-8 flex justify-center">
                <h1 className="text-xl xl:text-3xl">Personal</h1>
            </div>
            <div className="my-4 flex flex-col justify-center">
                <p className="text-bold m-auto">Music</p>
                <TopTracks />
            </div>
            <div className="my-4 flex justify-center">
                <p>Cinema</p>
            </div>
            <div className="my-4 flex justify-center">
                <p>Anime</p>
            </div>
        </div>
    );
}
