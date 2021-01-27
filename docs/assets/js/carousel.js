//kuville
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_pictures");
    var y = document.getElementsByClassName("slideshow_picture_numbers");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        y[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block"; 
    y[slideIndex-1].style.display = "block"; 

}
//teksteille
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_code");
    var y = document.getElementsByClassName("code_picture_numbers");

    if (n > x.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        y[i].style.display = "none";
    }
    x[slideIndex2-1].style.display = "block"; 
    y[slideIndex2-1].style.display = "block"; 

}



//SQL:lle
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
    showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_sql");
    var y = document.getElementsByClassName("sql_picture_numbers");

    if (n > x.length) {slideIndex3 = 1} 
    if (n < 1) {slideIndex3 = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        y[i].style.display = "none";
    }
    x[slideIndex3-1].style.display = "block"; 
    y[slideIndex3-1].style.display = "block"; 
}

//ARVOSTELUN LUOMISELLE
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
    showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_createReview");
    var y = document.getElementsByClassName("createReview_picture_numbers");

    if (n > x.length) {slideIndex4 = 1} 
    if (n < 1) {slideIndex4 = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        y[i].style.display = "none";
    }
    x[slideIndex4-1].style.display = "block"; 
    y[slideIndex4-1].style.display = "block"; 
}

//CONFIG TO PRODUKTIO
var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
    showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
    var i;
    var x = document.getElementsByClassName("slideshow_produktio");
    var y = document.getElementsByClassName("produktio_picture_numbers");

    if (n > x.length) {slideIndex5 = 1} 
    if (n < 1) {slideIndex5 = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        y[i].style.display = "none";
    }
    x[slideIndex5-1].style.display = "block"; 
    y[slideIndex5-1].style.display = "block"; 
}


//CONFIG TO SPEKIAL DIV
var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
    showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
    var i;
    var x = document.getElementsByClassName("karuselli");
    console.log(i, n, x)

    if (n > x.length) {slideIndex6 = 1} 
    if (n < 1) {slideIndex6 = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex6-1].style.display = "block"; 
}