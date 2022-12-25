import { all_images } from "./images/images.js";

console.log(all_images);

const slider_scroll = document.getElementById("slider_container_id");
const left_button = document.getElementById("left_button_id");
const right_button = document.getElementById("right_button_id");

//Left Button
left_button.addEventListener("click", (e) => {
  slider_scroll.scrollLeft -= 1200;
  console.log(slider_scroll.scrollLeft);
});

// Right Button
right_button.addEventListener("click", (e) => {
  slider_scroll.scrollLeft += 1200;
});

const adding_products = () => {
  // Creating Items;

  all_images.map((values) => {
    // Creating Elements
    const item_container = document.createElement("div");
    const item_image_container = document.createElement("div");
    const item_text_container = document.createElement("div");
    const image = document.createElement("img");
    const heading5 = document.createElement("h5");
    const paragraph = document.createElement("p");

    // Adding classes for styling
    item_container.className = "item_container";
    item_image_container.className = "item_image_container";
    item_text_container.className = "item_text_container";

    // appending childs
    item_container.appendChild(item_image_container);
    item_image_container.appendChild(image);
    item_container.appendChild(item_text_container);
    item_text_container.appendChild(heading5);
    item_text_container.appendChild(paragraph);

    // Adding images source & heading and paragraph
    heading5.innerHTML = "Up too 77% off";
    paragraph.innerHTML = "Deal of the Day";
    image.src = `${values}`;

    // Appening the main Itemcontainer to the slider
    slider_scroll.appendChild(item_container);
  });
};

adding_products();
