
import { ofetch } from "ofetch";

export const getProvider1 = () => { 
    
    return ofetch(
        "https://de1.api.radio-browser.info/json/stations/search",
        {
            query: {
                name: "",
                hidebroken: true,
                reverse: "true",
                limit: 1000,
                order: "stationcount"
                
            }
        }
    );
        
}