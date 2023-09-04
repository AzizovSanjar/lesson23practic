// 1)

// Создать кнопку получить данные, по клику на нее вызвать GET запрос

// на адрес https://jsonplaceholder.typicode.com/users

// Сделать все это с помощью async await

// const btnClick = document.getElementById("btnClick");

// btnClick.addEventListener("click", async function () {

//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
//   let data = await response.json()
  
//   console.log(data);
  
// });



//2)

//Создать кнопку получить данные, по клику на нее вызвать GET запрос

//на адрес https://jsonplaceholder.typicode.com/users

//Сделать все это с помощью async await, с помощтю InnerHTML отобразить данные

//На странице

// const btnClick = document.getElementById('btnClick'); 
//     const usersList = document.getElementById('usersList'); 
//  // добавляем слушатель событий 
//     btnClick.addEventListener('click', async () => { 
//         try { 
//             const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
             
//             if (!response.ok) { 
//                 throw new Error('Ошибка получения данных'); 
//             } 
 
//             const data = await response.json(); 
 
//             // Очищаем вывод перед добавлением новых данных 
//             usersList.innerHTML = ''; 
 
//             data.forEach(user => { 
//                 const userL = document.createElement('div'); 
//                 userL.innerHTML = ` 
//                     <li data-id=${user.id}>${user.name}</li> 
                   
//                 `; 
//                 usersList.appendChild(userL); 
//             }); 
//         } catch (error) { 
//             console.error('Произошла ошибка:', error); 
//         } 
//     });



   // 3. Создать input type=“number”, получить с него value которое будет сравниваться

   // с вашим возрастом, в async function вернуть либо Promise.resolve(“Успех”) ,
    
   // либо Promise.reject(“Ошибка”)
    
   // Отобразить в консоли результат использовать then и catch

async function Age() {
  try{
    const inputValue = parseInt(document.getElementById('ageInput').value)
    const myAge = 29

    if (inputValue === myAge) {
      return Promise.resolve('УСПЕХ')
    }
    else {
      return Promise.reject('ОШИБКА')
    }
  } catch (error) {
    return Promise.reject(error.message)
  }
}
const btnButton = document.getElementById('btnButton')
btnButton.addEventListener('click', () => {
  Age()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
})




