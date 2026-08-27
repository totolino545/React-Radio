import { useState } from "react";
import { useRadios } from "../../../context/RadiosContext"

function Genre({ tags }) {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedSubGenre, setSelectedSubGenre] = useState("");
    const [subGenres, setSubGenres] = useState([]);
    const { tagParam } = useRadios();

    const handleGenreChange = (e) => {
        const genre = e.target.value;
        setSelectedGenre(genre);
        setSelectedSubGenre("");


        const filtered = tags
            .filter(tag => {
                const name = tag.name.toLowerCase();
                const search = genre.toLowerCase();

                return name.includes(search) && name !== search;
            })
            .sort((a, b) => b.stationcount - a.stationcount)
            .slice(0, 200);

        setSubGenres(filtered);
    };
    const handleInputChange = (e) => { handleGenreChange(e.target.value); };

    const clearGenre = () => {
        setSelectedGenre("");
        setSubGenres([]);
    };
    const handleSubGenreChange = (subGenre) => {
        setSelectedSubGenre(subGenre);
        tagParam(subGenre)
    };


    return (
        <section className="mb-gutter">

            <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                    Genres
                </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 overflow-x-auto hide-scrollbar">

                <label className="relative flex-shrink-0">

                    <input
                        type="text"
                        list="genres"
                        value={selectedGenre}
                        onChange={handleGenreChange}
                        placeholder="🎵 Género"
                        className={`}
                            px-6
                            py-2
                            pr-10
                            rounded-full
                            bg-transparent
                            border                            
                            ${selectedGenre
                                ? "bg-primary-container text-on-primary-container border-primary border-4 border-indigo-500"
                                : "bg-surface-container text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant"
                            }
                                `}

                    />

                    <datalist id="genres">
                        {tags.map((tag) => (
                            <option
                                key={tag.name}
                                value={tag.name}
                            />
                        ))}
                    </datalist>

                    {selectedGenre && (
                        <button
                            type="button"
                            onClick={clearGenre}
                            className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                text-gray-500
                                hover:text-red-500
                            "
                        >
                            ✕
                        </button>
                    )}

                </label>

                {subGenres.map((tag) => (
                    <button
                        key={tag.name}
                        onClick={() => handleSubGenreChange(tag.name)}
                        className={`
                                flex-shrink-0
                                px-6
                                py-2
                                rounded-full
                                font-label-sm
                                text-label-sm
                                transition-colors
                                border
                                ${selectedSubGenre === tag.name
                                ? "bg-primary-container text-on-primary-container border-primary border-4 border-indigo-500"
                                : "bg-surface-container text-on-surface-variant border-outline-variant/30 hover:bg-surface-variant"
                            }
                                `}


                    >
                        {tag.name}
                    </button>
                ))}

            </div>

        </section>
    );
}

export default Genre;