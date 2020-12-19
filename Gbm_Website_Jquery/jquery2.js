$(document).ready(function () {
    $("body").css({ margin: "0", padding: "0" })
    // Gbm_Header
    $("#Gbm_master__div_header").css({ "width": "100%", height: "10%", "background-color": "#191970", position: "absolute" }).appendTo('body');

    //Gbm_nav
    $("#sidebar").css({ "width": "10%", height: "90%", top: "10%", position: "absolute" }).appendTo('body');

    $("#Gbm_master__div_container").css({ width: "90%", height: "90%", top: "10%", left: "10%", position: "absolute" }).appendTo('body');

    $("#Gbm_top_menu__table").css({ "border-spacing": '12px', float: 'right', 'margin-right': '2%', top: '11%', position: 'relative' }).appendTo("#Gbm_master__div_header");

    // $("img").css("border-radius", "100%")

    $("td >*").css({ "text-decoration": "none", color: "white", 'font-size': '20px', 'font-family': 'sans-serif' });

    $(".Gbm_top_menu__table_link").hover(function () {

        $(this).css({ "background-color": "red", "color": "white" });
        $('.Gbm_top_menu__table_link').off('mouseenter mouseleave');
    });

    //Description
    $("#Gbm_Description_image_btn__div").css({
        "width": "50%",
        "height": "90%",
        "position": "relative",
        "float": "left",
        "top": "10%",
    });

    $("#Gbm_Description_imge__div").css({
        "width": "70%",
        "height": "50%",
        "position": "relative",
        "left": "25%"
    });

    $("#Gbm_button_description__div").css({
        "width": "70%",
        "height": "10%",
        "position": "relative",
        "left": "25%"
    });

    $("#Gbm_Description__div").css({
        "width": "50%",
        "height": "90%",
        "position": "relative",
        "float": "right",
        "top": "10%"
    });

    $("#gbm_span__description").css({
        "width": "50%",
        "height": "50%",
        "position": "relative"
    });

    $("#Gbm_Description_spn__div").css({
        "width": "70%",
        "height": "60%",
        "position": "relative",
        "font-size": "25px"
    });

    //Gbm_About_Us
    $("#Gbm_img__div").css({
        "width": "50%",
        "height": "50%",
        "position": "relative",
        "left": "7%",
        "top": "10%",
    });

    $("#Gbm_images_about_us__div").css({
        "width": "60%",
        "height": "100%",
    });

    $("#Gbm_description__div").css({
        "height": "100%",
        "width": "100%",
        "position": "relative",
        "bottom": "104%",
        "left": "68%",
        "font-size": "23px"
    });

    //admin
    $(".Gbm_Appointment_link").css({
        "text-decoration": "none",
        "color": "black"
    });

    $("#Gbm_AdminDashboard_check__div").css({
        "width": "100%",
        "height": "50%",
        "position": "relative"
    });

    $("#Gbm_BoughtItem_Img__div").css({
        "width": "50%",
        "height": "100%",
        "float": "left"
    });

    $("#Gbm_Bought_Img__div").css({
        "width": "50%",
        "height": "70%",
        "border-radius": "100%",
        "float": "right",
        "position": "relative",
        "right": "5%",
        "top": "10%"
    });

    $("#Gbm_Bought_Sp__div").css({
        "float": "right",
        "position": "relative",
        "left": "35%",
        "top": "85%",
        "font-size": "32px"
    });

    $("#Gbm_BookingItem__div").css({
        "width": "50%",
        "height": "100%",
        "float": "right"
    });

    $("#Gbm_Booking_Img__div").css({
        "width": "50%",
        "height": "70%",
        "border-radius": "100%",
        "float": "left",
        "position": "relative",
        "left": "5%",
        "top": "10%"
    });

    $("#Gbm_Booking_Sp__div").css({
        "float": "left",
        "position": "relative",
        "right": "35%",
        "top": "85%",
        "font-size": "32px"
    });

    $("#Gbm_Appointment_check__div").css({
        "height": "50%",
        "width": "100%"
    });

    $("#Gbm_Appointment_Img__div").css({
        "width": "25%",
        "height": "70%",
        "border-radius": "100%",
        "top": "10%",
        "position": "relative",
        "display": "flex",
        "margin": "0px auto"
    });

    $("#Gbm_Appointment_Sp__div").css({
        "display": "flex",
        "margin": "0px 43%",
        "font-size": "32px",
        "position": "relative",
        "top": "14%",
        "width": "10px"
    });

    //Appointment
    $("#Gbm_Appointment_Tbl__div").css({
        "border-collapse": "collapse",
        "height": "360px",
        "width": "1000px",
        "text-align": "center",
        "position": "relative",
    }).appendTo("#Gbm_Appointment_div");

    $("#Gbm_Appointment_div").css({
        "position": "relative",
        "left": "10%",
        "top": "10%",
        "width": "90%",
        "height": "80%"
    }).appendTo("#Gbm_master__div_container");


    $("#Gbm_Appointment_Tr__table").css({
        "background-color": "#4682B4",
        "color": "white"
    });

    /* Booking */
    $("#Gbm_Booking_table_div").css({
        "position": "relative",
        "left": "10%",
        "top": "10%",
        "width": "90%",
        "height": "80%"
    }).appendTo("#Gbm_master__div_container");

    $("#Gbm_Booking_tbl__div").css({
        "border-collapse": "collapse",
        "height": "360px",
        "width": "1000px",
        "text-align": "center"

    }).appendTo("#Gbm_Booking_table_div");

    $("#Gbm_Booking_tr__div").css({
        "background-color": "#4682B4",
        "color": "white"
    });

    //Bought_item
    $("#Gbm_bought_product__div").css({
        "left": "20%",
        "top": "10%",
        "width": "80%",
        "position": "absolute"
    }).appendTo("#Gbm_master__div_container");

    $("#Gbm_bought_Product__div_table").css({
        "border-collapse": "collapse",
        "height": "360px",
        "text-align": "center",
        "border-style": "solid",
        "border-spacing": "22px"
    }).appendTo("#Gbm_bought_product__div");

    $("#Gbm_bought_product__div_a_i").css({
        "font-size": "24px",
        "margin-top": "2%"
    }).appendTo("#Gbm_bought_product__div");

    $("#Gbm_booking_product__div_a_i").css({
        "font-size": "24px",
        "margin-top": "2%"
    }).appendTo("#Gbm_Booking_table_div");

    $("#Gbm_Appointment_product__div_a_i").css({
        "font-size": "24px",
        "margin-top": "2%"
    }).appendTo("#Gbm_Appointment_div");


    $("#Gbm_Bought_title__div").css("text-align", "center");

    /*most_bought_product_grid*/
    $("#gbm_div__product_grid").css({
        "position": "relative",
        "width": "90%",
        "height": "80%",
        "left": "5%",
        "top": "10%"
    }).appendTo("#Gbm_master__div_container");

    $(".gbm_product__grid").css({
        "width": "23%",
        "height": "40%",
        "float": "left",
        "position": "relative",

    });

    $("#gbm_grid1").css({
        "position": "relative",
        "margin-left": "0%"
    });


    $("#gbm_grid2").css({
        "position": "relative",
        "margin-left": "2.5%"
    });


    $(".Gbm_product_grid__img1").css({
        "width": "100%",
        "height": "65%",
        "position": "relative",

    });

    $(".Gbm_product_grid__text").css({
        "width": "100%",
        "position": "relative",
        "height": "30%"
    });

    $(".gbm_product__grid1").css({
        "width": "23%",
        "height": "40%",
        "float": "right"
    });

    $("#gbm_grid3").css(
        "margin-right", "0%");

    $("#gbm_grid4").css("margin-right", "2.5%");

    $(".gbm_product__grid2").css({
        "width": "23%",
        "height": "40%",
        "float": "left",
        "top": "10%",
        "position": "relative"
    });

    $("#gbm_grid5").css("margin-left", "0%");

    $("#gbm_grid6").css("margin-left", "2.5%");

    $(".gbm_product__grid3").css({
        "width": "23%",
        "height": "40%",
        "float": "right",
        "top": "10%",
        "position": "relative",
    });

    $("#gbm_grid7").css(
        "margin-right", "0%");

    $("#gbm_grid8").css("margin-right", "2.5%");

    $("#gbm_title__page_grid").css({
        "height": "5%",
        "width": "100%",
        "position": "relative"
    });

    $("#Gbm_product_grid__title").css({
        "text-align": "center",
        "font-size": "36px"
    });

    /* contact-us */
    $("#Gbm_contact_us_form__div").css({
        "width": "40%",
        "height": "80%",
        "position": "relative",
        "left": "5%",
        "top": "10%"
    }).appendTo("Gbm_contact_us_form__div");

    $("#Gbm_contact_us_title__form").css({
        "text-align": "center",
        "width": "100%",
        "left": "0%",
        "position": "relative",
        "text-shadow": "-4px 4px dimgray",
        "font-size": "71px"
    });

    $("#Gbm_lname__div").css({
        "width": "48%",
        "position": "relative",
        "float": "left",
        "margin-right": "2%",
    });

    $("#Gbm_fname__div").css({
        "width": "48%",
        "position": "relative",
        "float": "right",
        "margin-left": "2%"
    });

    $("#Gbm_YourMessage__div").css({
        "width": "100%",
        "height": "50%",
        "position": "relative"
    });

    $("#Gbm_area__yourmessage").css({
        "width": "100%",
        "height": "50%",
    });

    $("#Gbm_Send__div").css({
        "width": "100%",
        "position": "relative",
        "bottom": "15%",
    });

    $("#Gbm_div-but__Send").css({
        "float": "left",
        "width": "50%",
        "top": "20%"
    });

    $("#Gbm_button__send__div").css({
        "width": "50%",
        "height": "50%",
        "position": "relative",
        "font-size": "25px",
        "background-color": "#191970",
        "color": "white",
        "cursor": "pointer"
    });

    $("#Gbm_Cancel__div").css({
        "float": "left",
        "width": "50%",
        "position": "relative",
        "right": "17%"
    });

    $("#Gbm_button__cancel__div").css({
        "width": "50%",
        "height": "50%",
        "position": "relative",
        "font-size": "25px",
        "background-color": "#ff0000",
        "color": "white",
        "cursor": "pointer"
    });

    /* Payment_Gateaway */
    /* ------------ */
    $("#Gbm_Payment_form__package").css({
        "width":"60%",
        "float": "left"
    });

    $("#Gbm_YourOrder_div").css({
        "position": "relative",
        "width": "40%",
        "float": "right"
    });

$("#Gbm_YourOrder_tbl__div").css({
    "border-collapse": "collapse",
    "width": "298px",
    "height":"100px",
    "text-align": "center"
});

$("#Gbm_YourOrder_tr__tbl").css({
    "background-color": "#dddddd",
    "color": "white"
});

$("#Gbm_YourOrder_information_div").css(
    "border-radius","100%");

$("#Gbm_YourOrder_information_div2").css({
    "background-color": "#dddddd",
    "padding": "8px",
    "width": "283px"
});

$("Gbm_YourOrder_Submit_div").css({
    "position": "relative",
    "top": "102%"
});

$("#Gbm_yourOrder_button").css({
    "width": "298px",
    "height":"36px",
    "background-color": "#666666",
    "color": "white",
    "cursor": "pointer"
});

/* -------------- */
$("#Gbm_Payment_form__div").css({
    "width": "50%",
    "height":"80%",
    "position": "relative",
    "left": "10%",
    "top": "10%"
});

$("#Gbm_Payment_title__form").css({
    "text-align":"center",
    "width": "100%",
    "left": "10%"
});

$("#Gbm_Payment_lname_div").css({
    "width": "45%",
    "position": "relative",
    "float": "left",
    "margin-right": "5%"
});

$("#Gbm_Payment_fname_div").css({
    "width": "45%",
    "position": "relative",
    "float": "right",
    "margin-left": "5%",
});

$("#Gbm_txt_address__div").css({
    "width": "100%",
    "height":"100%"
});

$("#Gbm_Payment_Country__div").css({
    "width": "45%",
    "position": "relative",
    "float": "left",
    "margin-right": "5%"
});

$("#Gbm_Payment_zip__div").css({
    "width": "45%",
    "position": "relative",
    "float": "right",
    "margin-left": "5%",
});

$("#Gbm_Payment_Email__div").css({
    "width": "45%",
    "position": "relative",
    "float": "left",
    "margin-right": "5%"
});

$("#Gbm_Payment_Phone__div").css({
    "width": "45%",
    "position": "relative",
    "float": "right",
    "margin-left": "5%",
});

$(".Gbm_payment_input__div").css("width","100%");
});