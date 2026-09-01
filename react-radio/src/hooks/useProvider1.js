// import { useEffect, useState } from "react";
// import { getProvider1 } from "../services/provider1";

// export const useProvider1 = (tag, country) => {

//     const [provider1, setProvider1] = useState([]);
//     const [countRadios, setCountRadios] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {

//         const loadProvider1 = async () => {

//             try {

//                 const data = await getProvider1(tag, country);
//                 const dataOrdenada = data
//                     .sort((a, b) => a.name.localeCompare(b.name))
//                     .map((radio, index) => ({
//                         ...radio,
//                         id: index + 1
//                     }));

//                 setProvider1(dataOrdenada);

//                 const radiosPorPais = Object.entries(
//                     dataOrdenada.reduce((acc, radio) => {

//                         const pais = radio.country || "Sin país";

//                         acc[pais] = (acc[pais] || 0) + 1;
//                         setCountRadios(acc)
//                         return acc;

//                     }, {})
//                 );



//             } catch (error) {

//                 setError(error);

//             } finally {

//                 setLoading(false);
//             }
//         };

//         loadProvider1();

//     }, [tag, country]);

//     return {
//         provider1,
//         countRadios,
//         loading,
//         error
//     };
// };

import { useEffect, useState } from "react";
import { getTopVoted, getProvider1 } from "../services/provider1";

export const useProvider1 = (tag, country) => {

    const [provider1, setProvider1] = useState([]);
    const [loading, setLoading] = useState(false);

    // Radios iniciales
    useEffect(() => {

        const loadInitialRadios = async () => {

            try {
                const data = await getTopVoted();

                const dataOrdenada = data.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                setProvider1(dataOrdenada);

            } catch (error) {
                console.error("Error cargando radios iniciales:", error);
            }

        };

        loadInitialRadios();

    }, []);


    // Radios filtradas
    useEffect(() => {

        // No ejecutar todavía si no hay filtros
        if (!tag && !country) return;

        const loadFilteredRadios = async () => {

            try {

                setLoading(true);

                const data = await getProvider1(tag, country);

                const dataOrdenada = data
                    .sort((a, b) =>
                        a.name.localeCompare(b.name)
                    )
                    .map((radio, index) => ({
                        ...radio,
                        id: index + 1
                    }));

                setProvider1(dataOrdenada);

            } catch (error) {

                console.error("Error cargando radios:", error);

            } finally {

                setLoading(false);

            }

        };

        loadFilteredRadios();

    }, [tag, country]);


    return {
        provider1,
        loading
    };
};