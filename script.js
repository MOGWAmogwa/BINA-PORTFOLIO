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

// 🥕 Navbar 투명효과

const repeat = (tagName, height, number) => {
  if (window.scrollY > height / number) {
    tagName.style.opacity = `${1 - window.scrollY / height}`;
  } else {
    tagName.style.opacity = 1;
  }
};

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarLogo = document.querySelector(".navbar__logo");
const navabarLogoHeight = navbarLogo.getBoundingClientRect().height;
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const wholeHeight = navbarHeight + homeHeight + navabarLogoHeight;

document.addEventListener("scroll", () => {
  repeat(home, wholeHeight, 1.3);
});

// 🥕 스크롤 하면 navbar 하단 border 없애기

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__border-transparent");
  } else {
    navbar.classList.remove("navbar__border-transparent");
  }
});

// 🥕 스크롤 하면 글자가 아래에서 위로 올라오도록 만들기

// const about = document.querySelector("#about");
// const aboutHeight = about.getBoundingClientRect().height;
// const allAboutHeight = aboutHeight + wholeHeight;
// document.addEventListener("scroll", () => {
//   repeat(about, allAboutHeight, 1.1);
// });

const text = document.querySelectorAll(".text");


// ❓스크롤을 아래에서 위로 올렸을 때 버벅거림 없애기 ➡️ 슬랙에 질문하기!
// ✅ 없애긴 없앴으나 뭔가 엉성쓰

const textOption = {
  root: null,
  rootMargein: "0px",
  threshold: 0.9, // 0~1
};


const textUp = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // if(Math.abs(entry.boundingClientRect.y)<300){
      //   entry.target.style.top = "0px"
      // }
      
    } else {

      return;
      
    }
  });
};

const textObserver = new IntersectionObserver(textUp, textOption);

text.forEach((t) => textObserver.observe(t));

// 🥕 box가 점점 작아지면서 가운데로 모이게 만들기

const boxes = document.querySelectorAll(".menual__item");

const boxesOption = {
  root: null,
  rootMargein: "0px",
  threshold: 0.5, // 0~1
};

const boxesToCenter = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

    } else {
      return;
    }
  });
};



const boxesObserver = new IntersectionObserver(boxesToCenter, boxesOption);

boxes.forEach((box) => boxesObserver.observe(box));



// 🥕 hover 가 되면 hover 된 메뉴 아이템의 width에서 원상태의 width를 빼준 값 x 만큼 나머지 박스들이 이동하고, hover 상태가 끝나면 다시 원상태로 돌아오는 기능 구현


boxes.forEach(box=>{
  box.addEventListener('mouseover', (e)=>{

    // if(e.currentTarget.previousElementSibling==null){
    //   const pinkNextBox= e.currentTarget.nextElementSibling.dataset.color;
    //   const green = document.querySelector(`${pinkNextBox}`);
    //   green.style.left='10px'
    // }
    // const greenNextBox = e.currentTarget.nextElementSibling.dataset.color;
    // const yellow =  document.querySelector(`${greenNextBox}`)
    // yellow.style.left = '10px'

    let hoveredBox = e.currentTarget.dataset.color;
    const greenBox = document.querySelector('.green.active');
    const yellowBox = document.querySelector('.yellow.active');
    const pinkBox = document.querySelector('.pink.active');
    switch(true){
      case hoveredBox == '.pink.active':
        yellowBox.style.left = '10px'
        greenBox.style.left = '10px'
        break
      case hoveredBox == '.green.active':
        yellowBox.style.left = '10px'
        pinkBox.style.right = '10px'

        break
      case hoveredBox == '.yellow.active':
        pinkBox.style.right = '10px'
        greenBox.style.left = '-10px'
        break
    }

  })
})


boxes.forEach(box=>{
  box.addEventListener('mouseleave', (e)=>{


    let hoveredBox = e.currentTarget.dataset.color;
    const greenBox = document.querySelector('.green.active');
    const yellowBox = document.querySelector('.yellow.active');
    const pinkBox = document.querySelector('.pink.active');
    switch(true){
      case hoveredBox == '.pink.active':
        yellowBox.style.left = '0px'
        greenBox.style.left = '0px'
        break
      case hoveredBox == '.green.active':
        yellowBox.style.left = '0px'
        pinkBox.style.right = '0px'

        break
      case hoveredBox == '.yellow.active':
        pinkBox.style.right = '0px'
        greenBox.style.left = '0px'
        break
    }

  })
})






//nextElementSibling
//previousElementSibling
//    console.log(e.currentTarget.previousElementSibling);














// 1. 모든 섹션 요소들과 메뉴아이템을 가지고 온다.
// 2. intersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

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

// const boxes = document.querySelectorAll('.box');

// const option = {
//   root : document.querySelector('.container'),
//   rootMargein : '0px',
//   threshold : 1 // 0~1
// }

// const callback = (entries, observer) =>{
//   entries.forEach(entry =>{
//     if(entry.isIntersecting){
//       entry.target.classList.add('active')
//     }else {
//       entry.target.classList.remove('active')
//     }
//   })
// }

// const observer = new IntersectionObserver(callback, option)

// boxes.forEach(box => observer.observe(box))
