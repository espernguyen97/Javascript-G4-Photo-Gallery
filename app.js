const modal = document.querySelector(".galleryModal");
const previews = document.querySelectorAll(".galleryPreview img");
const fullImg = document.querySelector(".modalFullImg");
const caption = document.querySelector(".imgCaption");
const title = document.querySelector(".imgTitle");

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    fullImg.classList.add("open");
    //Changing images and captions
    const originalSrc = preview.getAttribute("data-original");
    fullImg.src = `${originalSrc}`
    const altText = preview.alt;
    caption.textContent = altText;
    const imgTitle = preview.title;
    title.textContent = imgTitle;

  })
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains("galleryModal") || e.target.classList.contains("modalFullImg") || e.target.classList.contains("closeButton") ) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});

