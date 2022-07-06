function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "isurutjayasuriya@gmail.com",
    Password: "68B8BA9116B9D44FF3444C4A4E7FE31EFF36",
    To: "isuru.jayasuriya@inivossl.com",
    From: document.getElementById("email").value,
    Subject: "New Customer Inquiry",
    Body:
      "Name : " +
      document.getElementById("name").value +
      "<br> Email : " +
      document.getElementById("email").value +
      "<br> Message : " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}
