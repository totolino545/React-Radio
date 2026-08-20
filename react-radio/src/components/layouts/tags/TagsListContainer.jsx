import { useState, useEffect } from "react";
import React from 'react'
import Genre from './Genre'
import { useGenres } from '../../../hooks/useGenres';

function TagsListContainer() {
    const { tags, loading, error } = useGenres();

    if (loading) return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">PROCESANDO</h1>
            <p className="mt-2 text-gray-600">Cargando los productos...</p>
        </div>
    )
    if (error) return <p>Error: {error}</p>;


    return <Genre tags={tags} />;

}

export default TagsListContainer