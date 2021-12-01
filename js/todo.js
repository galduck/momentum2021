const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos =[];

function saveToDos(){ 
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
  // 이 function의 역할은 toDos array를 localStorage에 집어 넣는 것 
}

function deleteToDo(event){
  const li = event.target.parentElement; // 원하는 항목 하나를 부모랑 같이 선택
  li.remove(); // 원하는 항목 하나만 삭제  
}

function paintToDo(newTodo){ // ToDo를 그리는 역할
  // const li의 li는 태그이름과 같지 않아도 됨 const potato 여도 ok
  // 하지만 createElement("li")의 li는 꼭 태그 이름과 같아야 함
  const li = document.createElement("li"); // li라는 html 태그를 만듦
  const span  = document.createElement("span"); // span이라는 html 태그를 만듦
  span.innerText = newTodo; 
  // span안에 새로운 text를 넣음
  // 안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo 값임 
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener( "click", deleteToDo );
  li.appendChild(span); // li가 span이라는 child를 가지게 됨
  li.appendChild(button);

  toDoList.appendChild(li); // li를 toDoList라는 ul 안에 집어 넣음
}
  
function handleToDoSubmit(event){
  event.preventDefault(); // input을 submit 해도 새로고침이 일어나지 않음 
  const newTodo = toDoInput.value; // 입력받은 todo 값을 newTodo에 저장하기 
  toDoInput.value = ""; // todo 입력 다 받았으면 인풋칸을 비워주기
  toDos.push(newTodo); // 입력받은 텍스트(newTodo)를 toDos Array에 push하고 
  paintToDo(newTodo); // 그 다음 화면에 toDo를 그려줌
  saveToDos(); // 그리고 나서 ToDo들을 저장함 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// submit 버튼을 클릭해야 handleToDoSubmit이 실행됨

// function sayHello(item){
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
}
