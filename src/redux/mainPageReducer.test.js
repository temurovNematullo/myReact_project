import mainPageReducer, {addNewPost, deletePost} from "./mainPageReducer"

describe ("mainPageReducer", ()=>{
  test('addNewPost in postData', () => { 
       // 1️ Исходное состояние
       const initialState = {
        postData: [{ id: 1, message: "Pixel art is my life)" }]
       }
     // 2 Действие: вызываем `addNewPost`
        const action = addNewPost("heheey btch")
        const newState = mainPageReducer(initialState, action)

      // 3️ Проверка
      expect(newState.postData.length).toBe(2)
      expect(newState.postData[1].message).toBe("heheey btch")
      expect(newState.postData[1].id).toBe(2); 
    })

    test ('should delete post with correct id', ( )=>{
      const initialState = {
        postData: [{ id: 1, message: "Pixel art is my life)" }]
       }

      const action = deletePost(1);
      const newState = mainPageReducer(initialState, action);
      
      expect(newState.postData.length).toBe(0);
      expect(newState.postData.find(p => p.id === 1)).toBeUndefined();
    })

     test ('deletePost with incorrect id', () =>{
      const initialState = {
        postData: [{ id: 1, message: "Pixel art is my life)" }]
       }

       const action = deletePost(34414543)
       const newState = mainPageReducer(initialState, action)

        expect(newState.postData.length).toBe(1)

     })
})