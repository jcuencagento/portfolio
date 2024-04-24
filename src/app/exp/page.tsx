import MyExperience from "@/components/MyExperience";
import MyStudies from "@/components/MyStudies";

export default function Exp() {
    return (
        <div className="flex w-full flex-col items-center">
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Experience</h2>
                <MyExperience />
            </div>
            <div className="my-4 flex w-full flex-col justify-center">
                <h2 className="text-bold m-auto mb-4 text-xl lg:text-2xl">Studies</h2>
                <MyStudies />
            </div>
        </div>
    );
}
