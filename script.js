document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    let temp = 0;
    setTimeout(() => {
      document.querySelector(".loading").style.left = "110%";
      temp = 1;
    }, 2000);

    if (temp == 1) {
      document.querySelector(".loading").remove();
    }

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
        scrub: true,
        onUpdate: (self) => {
          // console.log("Update progress:", self.progress);
          if (self.progress === 1 && !hasTriggered) {
            requestAnimationFrame(() => {
              document.querySelector(".page1 .home_img").style.opacity = "1";
              document.querySelector(".div1 .div1_img").style.opacity = "0.5";
              document.querySelector(".div2 .div2_img").style.opacity = "0.5";
              document.querySelector(".div3 .div3_img").style.opacity = "0.5";
              document.querySelector(".page1 .cont").style.opacity = "0";
              document.querySelector(".page1 .cont").style.display = "none";
              hasTriggered = true;
            });
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

  function animateCup(
    selector,
    start,
    end,
    bgPositionX,
    bgPositionY,
    filter = null
  ) {
    requestAnimationFrame(() => {
      let gsapConfig = {
        "--bg-position-x": bgPositionX,
        "--bg-position-y": bgPositionY,
        transform: "translateZ(0)", // Forces hardware acceleration
        scrollTrigger: {
          scroller: "body",
          trigger: selector,
          start: start,
          end: end,
          ease: "power1.out",
          duration: 2,
        },
      };

      // if (filter) {
      //   gsapConfig.filter = filter;
      // }

      gsap.to(selector, gsapConfig);
    });
  }

  // Rotate cup based on viewport dimensions
  if (window.innerWidth >= 800 && window.innerHeight > 1000) {
    animateCup(".page1 .cont .g", "270% 100%", "300% 100%", "380%", "-85px");
    animateCup(".page1 .cont .g", "550% 100%", "580% 100%", "67%", "-85px");
    animateCup(".page1 .cont .g", "820% 100%", "850% 100%", "587%", "-85px");
  } else if (window.innerWidth >= 800) {
    animateCup(
      ".page1 .cont .g",
      "180% 100%",
      "210% 100%",
      "380%",
      "-85px",
      "blur(2px)"
    );
    animateCup(".page1 .cont .g", "360% 100%", "390% 100%", "67%", "-85px");
    animateCup(".page1 .cont .g", "560% 100%", "590% 100%", "344%", "-85px");
  } else {
    animateCup(
      ".page1 .cont .g",
      "220% 100%",
      "250% 100%",
      "380%",
      "-85px",
      "blur(2px)"
    );
    animateCup(".page1 .cont .g", "400% 100%", "430% 100%", "67%", "-85px");
    animateCup(".page1 .cont .g", "600% 100%", "630% 100%", "587%", "-85px");
  }

  //nav

  let flag = 0;
  let bt_menu = document.querySelector(".menu-icon");
  let bt_close = document.querySelector(".close-icon");

  bt_menu.addEventListener("click", () => {
    if (flag == 0) {
      requestAnimationFrame(() => {
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
      });
    }
  });

  bt_close.addEventListener("click", () => {
    if (flag == 1) {
      requestAnimationFrame(() => {
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
      });
    }
  });
});
