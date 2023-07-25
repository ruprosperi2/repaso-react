import axios from "axios";

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ByjVrUj6NFHxSJQc1EnaNlKYwTpMQ3CV&q=${category}&limit=20`;

    return await axios.get(url)
        .then((response) => {
            const {data} = response.data

            return data.map(({id, title, images}: { id: string, title: string, images: any }) => ({
                id,
                title,
                url: images.downsized_medium.url
            }))

        })
        .catch((error) => {
            console.log(error);
        });
}