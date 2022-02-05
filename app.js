// var titles =document.getElementsByClassName('title');
// // console.log(titles);
// titlesArray=Array.from(titles);
// // console.log(Array.from(titles));

// titlesArray.forEach(title => {
//     console.log(title);
    
// });
// var books=document.querySelectorAll('#book-list ul li .name');
// // console.log(books);
// var bookList =Array.from(books)
// bookList.forEach((book)=>{
//     book.textContent+=`(book Title)`
//     console.log(book.textContent);
// }) 
// var btns =document.querySelectorAll("#book-list .delete")
// Array.from(btns).forEach((btn)=>{
//     btn.addEventListener('click',function(e){
//         const li = e.target.parentElement;
//         // console.log(li.parentNode);
//         li.parentNode.removeChild(li);
//         // console.log(e.target.parentElement);
//         // const li = e.target 
//     })
// })

var list =document.querySelector('#book-list ul');
list.addEventListener('click',(e)=>{
    var li = e.target.parentElement;
    li.parentNode.removeChild(li)
    // console.log(li.parentNode)
})
var addForm =document.forms['add-book'];
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value =addForm.querySelector('input[type="text"]').value;
   const li = document.createElement('li');
   const bookName = document.createElement('span')
   const deleteBtn = document.createElement('span')
   bookName.textContent=value
   deleteBtn.textContent ='delete'
   bookName.classList.add('name')
   deleteBtn.classList.add('delete')

   li.appendChild(bookName)
   li.appendChild(deleteBtn)
   list.appendChild(li)
    console.log(value);
})

var hideBox =document.querySelector("#hide")

hideBox.addEventListener('change',(e)=>{
    if(hideBox.checked){
        list.style.display='none'
    }else{
        list.style.display='initial'
    }
})

var searchBar=document.forms['search-books'];

var searchValue=document.querySelector('input');

searchBar.addEventListener('keyup',(e)=>{
    var tarms =e.target.value.toLowerCase();
    const books =list.getElementsByTagName('li');
    Array.from(books).forEach((book)=>{
        const title=book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(tarms)!=-1){
            book.style.display='block'
        }else{
            book.style.display='none'
        }
    })
   
})