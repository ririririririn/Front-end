// h1태그에 오늘 날짜 넣기
let today = new Date();
let logo = document.getElementById("logo");
let btnSubmit = document.querySelector(".footer button");
let todoList = document.querySelector(".body ul");
let todoItems = document.querySelectorAll(".body ul li");
let inputForm = document.querySelector(".footer form");
logo.innerText = today.toLocaleDateString("ko-KR", {
  dateStyle: "full",
});
let btnSave = document.querySelector(".btnSave");
// form 태그 내에서 버튼 클릭하거나 엔터입력시 submit 이벤트 발생
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
//로컬스토리지를 가져올건데 문자를 다시 자바스크립트로 가져온느 과정이 필요함:제이슨 파스
let todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => {
    todoList.innerHTML += `<li>
    <span>${todo}</span>
    <button class="btnDel">삭제</button>
    </li>`;
  });
}

// 등록 버튼 클릭시 값 읽어오기 => alert 창에 출력!
inputForm.addEventListener("submit", function () {
  let inputText = document.querySelector(".footer input");

  //   let liElem = document.createElement("li");
  //   liElem.addEventListener("click", function () {
  //     liElem.classList.toggle("done");
  //   });

  //   liElem.innerText = inputText;

  //   let buttonElem = document.createElement("button");
  //   buttonElem.innerText = "삭제";
  //   buttonElem.classList.add("btnDel");

  //   liElem.appendChild(buttonElem);

  //   todoList.appendChild(liElem);

  todoList.innerHTML += `
    <li>
        <span>${inputText.value}<span/>
        <button class = 'btnDel'>삭제</button>
    </li>
  `;
  inputText.value = "";
  inputText.focus = "";
});

// todoItems.forEach((item) => {
//   item.addEventListener("click", function () {
//     item.classList.toggle("done");
//   });
// });

todoList.addEventListener("click", function (e) {
  if (e.target.matches(".body ul li")) {
    e.target.classList.toggle("done");
  } else if (e.target.matches(".btnDel")) {
    let ok = confirm("진짜 삭제할거야?");
    if (ok) {
      //부모 요소 탐색 후 삭제
      e.target.parentElement.remove();
    }
  }
});

btnSave.addEventListener("click", function () {
  // localStorage.setItem("test", "저장됌?");
  let todoItems = document.querySelectorAll("body ul li span");
  // 유사 배열을 펼쳐서 배열로 만들기
  let todoArr = [...todoItems];
  let textList = todoArr.map((todo) => todo.innerText);
  console.log(textList);
  console.log(todoArr);
  localStorage.setItem("todos", JSON.stringify(textList));
});
console.log(localStorage.getItem("todos"));
