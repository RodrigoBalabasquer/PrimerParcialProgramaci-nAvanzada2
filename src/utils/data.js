export function getList (region) {
    return fetch("https://restcountries.eu/rest/v2/region/"+region).then(data => data.json());
}