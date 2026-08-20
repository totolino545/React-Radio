import { useEffect, useState } from "react";
import { getTags } from "../services/genres";

export const useGenres = () => {

    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const loadTags = async () => {

            try {

                const data = await getTags();
                const dataOrdenada = data.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                setTags(dataOrdenada)
            } catch (error) {

                setError(error);

            } finally {

                setLoading(false);
            }
        };

        loadTags();

    }, []);

    return {
        tags,
        loading,
        error
    };
};