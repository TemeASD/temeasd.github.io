const url = window.location.href
const splitUrl = url.split("/")
let language;


function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://e8i7bq5hbb.execute-api.eu-west-1.amazonaws.com/websk2_testi/";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert("Nimi ei voi olla lyhyempi kuin kaksi merkkiä");
        return;
    }
    if ($("#email-input").val() == "") {
        alert("Anna sähköpostisi");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email-input").val())) {
        alert("Anna validi sähköpostiosoite");
        return;
    }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        name: name,
        email: email,
        desc: desc
    };

    $.ajax({
        type: "POST",
        url: `${URL}/contactform`,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            if (splitUrl.includes("eng")) { 
                alert("Sent succesfully");
            } 
            else { 
                alert('Lähetys onnistui!') 
            }
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            if (splitUrl.includes("eng")) { 
                alert("Something went wrong");
            } 
            else { 
                alert('Lähetys epäonnistui') 
            }
        }
    });
}