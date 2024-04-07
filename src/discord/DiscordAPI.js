const getDiscordStatus = async () => {
    return fetch("https://api.lanyard.rest/v1/users/689464587963334747", {
        headers: {
            "Content-Type": "application/json",
            "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
        },
    });
};

module.exports = {getDiscordStatus};
