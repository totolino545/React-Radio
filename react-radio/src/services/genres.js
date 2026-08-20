import { ofetch } from "ofetch";

export const getTags = () => {
    return ofetch(
        "https://de1.api.radio-browser.info/json/tags",
        {
            query: {
                hidebroken: true,
                reverse: "true",
                limit: 2000,
                order: "stationcount"                
            }
        }
    );
};