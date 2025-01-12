"use client";

import React, { useEffect } from 'react'

const useMounted = () => {
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

export default useMounted