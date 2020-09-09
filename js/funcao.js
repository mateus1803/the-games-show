
/*header*/

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  }

  else {
    $('nav').removeClass('black');
  }
})




function risco() {
  $('footer').
    addClass("risco")
}

function bot() {
  $('button').
    addClass("bot")
}

//reference https://codepen.io/nicolas-justin/pen/jXQjQr?editors=1000




$('#btnSubmit').click(
  function () {
    let contato = {
      "Nome Completo": $("#tName").val(),
      "Email": $("#tEmail").val(),
      "Telefone": $("#tPhone").val(),
      "Mensagem": $("#tMessage").val(),
    }
    let html = JSON.stringify(contato);
    console.log(contato)
    alert('Obrigado! Sua mensagem foi enviada')
    return false;
  })


$('#tPhone').blur(
  function () {
    let phone = $('#tPhone').val();
    let phoneNovo = ''
    for (let x = 0; x <= phone.length; x++) {
      phoneNovo += phone.charAt(x);
      if (x == 3) {
        phoneNovo += '-'
      }
      // else if (x == 8) {
      //   phoneNovo += '-'
      // }
      $('#tPhone').val(phoneNovo)
    }
  });



//singin


// $("#signup").click(function () {
//   $("#first").fadeOut("fast", function () {
//     $("#second").fadeIn("fast");
//   });
// });

// $("#signin").click(function () {
//   $("#second").fadeOut("fast", function () {
//     $("#first").fadeIn("fast");
//   });
// });





$(function () {

  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },

    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },

    submitHandler: function (form) {
      form.submit();
    }
  });
});

/*contato*/
function Enviar() {

  var nome = document.getElementById("nomeid");

  if (nome.value != "") {
    alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
  }

}

