export function validateURL(url) {
    const regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-._~:\/?#\[\]@!$&'()*+,;=]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/;
    return regex.test(url);
}

export function apiURL(route) {
    return import.meta.env.VITE_PUBLIC_API_URL + route;
}