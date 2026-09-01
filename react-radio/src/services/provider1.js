import { ofetch } from "ofetch";

export const getTopVoted = () => {

    return ofetch(
        "https://de1.api.radio-browser.info/json/stations/topvote",
        {
            query: {
                limit: 20,
                hidebroken: true
            }
        }
    );

};


export const getProvider1 = (tag, country) => {

    return ofetch(
        "https://de1.api.radio-browser.info/json/stations/search",
        {
            query: {
                tag,
                country,
                hidebroken: true,
                limit: 1000
            }
        }
    );

};