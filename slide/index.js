const btnList = document.querySelectorAll(".btns button");
const slideList = document.querySelector(".slideList");
// 각 버튼 클릭시 얼럿창에 번호 출력
const btnSlide = document.querySelectorAll(".btnSlide");
const btnSlidePrev = document.querySelectorAll(".prev");
const btnSlideNext = document.querySelectorAll(".next");
/* btnList[0].addEventListener("click", function () {
  alert("1번 버튼");
});
btnList[1].addEventListener("click", function () {
  alert("2번 버튼");
});
btnList[2].addEventListener("click", function () {
  alert("3번 버튼");
}); */
let index = 0;

btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    // alert(`${idx}번 버튼 클릭!`);
    // 슬라이드 리스트 이동시키기
    index = idx;
    slideList.style.transform = `translate(${index * -100}%)`;
    // slideList.style.transform = ` translate(${idx * -100} %)`;
  });
});

/* 
btnSlide[0].addEventListener("click", () => {
  alert(--idx);
});
btnSlide[1].addEventListener("click", () => {

}); */
btnSlide.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("prev")) index > 0 && --index;
    else if (btn.classList.contains("next")) index < 2 && ++index;
    slideList.style.transform = `translate(${index * -100}%)`;
  });
});
