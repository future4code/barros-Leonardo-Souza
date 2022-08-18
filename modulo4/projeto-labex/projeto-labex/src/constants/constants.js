export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/"

export const myHeaders = {
  headers: {
    auth: localStorage.getItem("token"),
  },
};