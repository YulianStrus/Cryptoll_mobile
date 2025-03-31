const servicesData = [
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    title: "Our Services for You",
    subtitle: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

const wrapper = document.querySelector(".services-wrapper");

servicesData.forEach((service) => {
  const card = document.createElement("div");
  card.className = "service-card";
  card.innerHTML = `
        <h3>${service.title}</h3>
        <p class="subtitle">${service.subtitle}</p>
        <hr>
        <p>${service.text}</p>
    `;
  wrapper.appendChild(card);
});
