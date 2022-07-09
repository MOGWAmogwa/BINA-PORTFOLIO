// 🥕 클릭하면 해당 카테고리 화면으로 이동!

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

const homeLink = document.querySelector("[data-home]");
homeLink.addEventListener("click", (e) => {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

// 🥕 투명효과
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarLogo = document.querySelector(".navbar__logo");
const navabarLogoHeight = navbarLogo.getBoundingClientRect().height;
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const wholeHeight = navbarHeight + homeHeight + navabarLogoHeight;
document.addEventListener("scroll", () => {
  if (window.scrollY > wholeHeight / 2) {
    home.style.opacity = `${1 - window.scrollY / wholeHeight}`;
  } else {
    home.style.opacity = 1;
  }
});

// 🥕 스크롤 하면 navbar 하단 border 없애기

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__border-transparent");
  } else {
    navbar.classList.remove("navbar__border-transparent");
  }
});

// const workBtnContainer = document.querySelector('.work__categories');
// const projectContainer = document.querySelector('.work__projects');
// const projects = document.querySelectorAll('.project');
// workBtnContainer.addEventListener('click', (e)=> {
//     const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
//     if(filter == null){
//         return;
//     })

// categoryBtn.addEventListener('click', (e)=>{
//     const target = e.target;
//     const filter = target.dataset.filter;

//     // 카테고리 버튼을 클릭 했을 때의 data filter값과 type의 값이 같으면 배열을 반환한다
//     let a = [...projects].filter(item=>{
//         item.dataset.type===filter
//     })

//     console.log(a);
// })

// workProjects.forEach(project=>{
//     project.addEventListener('click', (e)=>{
//         let target = e.target.parentNode;
//         let type = target.dataset.type;
//         if(target.className === 'projects__description'){
//           target = target.parentNode;
//           type = target.dataset.type
//         }

//     })
// })
