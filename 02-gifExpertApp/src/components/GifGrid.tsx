import {getGifs} from "../helpers/getGifs.ts";
import {useEffect, useState} from "react";

export const GifGrid = ({category}: { category: string }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages()
    }, []);

    const getImages = async () => {
        const images = await getGifs(category)
        setImages(images)
    }

    return (
        <>
            <ol>
                {
                    images.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    );
};

