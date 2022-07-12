const viewPortOption = {
  root: null,
  rootMargein: "0px",
  threshold: 1, // 0~1
};

const viewPortObserver = new IntersectionObserver(viewPortUp, viewPortOption);

const viewPortUp = (entries, viewPortObserver) => {

  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.scrollIntoView({behavior: 'smooth'})

    } else {
      return;
    }
  });

};



viewPort.forEach((v) => viewPortObserver.observe(v));
