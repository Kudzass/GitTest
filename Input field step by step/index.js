const apiUrl = "https://testapi.io/api/Kudzass/resource/UsersList";

document
  .getElementById("inputForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const responseDiv = document.getElementById("response");

    if (!name) {
      responseDiv.textContent = "Prašome įvesti vardą.";
      return;
    }
  });
