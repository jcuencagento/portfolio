/* eslint-disable jsx-a11y/media-has-caption */
export function Video() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-auto w-full rounded-2xl border-4 border-black"
            height="1200"
            poster="/projects/donkeycode_project_HD.webp"
            preload="none"
            width="1920"
        >
            <source src="/videos/DonkeyCodeDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}
