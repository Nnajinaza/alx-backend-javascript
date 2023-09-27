export default function getResponseFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { message: "API response"};
            resolve(data);
        }, 100);
    })
}