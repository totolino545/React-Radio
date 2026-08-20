import { useEffect, useState } from "react";
import { getProvider1 } from "../services/provider1";

export const useProvider1 = (tag) => {

    const [provider1, setProvider1] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const loadProvider1 = async () => {

            try {

                const data = await getProvider1();
                const dataOrdenada = data.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                setProvider1(dataOrdenada)
                console.log(provider1);
                

            } catch (error) {

                setError(error);

            } finally {

                setLoading(false);
            }
        };

        loadProvider1();

    }, []);

    return {
        provider1,
        loading,
        error
    };
};