export default function getResponseFromAPI(args) {
    return new Promise((resolve, reject) => {
        if (args === true) {
            resolve({status : 200, body: 'Success'})
        } else {
            reject(new Error('The fake API is not working currently'))
        }
    })
} 