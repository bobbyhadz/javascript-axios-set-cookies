// EXAMPLE 1 - Set Cookies when making an Axios request in JS and Node

import axios from 'axios';

async function getUser() {
  try {
    const response = await axios.get(
      'https://randomuser.me/api/',
      // 👇️ set withCredentials to `true`
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());
