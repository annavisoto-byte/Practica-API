fetch("https://script.google.com/macros/s/AKfycbzm9KDY5rlfLnFhWsFjv9EaRzLbXegOb7nlARINl2WqRNVUSV5v2jgC3bGEdR4QlMoH/exec")
  .then(response => response.text()) 
  .then(data => {
    console.log("Respuesta:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });