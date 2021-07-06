
// const FetchData = {
//     getCatalog() {
//         return fetch('http://localhost:3001/api/catalog')
//     }
// }


// export default FetchData;


export const Api = {

    URL: 'http://localhost:3001/api',

    fetch: (apiPath) => {
        return fetch(Api.URL + apiPath)
    }
}
