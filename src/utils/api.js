import axios from 'axios'


export async function getImg() {
 const data = await axios.get('https://api.imgflip.com/get_memes')
  .catch( error => console.log(error));
 return data.data;
}