

$("document").ready(function () {

    console.log(">>>>>>>>")

    let token = sessionStorage.getItem("_gtoken");

    if (token !== null) {

        $.get("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=" + token, function (res) {

            try {

                $.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + token, function (data) {

                    console.log("dataaaa ", data);

                    sessionStorage.setItem("userId", data.id);
                    sessionStorage.setItem("username", data.given_name);
                    sessionStorage.setItem("pic", data.picture);
                    sessionStorage.setItem("gender", data.gender);
                    
                    $("#username").html(data.given_name)
					
                    if(data.gender== 'male'){
					
                        $('#maleBlock').show();
                    }else{
                        $('#femaleBlock').show();
                    }

                    
                    $("#content").show();
                    $("#loading").hide();
                 
                   
                })



            } catch (error) {
                let BASE_PATH = "http://" + (window.location.href).split("/")[2];
                window.open(BASE_PATH + "/", "_self");

            }

        }).fail(function (ex) {
            let BASE_PATH = "http://" + (window.location.href).split("/")[2];
            window.open(BASE_PATH + "/", "_self");
        });

    }

})


