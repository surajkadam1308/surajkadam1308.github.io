// EmailJS contact form handler
// Make sure to include the EmailJS SDK in your HTML and initialize with your user ID
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// <script>emailjs.init('hhS2K2X2G7XUMtcIZ');</script>

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact_form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Replace these with your EmailJS service/template IDs
    const serviceID = "service_6022an7";
    const templateID = "template_rys0ybs";

    emailjs.sendForm(serviceID, templateID, form).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      }
    );
  });
});