

// π₯ μ€ν¬λ‘€ νλ©΄ κΈμκ° μλμμ μλ‘ μ¬λΌμ€λλ‘ λ§λ€κΈ°

const text = document.querySelectorAll(".text");

// βμ€ν¬λ‘€μ μλμμ μλ‘ μ¬λ Έμ λ λ²λ²κ±°λ¦Ό μμ κΈ° β‘οΈ μ¬λμ μ§λ¬ΈνκΈ°!
// β μμ κΈ΄ μμ΄μΌλ λ­κ° μμ±μ°

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





// π₯ boxκ° μ μ  μμμ§λ©΄μ κ°μ΄λ°λ‘ λͺ¨μ΄κ² λ§λ€κΈ°

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

// π₯ hover κ° λλ©΄ hover λ λ©λ΄ μμ΄νμ widthμμ μμνμ widthλ₯Ό λΉΌμ€ κ° x λ§νΌ λλ¨Έμ§ λ°μ€λ€μ΄ μ΄λνκ³ , hover μνκ° λλλ©΄ λ€μ μμνλ‘ λμμ€λ κΈ°λ₯ κ΅¬ν

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


// π₯ modal

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



// π₯ navbarμ΄κΈ°

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__open");
  } else {
    navbar.classList.remove("navbar__open");
  }
});
// π₯ ν΄λ¦­νλ©΄ ν΄λΉ μΉ΄νκ³ λ¦¬ νλ©΄μΌλ‘ μ΄λ!

// βλκ°κ° μ°λλμ΄ μμ§μ΄λ μ€λ₯
// μ€κ°μ λ²νΌμ ν΄λ¦­ν΄λ²λ¦¬λ©΄ μμ intersecting observerκ° κ΄μ°°νκ³  μλ μΉμμ΄ κΈμμ€λ½κ² λ°λκ² λ¨ 

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  const scrollTo = document.querySelector(link)
  scrollTo.scrollIntoView({ behavior: "smooth" });
});







// π₯ javascript section μ΄λ
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