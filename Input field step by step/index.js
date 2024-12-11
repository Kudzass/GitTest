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

try {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Name: name }),
  });

  if (!response.ok) {
    throw new Error("Klaida siunčiant duomenis į API.");
  }

  const result = await response.json();
  responseDiv.textContent = `Vartotojas pridėtas: ID ${result.id}, vardas: ${result.Name}`;
} catch (error) {
  responseDiv.textContent = `Klaida: ${error.message}`;
}
