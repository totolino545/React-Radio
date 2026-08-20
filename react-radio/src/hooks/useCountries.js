// hooks/useCountries.js

import { useEffect, useState } from "react";
import { getCountries } from "../services/countries";

export const useCountries = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const loadCountries = async () => {

            try {

                const data = await getCountries();
                const dataOrdenada = data.sort(
                    (a, b) => b.stationcount - a.stationcount
                );

                setCountries(dataOrdenada)

            } catch (error) {

                setError(error);

            } finally {

                setLoading(false);
            }
        };

        loadCountries();

    }, []);

    return {
        countries,
        loading,
        error
    };
};