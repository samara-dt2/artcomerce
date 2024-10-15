// hooks/useDataLayer.js

const useDataLayer = () => {
    const pushToDataLayer = (eventData) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push(eventData);
        } else {
            console.warn('Data Layer is not defined');
        }
    };

    return { pushToDataLayer };
};

export default useDataLayer;
