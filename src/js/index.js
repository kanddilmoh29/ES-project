import  axios from 'axios';

async function getResults(query) {
    const key = '544e6540b1f9d6bf2ae8117f1b401fc9';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes) 
    } catch (error) {
        alert(error) 
    }
}
getResults('pizza');

// 
// 
