function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "isurutjayasuriya@gmail.com",
    Password: "0B257831FC4BAC94E45B60DA439275EEB7E3",
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
