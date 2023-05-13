import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers: {
            Authorization: "Client-ID RFtf6XK_wUURd6cRpNEHuxbb6Miheel_OYU-L8tV3vM"
        },
        params: {
            query: term,
        },
    });

    // console.log(response.data.results[0]);
    
    return response.data.results;
};

export default searchImages;