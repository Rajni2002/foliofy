import { useState, useEffect } from 'react';

function getSearchParams() {
    return new URLSearchParams(window.location.search);
}

function updateUrl(searchParams: URLSearchParams) {
    const stringParams = searchParams.toString();
    const query = stringParams.length ? `?${stringParams}` : "";
    window.history.pushState({}, '', window.location.pathname + query);
}

function useSearchParams() {
    const [searchParams, setSearchParams] = useState<URLSearchParams>(getSearchParams());

    // Listen for changes to the URL and update the state accordingly
    useEffect(() => {
        function handlePopState() {
            setSearchParams(getSearchParams());
        }

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const setParamsValue = (key: string, value: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set(key, value);
        setSearchParams(newSearchParams);
        updateUrl(newSearchParams);
    };

    const removeParamsValue = (key: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.delete(key);
        setSearchParams(newSearchParams);
        updateUrl(newSearchParams);
    };

    return {
        searchParams,
        setParamsValue,
        removeParamsValue,
    };
}

export default useSearchParams;
