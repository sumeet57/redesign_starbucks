document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    document.querySelector(".loading").style.left = "110%";
    document.querySelector("#main").style.display = "block";
  });

  // Function to initialize the timeline
  function initializeTimeline() {
    // Define viewport-based start and end values
    const startTrigger = "-40% 15%";
    let endTrigger;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust the end value based on viewport dimensions
    if (viewportWidth >= 800) {
      endTrigger = "500% 15%"; // Adjust this value for larger screens
    } else if (viewportHeight > 1000) {
      endTrigger = "800% 15%"; // Adjust this value for taller screens
    } else {
      endTrigger = "550% 15%"; // Default value for smaller screens
    }

    if (viewportHeight > 1200) {
      endTrigger = "900% 15%";
    }

    if (viewportWidth <= 350) {
      endTrigger = "450% 15%";
    }

    // Initialize GSAP timeline
    const t1 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont",
        start: startTrigger,
        end: endTrigger,
        scrub: 2,
        // markers: true, // Uncomment for debugging
      },
    });

    // Define animations
    t1.to(".page1 .cont", {
      top: "150%",
      opacity: "0.4",
      filter: "blur(2px)",
      duration: 2,
    })
      .to(".page1 .cont", {
        top: "250%",
        opacity: "0.4",
        filter: "blur(2px)",
        duration: 2, // Duration in seconds
      })
      .to(".page1 .cont", {
        top: "350%",
        opacity: "0.4",
        filter: "blur(2px)",
        duration: 2, // Duration in seconds
      });

    return t1;
  }

  // Initialize timeline
  let t1 = initializeTimeline();

  // Handle window resize to update the ScrollTrigger
  window.addEventListener("resize", () => {
    // Destroy existing ScrollTrigger
    if (t1) {
      t1.scrollTrigger.kill();
    }

    // Reinitialize timeline
    t1 = initializeTimeline();
  });

  //rotate cup
  if (window.innerWidth >= 800 && window.innerHeight > 1000) {
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "380%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "270% 100%",
        // end: "170% 95%",
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "67%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "550% 100%",
        // end: "300% 95%",
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "587%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "820% 100%",
        // end: "525% 95%",
      },
    });
  } else if (window.innerWidth >= 800) {
    gsap.to(".page1 .cont .g", {
      filter: "blur(30px)",
      "--bg-position-x": "380%",
      filter: "blur(0px)",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "180% 100%",
        // end: "170% 95%",
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "67%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "360% 100%",
        // end: "340% 95%",
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "344%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "560% 100%",
        // end: "525% 95%",
      },
    });
  } else {
    gsap.to(".page1 .cont .g", {
      filter: "blur(30px)",
      "--bg-position-x": "380%",
      filter: "blur(0px)",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "220% 100%",
        end: "170% 95%",
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "67%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "400% 100%",
        end: "340% 95%",
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "587%",
      "--bg-position-y": "-85px",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".page1 .cont .g",
        start: "600% 100%",
        end: "525% 95%",
      },
    });
  }

  //nav

  let flag = 0;
  let bt_menu = document.querySelector(".menu-icon");
  let bt_close = document.querySelector(".close-icon");
  bt_menu.addEventListener("click", () => {
    if (flag == 0) {
      let n1 = gsap.timeline();
      n1.to(".full-menu", {
        left: 0,
      });
      n1.to(".full-menu p", {
        opacity: 1,
        transform: "translateY(-0%)",
        stagger: 0.15,
      });
      flag = 1;
    }
  });
  bt_close.addEventListener("click", () => {
    if (flag == 1) {
      let n1 = gsap.timeline();
      n1.to(".full-menu p", {
        opacity: 0,
        transform: "translateY(-80%)",
        stagger: 0.15,
      });
      n1.to(".full-menu", {
        left: "100%",
      });
      flag = 0;
    }
  });
});
