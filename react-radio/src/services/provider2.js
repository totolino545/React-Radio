import { useState, useEffect } from 'react';

function Api (genero, provider) {
    const [radios, setRadios] = useState([]);
    let a=0;
    console.log("provider", provider);
    console.log("genero", genero);
    
    useEffect(() => {
                
        
        const fetchData = async () => {
            switch (provider) {
                case "1":
            try {
                const response = await fetch(`https://fi1.api.radio-browser.info/json/stations/search?name=${genero}&hidebroken=true&limit=200&reverse=true&order=stationcount`);
                const data = await response.json();
                // Filtrar posibles null por errores y ordenar por country
                const validRadios = data.filter(r => r !== null);
                const dataRadio = validRadios.map(radio => ({
                    id: a++,
                    name: radio.name,
                    favicon: radio.favicon,
                    url_resolved: radio.url_resolved,
                    country: radio.country
                }));
                setRadios(dataRadio);
            } catch (error) {
                console.error('Error:', error);
            }
            break;
        case "2":
                    try {
                        const response = await fetch(`https://radio-de-galena.onrender.com/radios?genero=${genero}`);
                        const data = await response.json();

                        if (!data || !data.data) return;

                        const enrichedRadios = await Promise.all(
                            data.data.map(async (radio) => {

                                try {
                                    const res = await fetch(`https://radio-de-galena.onrender.com/radio/${radio.route.params.id}`);
                                    const emisora = await res.json();

                                    return {
                                        id: radio.id,
                                        name: radio.title,
                                        favicon: radio.logo,
                                        url_resolved: emisora?.streamURL ?? null,
                                        country: emisora?.country ?? null,
                                    };
                                } catch (error) {
                                    console.error(`Error al obtener emisora ${radio.id}:`, error);
                                    return null;
                                }
                            })
                        );

                        const ordenRadios = enrichedRadios.filter(r => r !== null);
                        ordenRadios.sort((a, b) => {
                            if (!a.country) return 1;
                            if (!b.country) return -1;
                            return a.country.localeCompare(b.country);
                        });
                        setRadios(ordenRadios);


                    } catch (error) {
                        console.error('Error en fetchRadios:', error);
                    }
            break;
                default:
                    console.error('Proveedor no soportado');
                    break;
            } 
        };
        fetchData();
    }, [genero, provider]);

    return radios;
}

export default Api;