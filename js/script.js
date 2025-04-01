document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header__nav");

  if (!burger || !menu) {
    console.error("Burger menu elements not found!");
    return;
  }

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");

    if (burger.classList.contains("active")) {
      burger.innerHTML = "&#10006;";
    } else {
      burger.innerHTML = "&#9776;";
    }
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      burger.innerHTML = "&#9776;";
    }
  });
});

const servicesData = [
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Bitcoin Escrow Service",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Safe And Secure",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Integrated App",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Safe And Secure",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Safe And Secure",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

const wrapper = document.querySelector(".services-wrapper");

servicesData.forEach((service, index) => {
  const card = document.createElement("div");
  card.className = "service-card";
  if (index === 0) {
    card.classList.add("first-card");
  }

  card.innerHTML = `
      <h3>${service.title}</h3>
      <p class="subtitle">${service.subtitle}</p>
      <hr>
      <p class="text">${service.text}</p>
  `;
  wrapper.appendChild(card);
});

// document.querySelectorAll(".rating input").forEach((input) => {
//   input.addEventListener("change", function () {
//     const cardId = this.closest(".rating").dataset.card;
//     console.log(`Картка ${cardId} - Рейтинг: ${this.value}`);
//   });
// });

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const moduleHeaders = document.querySelectorAll(".module-header");
  const nestedHeaders = document.querySelectorAll(".nested-header");

  moduleHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  nestedHeaders.forEach((header) => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".vector");

    let closeButton = content.querySelector(".close-button");
    if (!closeButton) {
      closeButton = document.createElement("button");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2 3.80682C12.1384 3.74501 12.0651 3.69598 11.9844 3.66253C11.9038 3.62907 11.8173 3.61185 11.73 3.61185C11.6427 3.61185 11.5563 3.62907 11.4756 3.66253C11.395 3.69598 11.3217 3.74501 11.26 3.80682L8.00003 7.06015L4.74003 3.80015C4.67831 3.73843 4.60503 3.68947 4.52439 3.65606C4.44375 3.62266 4.35731 3.60547 4.27003 3.60547C4.18274 3.60547 4.09631 3.62266 4.01566 3.65606C3.93502 3.68947 3.86175 3.73843 3.80003 3.80015C3.73831 3.86187 3.68935 3.93514 3.65594 4.01579C3.62254 4.09643 3.60535 4.18286 3.60535 4.27015C3.60535 4.35744 3.62254 4.44387 3.65594 4.52451C3.68935 4.60515 3.73831 4.67843 3.80003 4.74015L7.06003 8.00015L3.80003 11.2601C3.73831 11.3219 3.68935 11.3951 3.65594 11.4758C3.62254 11.5564 3.60535 11.6429 3.60535 11.7301C3.60535 11.8174 3.62254 11.9039 3.65594 11.9845C3.68935 12.0652 3.73831 12.1384 3.80003 12.2001C3.86175 12.2619 3.93502 12.3108 4.01566 12.3442C4.09631 12.3776 4.18274 12.3948 4.27003 12.3948C4.35731 12.3948 4.44375 12.3776 4.52439 12.3442C4.60503 12.3108 4.67831 12.2619 4.74003 12.2001L8.00003 8.94015L11.26 12.2001C11.3217 12.2619 11.395 12.3108 11.4757 12.3442C11.5563 12.3776 11.6427 12.3948 11.73 12.3948C11.8173 12.3948 11.9037 12.3776 11.9844 12.3442C12.065 12.3108 12.1383 12.2619 12.2 12.2001C12.2617 12.1384 12.3107 12.0652 12.3441 11.9845C12.3775 11.9039 12.3947 11.8174 12.3947 11.7301C12.3947 11.6429 12.3775 11.5564 12.3441 11.4758C12.3107 11.3951 12.2617 11.3219 12.2 11.2601L8.94003 8.00015L12.2 4.74015C12.4534 4.48682 12.4534 4.06015 12.2 3.80682Z" fill="white" />
        </svg>
      `;
      content.appendChild(closeButton);
      closeButton.addEventListener("click", function () {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      });
    }

    header.addEventListener("click", function () {
      nestedHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherContent = otherHeader.nextElementSibling;
          const otherArrow = otherHeader.querySelector(".vector");
          otherContent.style.display = "none";
          otherArrow.style.transform = "rotate(0deg)";
        }
      });

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const accordionData = [
    {
      title: "Lorem ipsum dolor sit amet",
      imageUrl: "./img/image1.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor",
      imageUrl: "./img/image2.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      imageUrl: "./img/image5.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor",
      imageUrl: "./img/image3.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum ",
      imageUrl: "./img/image6.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum dolor sit",
      imageUrl: "./img/image4.webp",
      header: "Lorem ipsum dolor sit amet",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo consequat.",
      content2:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      footer: "Lorem ipsum",
    },
  ];

  const accordionContainer = document.querySelector("#accordion-container");

  accordionData.forEach((data, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");


    const accordionHeader = document.createElement("div");
    accordionHeader.classList.add("accordion-header");

    const headerAndImage = document.createElement("div");
    headerAndImage.classList.add("header-and-image");

    const imageFrame = document.createElement("div");
    imageFrame.classList.add("image-frame");

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-frame__wrapper");

    const image = document.createElement("img");
    image.src = data.imageUrl;
    image.alt = data.title;
    image.classList.add("image-frame__image");

    imageWrapper.appendChild(image);
    imageFrame.appendChild(imageWrapper);
    headerAndImage.appendChild(imageFrame);

    const title = document.createElement("span");
    title.textContent = data.title;
    const arrow = document.createElement("span");
    arrow.classList.add("vector");
    arrow.innerHTML = `
      <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.697873 0.605135L4.21146 3.67895C4.28812 3.74637 4.3916 3.78418 4.49944 3.78418C4.60728 3.78418 4.71077 3.74637 4.78743 3.67895L8.30176 0.605802C8.3789 0.538422 8.48272 0.500667 8.59087 0.500667C8.69902 0.500667 8.80285 0.538422 8.87999 0.605802C8.91797 0.638718 8.94816 0.67806 8.96877 0.721508C8.98938 0.764957 9 0.811633 9 0.858787C9 0.90594 8.98938 0.952617 8.96877 0.996065C8.94816 1.03951 8.91797 1.07886 8.87999 1.11177L5.36715 4.18492C5.13577 4.38686 4.82446 4.5 4.50019 4.5C4.17592 4.5 3.86461 4.38686 3.63323 4.18492L0.1204 1.11177C0.0823009 1.07884 0.0520154 1.03946 0.0313353 0.995952C0.0106552 0.952442 2.45852e-09 0.905687 4.52318e-09 0.858453C6.58785e-09 0.811219 0.0106552 0.764465 0.0313353 0.720954C0.0520154 0.677444 0.0823009 0.638061 0.1204 0.605135C0.197538 0.537755 0.301362 0.5 0.409512 0.5C0.517662 0.5 0.621485 0.537755 0.698623 0.605135" fill="white"/>
      </svg>
    `;

    accordionHeader.appendChild(headerAndImage);
    accordionHeader.appendChild(title);
    accordionHeader.appendChild(arrow);

    const accordionContent = document.createElement("div");
    accordionContent.classList.add("accordion-content");
    accordionContent.innerHTML = `
      <h3>${data.header}</h3>
      <p>${data.content1}</p>
      <p>${data.content2}</p>
      <footer>${data.footer}</footer>
    `;

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionContent);
    accordionContainer.appendChild(accordionItem);

    accordionHeader.addEventListener("click", function () {
      const isActive = accordionItem.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== accordionItem) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.display = "none";
          item.querySelector(".vector").innerHTML = `
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.697873 0.605135L4.21146 3.67895C4.28812 3.74637 4.3916 3.78418 4.49944 3.78418C4.60728 3.78418 4.71077 3.74637 4.78743 3.67895L8.30176 0.605802C8.3789 0.538422 8.48272 0.500667 8.59087 0.500667C8.69902 0.500667 8.80285 0.538422 8.87999 0.605802C8.91797 0.638718 8.94816 0.67806 8.96877 0.721508C8.98938 0.764957 9 0.811633 9 0.858787C9 0.90594 8.98938 0.952617 8.96877 0.996065C8.94816 1.03951 8.91797 1.07886 8.87999 1.11177L5.36715 4.18492C5.13577 4.38686 4.82446 4.5 4.50019 4.5C4.17592 4.5 3.86461 4.38686 3.63323 4.18492L0.1204 1.11177C0.0823009 1.07884 0.0520154 1.03946 0.0313353 0.995952C0.0106552 0.952442 2.45852e-09 0.905687 4.52318e-09 0.858453C6.58785e-09 0.811219 0.0106552 0.764465 0.0313353 0.720954C0.0520154 0.677444 0.0823009 0.638061 0.1204 0.605135C0.197538 0.537755 0.301362 0.5 0.409512 0.5C0.517662 0.5 0.621485 0.537755 0.698623 0.605135" fill="white"/>
            </svg>
          `;
        }
      });

      if (!isActive) {
        accordionItem.classList.add("active");
        accordionContent.style.display = "block";
        accordionItem.style.background =
          "radial-gradient(86.06% 112.86% at 86.86% 110.24%, rgba(223, 29, 255, 0.4) 0%, rgba(72, 205, 255, 0) 100%), radial-gradient(47.58% 75.96% at -5.37% -16.9%, rgba(61, 165, 245, 0.5) 0%, rgba(62, 238, 227, 0.1) 58.6%, rgba(62, 69, 238, 0) 94.1%), linear-gradient(97.94deg, rgba(41, 46, 75, 0.375) 0%, rgba(41, 46, 75, 0.175) 100%, rgba(48, 58, 120, 0.5) 100%)";
        accordionItem.style.backdropFilter = "blur(52.4px)";
        accordionItem.style.borderRadius = "25px";
        arrow.innerHTML = `
          <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.697873 0.605135L4.21146 3.67895C4.28812 3.74637 4.3916 3.78418 4.49944 3.78418C4.60728 3.78418 4.71077 3.74637 4.78743 3.67895L8.30176 0.605802C8.3789 0.538422 8.48272 0.500667 8.59087 0.500667C8.69902 0.500667 8.80285 0.538422 8.87999 0.605802C8.91797 0.638718 8.94816 0.67806 8.96877 0.721508C8.98938 0.764957 9 0.811633 9 0.858787C9 0.90594 8.98938 0.952617 8.96877 0.996065C8.94816 1.03951 8.91797 1.07886 8.87999 1.11177L5.36715 4.18492C5.13577 4.38686 4.82446 4.5 4.50019 4.5C4.17592 4.5 3.86461 4.38686 3.63323 4.18492L0.1204 1.11177C0.0823009 1.07884 0.0520154 1.03946 0.0313353 0.995952C0.0106552 0.952442 2.45852e-09 0.905687 4.52318e-09 0.858453C6.58785e-09 0.811219 0.0106552 0.764465 0.0313353 0.720954C0.0520154 0.677444 0.0823009 0.638061 0.1204 0.605135C0.197538 0.537755 0.301362 0.5 0.409512 0.5C0.517662 0.5 0.621485 0.537755 0.698623 0.605135" fill="white"/>
          </svg>
        `;
      } else {
        accordionItem.classList.remove("active");
        accordionContent.style.display = "none";
        accordionItem.style.background = "";
        accordionItem.style.backdropFilter = "";
        accordionItem.style.borderRadius = "";
        arrow.innerHTML = `
          <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.697873 0.605135L4.21146 3.67895C4.28812 3.74637 4.3916 3.78418 4.49944 3.78418C4.60728 3.78418 4.71077 3.74637 4.78743 3.67895L8.30176 0.605802C8.3789 0.538422 8.48272 0.500667 8.59087 0.500667C8.69902 0.500667 8.80285 0.538422 8.87999 0.605802C8.91797 0.638718 8.94816 0.67806 8.96877 0.721508C8.98938 0.764957 9 0.811633 9 0.858787C9 0.90594 8.98938 0.952617 8.96877 0.996065C8.94816 1.03951 8.91797 1.07886 8.87999 1.11177L5.36715 4.18492C5.13577 4.38686 4.82446 4.5 4.50019 4.5C4.17592 4.5 3.86461 4.38686 3.63323 4.18492L0.1204 1.11177C0.0823009 1.07884 0.0520154 1.03946 0.0313353 0.995952C0.0106552 0.952442 2.45852e-09 0.905687 4.52318e-09 0.858453C6.58785e-09 0.811219 0.0106552 0.764465 0.0313353 0.720954C0.0520154 0.677444 0.0823009 0.638061 0.1204 0.605135C0.197538 0.537755 0.301362 0.5 0.409512 0.5C0.517662 0.5 0.621485 0.537755 0.698623 0.605135" fill="white"/>
          </svg>
        `;
      }
    });
  });
});

const contentData = [
  {
      image: "./img/company.webp",
      subtitle: "About Us",
      title: "Company standart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus"
    },
  {
    image: "./img/goals.webp",
      subtitle: "About Us",
      title: "Company Goals",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".AboutUs");
  const image = section.querySelector(".card-image");
  const subtitle = section.querySelector(".subtitle");
  const title = section.querySelector(".title");
  const description = section.querySelector(".description");
  const buttons = section.querySelectorAll(".btn");

  buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
          image.src = contentData[index].image;
          subtitle.textContent = contentData[index].subtitle;
          title.textContent = contentData[index].title;
          description.textContent = contentData[index].description;
      });
  });
});