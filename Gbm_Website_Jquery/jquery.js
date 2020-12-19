$(document).ready(function () {
    $("body").css({ margin: "0", padding: "0" })
    // Gbm_Header
    $("#Gbm_master__div_header").css({ "width": "100%", height: "10%", "background-color": "#191970", position: "absolute" }).appendTo('body');

    //Gbm_nav
    $("#sidebar").css({ "width": "10%", height: "90%", top: "10%", position: "absolute" }).appendTo('body');

    $("#Gbm_master__div_container").css({width: "90%", height: "90%", top: "10%", left: "10%", position: "absolute" }).appendTo('body');

    $("#Gbm_top_menu__table").css({ "border-spacing": '12px', float: 'right', 'margin-right': '2%', top: '11%', position: 'relative' });

    // $("img").css("border-radius", "100%")

    $("td >*").css({ "text-decoration": "none", color: "white", 'font-size': '20px', 'font-family': 'sans-serif' })

    $(".Gbm_top_menu__table_link").hover(function () {

        $(this).css({ "background-color": "red", "color": "white" });
        $('.Gbm_top_menu__table_link').off('mouseenter mouseleave');
    });

    //The_Index.html
    $(".Gbm_AdminDahboard_link__spn").css({
        "text-decoration": "none",
        color: "black",
        "font-family": "sans-serif",
        "font-size": "28px"
    })
    $("#Gbm_AdminDahboard_div").css({
        width: "100%",
        height: "50%",
        position: "relative",
        top: "10%"
    });
    $("#Gbm_BoughtItem_img_div").css({
        width: "50%",
        height: "100%",
        float: "left"
    });

    $("img:first").css({
        width: "40%",
        height: "70%",
        "border-radius": "100%",
        float: "right",
        position: "relative",
        right: "5%",
        top: "10%"
    }).appendTo("Gbm_BoughtItem_imges__div");

    $("#Gbm_User_Sp__div").css({
        float: 'right',
        position: 'relative',
        left: '20%',
        top: '85%',
        'font-size': '32px'
    });

    $("#Gbm_Admin_div").css({
        width: "50%",
        height: "100%",
        float: "right"
    });

    $("#gbm_bookingItem_img2").css({
        "width": "40%",
        "height": "70%",
        "border-radius": "100%",
        "float": "left",
        "position": "relative",
        "left": "5%",
        "top": "10%"
    });

    $("#Gbm_sp2_admin__div").css({
        float: "left",
        position: "relative",
        right: "20%",
        top: "85%",
        "font-size": "32px"
    });

    //Login.html
    $('#Gbm_Login_div').css({
        width: "30%",
        height: "50%",
        top: "12%",
        'margin-left': '35%',
        position: 'relative',
        display: 'grid',
        'box-shadow': '0 0 3px',
        'font-family': 'sans-serif'

    }).appendTo("Gbm_master__div_container");
    
    $("#Gbm_Login_form__div").css({
        width: '100%',
        height: '100%',
        position: 'relative',
        top: '10%'
    });

    $('#Gbm_Login_Uname_section_div').css({
        width: '80%',
        position: 'relative',
        height: '60%',
        "margin-left": "8%",
        'font-size': "23px",
        color: '#8a8686'
    });

    $("#Gbm_Login_Password_section_div").css({
        "width": "80%",
        position: 'relative',
        height: '60%',
        bottom: '28%',
        'margin-left': '8%',
        'font-size': '23px',
        color: '#8a8686'
    });

    $("#Gbm_Login_checkbox_section_div").css({
        bottom: '55%',
        position: 'relative',
        'margin-left': '8%',
        color: '#8a8686',
        'font-size': '18px'
    });

    $('#Gbm_Login_Button_section_div').css({
        position: 'relative',
        width: '90%',
        height: '88%',
        bottom: '67%',
        left: '63%'
    });

    $("button").css({
        width: '30%',
        height: '100%',
        position: 'relative',
        'border-radius': '10px',
        border: 'none',
        cursor: 'pointer',
        'background-color': 'royalblue',
        color: 'white'
    }).appendTo("Gbm_Login_btn");

    $("#Gbm_Login_checkbox_ipt_div").css({
        cursor: 'pointer'
    });
    
    $('#Gbm_Log_In_link__btn').css({
        'text-decoration': 'none',
        color: 'white'
    });

     //contact-us.html
    $("#Gbm_contact_us_form__div").css({
       "background-color": "red",
        "width": "40%",
        "height": "80%",
        "position": "relative",
        "left": "5%",
        "top": "10%",
     }).appendTo("#Gbm_master__div_container"),

        $("#Gbm_contact_us_title__form").css({
           "text-align": "center",
           "width": "100%",
           "left": "0 %",
           "position": "relative",
           "text-shadow": "-4px 4px dimgray",
           "font-size": "71px",
        }).appendTo("#Gbm_contact_us_form__div"),

        $("#Gbm_lname__div").css({
           "width": "48%",
           "position": "relative",
           "float": "left",
           "margin-right": "2%",
        }).appendTo("#Gbm_master__div_container"),

        //contact_lname
        $("#Gbm_lbl_lname__div").css("position", "relative").appendTo("div #Gbm_lname__div");
        $("Gbm_txt_lname__div").css("position", "relative").appendTo("div #Gbm_lname__div"),

        //contact_fname


        $("#Gbm_fname__div").css({
           "width": "48%",
           "position": "relative",
           "float": "right",
           "margin-left": "2 %",
        }).appendTo("#Gbm_master__div_container"),

        //contact_fname
        $("#Gbm_fname_lbl__div").css("position", "relative").appendTo("div #Gbm_fname__div"),
        $("#Gbm_txt__fname").css("position", "relative").appendTo("div #Gbm_fname__div"),

     $("#Gbm_YourMessage__div").css({
        "width": "100 %",
        "height": "50 %",
        "position": "relative",
     });

        $('#Gbm_area__yourmessage').css({
           width: "100 %",
           height: "50 %",
        });

        $("#Gbm_Send__div").css({
           width: "100%",
           position: "relative",
           bottom: "15%"
        });

        $("#Gbm_div - but__Send").css({
           float: "left",
           width: "50 %",
           top: "20 %",
        });

        $("#Gbm_button__send__div").css({
           width: "50 %",
           height: "50 %",
           position: "relative",
           "font - size": "25px",
           "background-color": "#191970",
           color: "white",
           "cursor": "pointer",
        });

        $("#Gbm_Cancel__div").css({
           float: "left",
           width: "50 %",
           position: "relative",
           right: "17 %",

        });

        ("#Gbm_button__cancel__div").css({
           width: "50 %",
           height: "50 %",
           position: "relative",
           "font - size": "25px",
           "background-color": "#ff0000",
           color: "white",
           cursor: "pointer",
        });

});