// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  }

  // ========================================
  // ACTIVE NAVIGATION HIGHLIGHTING
  // ========================================

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // ========================================
  // SMOOTH SCROLLING FOR ANCHOR LINKS
  // ========================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ========================================
  // FORM VALIDATION AND SUBMISSION
  // ========================================

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Basic validation
      let isValid = true;
      const requiredFields = ["name", "email", "message"];

      requiredFields.forEach((field) => {
        const input = this.querySelector(`[name="${field}"]`);
        if (!formObject[field] || formObject[field].trim() === "") {
          isValid = false;
          showError(input, "This field is required");
        } else {
          clearError(input);
        }
      });

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formObject.email && !emailRegex.test(formObject.email)) {
        isValid = false;
        showError(
          this.querySelector('[name="email"]'),
          "Please enter a valid email address",
        );
      }

      if (isValid) {
        // Simulate form submission
        const submitButton = this.querySelector(".submit-button");
        const originalText = submitButton.textContent;

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
          submitButton.textContent = "Message Sent!";
          submitButton.style.backgroundColor = "#28a745";

          // Reset form
          setTimeout(() => {
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "";
          }, 2000);
        }, 1500);
      }
    });
  }

  // ========================================
  // ANIMATION ON SCROLL
  // ========================================

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".work-card, .category-card, .cv-section, .stat-item, .project-item, .about-text, .skills-section h2, .values-section h2, .cta-content",
  );
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // ========================================
  // CV DOWNLOAD TRACKING
  // ========================================

  const downloadBtn = document.querySelector(".download-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      // Track download event (could be sent to analytics)
      console.log("CV download initiated");

      // Add visual feedback
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);
    });
  }

  // ========================================
  // SKILL PROGRESS ANIMATION (for future use)
  // ========================================

  function animateSkills() {
    const skillBars = document.querySelectorAll(".skill-progress");
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  }

  // Trigger skill animation when skills section is visible
  const skillsSection = document.querySelector(".skills-section");
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    skillsObserver.observe(skillsSection);
  }

  // ========================================
  // IMAGE LAZY LOADING
  // ========================================

  const lazyImages = document.querySelectorAll("img[data-src]");
  if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  // ========================================
  // BACK TO TOP BUTTON
  // ========================================

  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = "↑";
  backToTopBtn.className = "back-to-top";
  backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    `;

  document.body.appendChild(backToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.visibility = "hidden";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================

  function showError(input, message) {
    clearError(input);

    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
        `;

    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = "#dc3545";
  }

  function clearError(input) {
    const existingError = input.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    input.style.borderColor = "";
  }

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================

  document.addEventListener("keydown", function (e) {
    // Escape key closes mobile menu
    if (e.key === "Escape" && nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  // ========================================
  // PREVENT RIGHT-CLICK ON IMAGES (optional)
  // ========================================

  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  });

  // ========================================
  // LOADING ANIMATION
  // ========================================

  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Add loading class initially
  document.body.classList.add("loading");

  // ========================================
  // RESPONSIVE IMAGE HANDLING
  // ========================================

  function handleResponsiveImages() {
    const profileImage = document.querySelector(".profile-image");
    if (profileImage) {
      const updateImageSize = () => {
        if (window.innerWidth <= 480) {
          profileImage.style.maxWidth = "250px";
        } else if (window.innerWidth <= 768) {
          profileImage.style.maxWidth = "300px";
        } else {
          profileImage.style.maxWidth = "400px";
        }
      };

      window.addEventListener("resize", updateImageSize);
      updateImageSize();
    }
  }

  handleResponsiveImages();

  // ========================================
  // THEME TOGGLE (for future dark mode implementation)
  // ========================================

  function initThemeToggle() {
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }

  initThemeToggle();

  // ========================================
  // PERFORMANCE MONITORING
  // ========================================

  // Log page load performance
  window.addEventListener("load", function () {
    if ("performance" in window) {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        "Page load time:",
        perfData.loadEventEnd - perfData.fetchStart,
        "ms",
      );
    }
  });

  // ========================================
  // ERROR HANDLING
  // ========================================

  window.addEventListener("error", function (e) {
    console.error("JavaScript error:", e.error);
    // Could send error to analytics service
  });

  window.addEventListener("unhandledrejection", function (e) {
    console.error("Unhandled promise rejection:", e.reason);
    // Could send error to analytics service
  });

  // ========================================
  // ACCESSIBILITY IMPROVEMENTS
  // ========================================

  // Add focus indicators for keyboard navigation
  const focusableElements = document.querySelectorAll(
    "a, button, input, textarea, select",
  );
  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid var(--primary-color)";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "";
    });
  });

  // Skip to main content link (for screen readers)
  const skipLink = document.createElement("a");
  skipLink.href = "#main";
  skipLink.className = "skip-link";
  skipLink.textContent = "Skip to main content";
  skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top 0.3s;
    `;

  document.body.insertBefore(skipLink, document.body.firstChild);

  skipLink.addEventListener("focus", function () {
    this.style.top = "6px";
  });

  skipLink.addEventListener("blur", function () {
    this.style.top = "-40px";
  });

  // ========================================
  // PRINT STYLES HANDLING
  // ========================================

  // Add print-specific styles
  const printStyles = document.createElement("style");
  printStyles.textContent = `
        @media print {
            .menu-toggle, .back-to-top, .skip-link {
                display: none !important;
            }
            nav {
                position: static !important;
                max-height: none !important;
                background: transparent !important;
                box-shadow: none !important;
            }
            nav a {
                border: none !important;
            }
        }
    `;
  document.head.appendChild(printStyles);

  console.log("Portfolio JavaScript loaded successfully");
});
