
import { ofetch } from "ofetch";

export const getCountries = () => {
    return ofetch(
        "https://all.api.radio-browser.info/json/countries/",
        {
            query: {
                hidebroken: true,
                reverse: "true",
                limit: 100,
                order: "stationcount"
                
            }
        }
    );
};