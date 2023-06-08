"use client"

import React, { useEffect } from "react"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    
  return (
    <div>
      Modals
    </div>
  )
};

export default ModalProvider;
