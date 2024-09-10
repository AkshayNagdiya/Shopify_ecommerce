document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    return console.log("Akshay Clicked");
    const formData = new FormData(form);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch("${location.origin}/apps/proxy?shop={Shopify.shop}", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Server response:", data))
      .catch((error) => console.error("Error:", error));
  });
});
