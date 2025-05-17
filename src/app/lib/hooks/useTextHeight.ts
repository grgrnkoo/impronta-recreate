import { useState, useEffect } from 'react';

export function useTextHeight() {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024;

    let newHeight = 80;
    if (width >= 1280) return 280; // xl
    else if (width >= 1024) return 200; // lg
    else if (width >= 768) return 160; // md
    else if (width >= 640) return 120; // sm

    return 0;
};



