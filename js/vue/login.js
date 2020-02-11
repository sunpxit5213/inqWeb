new Vue({
        el: "#app",
        data: {
        	user1:"",
        	pass1:"",
        	passt:""
        },
        methods: {
			
            test1: function () {
                console.log($.cookie("token"))
            },
            login: function () {
            	
            	
            		
   
            	var _this=this
                $.ajax({
                    url: "http://127.0.0.1:8567/login/main",
                    data: JSON.stringify({"userName": _this.user1, "password":_this.pass1}),
                    type: "post",
                    contentType: 'application/json',
                    dataType: "json",
                    xhrFields: {withCredentials: true},
                    crossDomain: true,
                    success: function (data) {
                        if (data.code == 0) {
                     	window.location.href="/moban3897/main.html";


                        }
                    }
                });
            },
            save: function () {
                var _this = this;
                

                if (_this.pass1 == _this.passt) {
                    $.ajax({
                        url: "http://127.0.0.1:8567/login/save",
                        data: JSON.stringify({
                            "userName": _this.user1,
                            "password": _this.pass1,
                        }),
                        type: "post",
                        contentType: 'application/json',
                        xhrFields: {withCredentials: true},
                        crossDomain: true,
                        dataType: "json",
                        success: function (data) {
                            if (data.code == 0) {
                                window.location.href = "/moban3897/main.html";
                            }
                        },
                        error: function () {
                            alert("服务器异常")
                        }
                    });
                } else {
                    alert("密码输入不一致")
                }


            }

			,
			del:function(){
				this.user1=""
				this.pass1=""
				this.passt=""
			}
        }
    })
