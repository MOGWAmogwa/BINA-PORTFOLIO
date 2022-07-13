

// 🥕 스크롤 하면 글자가 아래에서 위로 올라오도록 만들기

const text = document.querySelectorAll(".text");

// ❓스크롤을 아래에서 위로 올렸을 때 버벅거림 없애기 ➡️ 슬랙에 질문하기!
// ✅ 없애긴 없앴으나 뭔가 엉성쓰

const textOption = {
  root: null,
  rootMargein: "0px",
  threshold: 0.9, // 0~1
};

const textUp = (entries, textObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
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

const boxesToCenter = (entries, boxesObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
        entry.target.classList.remove("active");
    }
  });
};

const boxesObserver = new IntersectionObserver(boxesToCenter, boxesOption);

boxes.forEach((box) => boxesObserver.observe(box));

// 🥕 hover 가 되면 hover 된 메뉴 아이템의 width에서 원상태의 width를 빼준 값 x 만큼 나머지 박스들이 이동하고, hover 상태가 끝나면 다시 원상태로 돌아오는 기능 구현

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    let hoveredBox = e.currentTarget.dataset.color;
    const greenBox = document.querySelector(".green.active");
    const yellowBox = document.querySelector(".yellow.active");
    const pinkBox = document.querySelector(".pink.active");
    switch (true) {
      case hoveredBox == ".pink.active":
        yellowBox.style.left = "10px";
        greenBox.style.left = "10px";
        break;
      case hoveredBox == ".green.active":
        yellowBox.style.left = "10px";
        pinkBox.style.right = "10px";

        break;
      case hoveredBox == ".yellow.active":
        pinkBox.style.right = "10px";
        greenBox.style.left = "-10px";
        break;
    }
  });
});

boxes.forEach((box) => {
  box.addEventListener("mouseleave", (e) => {
    let hoveredBox = e.currentTarget.dataset.color;
    const greenBox = document.querySelector(".green.active");
    const yellowBox = document.querySelector(".yellow.active");
    const pinkBox = document.querySelector(".pink.active");
    switch (true) {
      case hoveredBox == ".pink.active":
        yellowBox.style.left = "0px";
        greenBox.style.left = "0px";
        break;
      case hoveredBox == ".green.active":
        yellowBox.style.left = "0px";
        pinkBox.style.right = "0px";

        break;
      case hoveredBox == ".yellow.active":
        pinkBox.style.right = "0px";
        greenBox.style.left = "0px";
        break;
    }
  });
});


// 🥕 modal

const workProjectsContainer = document.querySelector(
  ".work__projects-container"
);
const modalCloseBtn = document.querySelector(".modal-close");
const body = document.querySelector("body");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    navbar.style.display = "none";
    workProjectsContainer.classList.add("open");
    modalCloseBtn.classList.add("open");
    body.classList.add("lock");
  });
});

modalCloseBtn.addEventListener("click", (e) => {
  workProjectsContainer.classList.remove("open");
  modalCloseBtn.classList.remove("open");
  navbar.style.display = "flex";
  body.classList.remove("lock");
});



// 🥕 navbar열기

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__open");
  } else {
    navbar.classList.remove("navbar__open");
  }
});
// 🥕 클릭하면 해당 카테고리 화면으로 이동!

// ❓두개가 연동되어 움직이는 오류
// 중간에 버튼을 클릭해버리면 위에 intersecting observer가 관찰하고 있는 섹션이 급작스럽게 바뀌게 됨 

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link)
  scrollTo.scrollIntoView({ behavior: "smooth" });
});







// 🥕 javascript section 이동
window.onload = function () {
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function (item, index) {
        item.addEventListener('mousewheel', function (event) {
            event.preventDefault();
            let delta = 0;

            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
                delta = -event.detail / 3;

            let moveTop = window.scrollY;
            let elmSelector = elm[index];

            // wheel down : move to next section
            if (delta < 0) {
                if (elmSelector !== elmCount - 1) {
                    try {
                        moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                    } catch (e) { }
                }
            }

            // wheel up : move to previous section
            else {
                if (elmSelector !== 0) {
                    try {
                        moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                    } catch (e) { }
                }
            }

            const body = document.querySelector('html');
            window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
        });
    });
}