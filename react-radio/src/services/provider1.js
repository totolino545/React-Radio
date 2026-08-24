
import { ofetch } from "ofetch";

export const getProvider1 = (tag, country) => { 
    
    return ofetch(
        'https://de1.api.radio-browser.info/json/stations/search',
        {
            query: {
                tag: tag || undefined,
                country: country || undefined,
                hidebroken: true,
                reverse: "true",
                order: "stationcount"
                
            }
        }
    );
        
}