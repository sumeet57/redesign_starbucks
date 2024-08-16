document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    document.querySelector(".loading").style.left = "110%";
    document.querySelector("#main").style.display = "block";
  });

  // Function to initialize the timeline
  function initializeTimeline() {
    const startTrigger = "-40% 15%";
    let endTrigger;
    let hasTriggered = false;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (viewportHeight > 1200) {
      endTrigger = "900% 15%";
    } else if (viewportHeight > 1000) {
      endTrigger = "800% 15%";
    } else if (viewportWidth >= 800 && viewportHeight < 1000) {
      endTrigger = "500% 15%";
    } else if (viewportWidth <= 350) {
      endTrigger = "550% 15%";
    } else if (viewportHeight < 700) {
      endTrigger = "500% 15%";
    } else {
      endTrigger = "600% 15%";
    }

    const t1 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont",
        start: startTrigger,
        end: endTrigger,
        scrub: 2,
        onUpdate: (self) => {
          // console.log("Update progress:", self.progress);
          if (self.progress === 1 && !hasTriggered) {
            document.querySelector(".page1 .home_img").style.opacity = "1";
            document.querySelector(".div1 .div1_img").style.opacity = "0.5";
            document.querySelector(".div2 .div2_img").style.opacity = "0.5";
            document.querySelector(".div3 .div3_img").style.opacity = "0.5";
            document.querySelector(".page1 .cont").style.opacity = "0";
            document.querySelector(".page1 .cont").style.display = "none";
            hasTriggered = true;
          }
        },
        // markers: true, // Uncomment for debugging
      },
    });

    t1.to(".page1 .cont", {
      y: "100vh",
      opacity: 0.4,
      duration: 4,
      ease: "power2.out",
    })
      .to(".page1 .cont", {
        y: "200vh",
        opacity: 0.4,
        duration: 4,
        ease: "power1.out",
      })
      .to(".page1 .cont", {
        y: "300vh",
        opacity: 0.4,
        duration: 4,
        ease: "power1.out",
      });

    return t1;
  }

  // Ensure function is called after the DOM is fully loaded
  window.onload = initializeTimeline;

  // Initialize timeline
  // let t1 = initializeTimeline();

  // // Handle window resize to update the ScrollTrigger
  // window.addEventListener("resize", () => {
  //   // Destroy existing ScrollTrigger
  //   if (t1) {
  //     t1.scrollTrigger.kill();
  //   }

  //   // Reinitialize timeline
  //   t1 = initializeTimeline();
  // });

  //rotate cup
  if (window.innerWidth >= 800 && window.innerHeight > 1000) {
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "380%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "270% 100%",
        end: "300% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "67%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "550% 100%",
        end: "580% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "587%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "820% 100%",
        end: "850% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
  } else if (window.innerWidth >= 800) {
    gsap.to(".page1 .cont .g", {
      filter: "blur(2px)", // Removed one filter
      "--bg-position-x": "380%",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "180% 100%",
        end: "210% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "67%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "360% 100%",
        end: "390% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "344%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "560% 100%",
        end: "590% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
  } else {
    gsap.to(".page1 .cont .g", {
      filter: "blur(2px)", // Removed one filter
      "--bg-position-x": "380%",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "220% 100%",
        end: "250% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "67%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "400% 100%",
        end: "430% 100%",
        ease: "power1.out",
        duration: 2,
      },
    });
    gsap.to(".page1 .cont .g", {
      "--bg-position-x": "587%",
      "--bg-position-y": "-85px",
      transform: "translateZ(0)", // Forces hardware acceleration
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1 .cont .g",
        start: "600% 100%",
        end: "630% 100%",
        ease: "power1.out",
        duration: 2,
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
