//Question#1:
// Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

// const createAdder = (num1) => (num2) => num1 + num2; 
  
 // let addFive = createAdder(5); 
 // console.log(addFive(10)); 
 // console.log(addFive(25));
 
 //Question#2:
 // Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
 
 // const searchInArray = (arr, value) => { 
 //         if (arr.length === 0) { 
 //                 return false; 
 //         } else if (arr[0] === value) { 
 //                 return true; 
 //         } 
 //         return searchInArray(arr.slice(1), value); 
 // }; 
  
 // console.log(searchInArray([2, 3, 4, 56], 4));
 
 //Question#3:
 // Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.
 
 // const addParagraph = (content) => { 
 //         const para = document.createElement('p'); 
 //         para.textContent = content; 
 //         document.body.appendChild(para); 
 // }; 
  
 // addParagraph('This is the bottom of the HTML document'); 
 // addParagraph('Hello i am at the bottom');
 
 //Question#4:
 // Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
 
 // const addListItemToList = (content) => { 
 //     let item = document.createElement('li'); 
 //     item.textContent = content; 
 //     let list = document.getElementById("list"); 
 //     list.appendChild(item); 
 // }; 
  
 // addListItemToList("Do homechores"); 
 // addListItemToList("Do breakfast"); 
 // addListItemToList("Brush your teeths");
 
 //Question#5:
 //Write the function that changes the background color of  HTML element.The function should take two arguments: the first argument is the reference to the HTML element, and the second argument is a string representing the new background color.


 // const changeBackgroundColor = (element, color) => { 
 //         element.style.backgroundColor = color; 
 // }; 
  
 // const HtmlEle = document.getElementById('element'); 
 // changeBackgroundColor(HtmlEle, 'blue'); 
 // changeBackgroundColor(HtmlEle, 'purple'); 
 // changeBackgroundColor(HtmlEle, 'yellow');
 
  //Question#6:
 //Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
 
 // const saveToLocalStorage = (keyName, objValue) => { 
 //         localStorage.setItem(keyName, JSON.stringify(objValue)); 
 // }; 
  
 // const myData = { 
 //         id: '2278', 
 //         email: 'mufazaaleem@gmail.com', 
 //         name: 'Mufaza', 
 // }; 
  
 // saveToLocalStorage('my Data', myData);
 
 
 
  //Question#7:
 // Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

// function retrieveFromLocalStorage(keyName) { 
 //     const storedData = localStorage.getItem(keyName); 
 //     return JSON.parse(storedData) 
 // } 
 // console.log(retrieveFromLocalStorage("my Data"));
 
 
  //Question#8:
 // Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.
 
 
 // function saveToLocalStorage(obj) { 
 //         Object.keys(obj).forEach((key) => localStorage.setItem(key, JSON.stringify(obj[key]))); 
  
 //         const storedEntries = Object.keys(localStorage).reduce((entries, key) => { 
 //                 entries[key] = JSON.parse(localStorage.getItem(key)); 
 //                 return entries; 
 //         }, {}); 
  
 //         return storedEntries; 
 // } 
  
 // let myObj = { 
 //         name: 'Mufaza', 
 //         email: 'mufazaaleem@gmail.com', 
 //         country: 'Pakistan', 
 // }; 
  
 // console.log(saveToLocalStorage(myObj));
 
 
 
 