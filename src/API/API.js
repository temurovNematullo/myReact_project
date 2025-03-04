import axios from "axios";

const instance = axios.create ({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
      "API-KEY": "a3d95ea9-74dc-4f72-ab42-31c05e299502"
    }
  
})

export const UsersAPI = {
  Delete(user) {
    return  instance.delete(`follow/${user.id}`).then(response => response.data.resultCode);
   
  },
  Post(user){
    return instance.post(`follow/${user.id}`).then(response => response.data.resultCode)
  },
  GetUsers(currentPage, pageSize){
     return instance.get(`users?page=${currentPage}&count=${pageSize}`,{withCredentials:true}).then(response => response.data)
  }
};

export const ProfileAPI = {
  GetProfileUser(userId){
    return  instance.get(`profile/${userId}`).then
    (response => response.data)
  },
  GetStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error("❌ Ошибка в API-запросе:", error.response?.data || error.message);
      });
  },
 UpdateStatus(status){
  return instance.put( `profile/status`,{status}).then
  (response=> response.data)
 }
}

export const AuthAPI = {
 
  AuthMe () {
   // Здесь используется instance для выполнения GET-запроса к указанному URL.
   // Метод instance.get возвращает промис, который позволяет обрабатывать асинхронный ответ.
   return instance.get("auth/me")
     // Метод then используется для обработки успешного выполнения промиса.
     // В данном случае, мы получаем ответ и возвращаем только данные из него.
     .then(response => response.data)
  }
  
}


