import {Carousel, Image} from "antd";
import { useParams } from "react-router-dom";
import React, {useState, useMemo} from "react";

const ListingPhotoCarousel = () => {
    const [photos, setPhotos] = useState([{
        id: 0,
        listing_id: 0,
        url: ""
    }]);
    
    let { listingId } = useParams();

    async function getListingPhotos() {
        const response = await fetch("https://yzy-archive-api.replit.app/api/listing/listingPhotos/" + listingId, {
            "method": "GET"
            })
            .then((res) => res.json())
            .catch((error) => {
                console.log(error);
                return {
                    id: 0,
                    listing_id: 0,
                    url: "Error"
                };
            });
        return response;
    }

    useMemo(() => {
        (async () => {
            const listing = await getListingPhotos();
            setPhotos(listing);
        })();
    }, [listingId]);

    return (
        <Carousel>
            {
                photos.map((photo) => {
                    return (
                        <Image key={photo.id} src={photo.url}/>
                    );
                })
            }
        </Carousel>
    );
}

export default ListingPhotoCarousel;