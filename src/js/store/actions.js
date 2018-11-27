import {CHANGE_TERMS} from "../../constants/action-types";

export const changeTerms = term => ({type: CHANGE_TERMS, payload: term.split(' ')});

// export const updateGrid = api => ({type: UPDATE_GRID, payload: api});


// // fetch data from backend
// // use axios to send rest api request
// export function fetchPetEntity(id, type){
//     const baseUrl = "http://"+HOST+":5000/api/"
//     let url = baseUrl.concat(type, "/", id.toString());
//     var fetch_type;
//     if (type === 'pet')
//         fetch_type = FETCH_PET_ENTRY;
//     else if (type === 'vet')
//         fetch_type = FETCH_VET_ENTRY;
//     else
//         fetch_type = FETCH_SHELTER_ENTRY;
//
//     return function(dispatch){
//         axios.get(url, {
//             headers: {
//                 'Access-Control-Allow-Origin' : '*',
//                 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             },
//             responseType: 'json',
//         })
//             .then(res => dispatch({
//                 type: fetch_type,
//                 data: res.data
//             }));
//     }
// }
//
// export function fetchVetEntity(id){
//     const baseUrl = "http://"+HOST+":5000/api/vet"
//     let url = baseUrl.concat("/", id.toString());
//
//     return function(dispatch){
//         axios.get(url, {
//             headers: {
//                 'Access-Control-Allow-Origin' : '*',
//                 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             },
//             responseType: 'json',
//         })
//             .then(res => dispatch({
//                 type: FETCH_VET_ENTRY,
//                 data: res.data
//             }));
//     }
// }
//
// export function fetchShelterEntity(id){
//     const baseUrl = "http://"+HOST+":5000/api/shelter"
//     let url = baseUrl.concat("/", id.toString());
//
//     return function(dispatch){
//         axios.get(url, {
//             headers: {
//                 'Access-Control-Allow-Origin' : '*',
//                 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             },
//             responseType: 'json',
//         })
//             .then(res => dispatch({
//                 type: FETCH_SHELTER_ENTRY,
//                 data: res.data
//             }));
//     }
// }
//
//
// export function fetchData(type, page=1, params=''){
//     const baseUrl = "http://"+HOST+":5000/api/"
//     let url = baseUrl.concat(type, "/page/", page.toString(), params);
//     let fetchType;
//     if (type === 'pet')
//         fetchType = FETCH_PET_PAGE;
//     else if (type === 'vet')
//         fetchType = FETCH_VET_PAGE;
//     else
//         fetchType = FETCH_SHELTER_PAGE;
//
//     return function(dispatch){
//         axios.get(url, {
//             headers: {
//                 'Access-Control-Allow-Origin' : '*',
//                 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             },
//             responseType: 'json',
//         })
//             .then(res => dispatch({
//                 type: fetchType,
//                 data: res.data
//             }));
//     }
// }



