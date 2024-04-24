import TopTracks from "@/components/TopTracks";
import MyMovies from "@/components/MyMovies";
import MyAnime from "@/components/MyAnime";
import MySetup from "@/components/MySetup";

export default function Personal() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Cinema</h2>
                <MyMovies />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Music</h2>
                <TopTracks />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Anime</h2>
                <MyAnime />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Setup</h2>
                <MySetup />
            </div>
        </div>
    );
}
