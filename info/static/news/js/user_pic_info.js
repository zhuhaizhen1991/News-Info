$(function () {

    $(".pic_info").submit(function (e) {
        e.preventDefault()

        // 上传头像
        $(this).ajaxSubmit({
            url: "/user/pic_info",
            type: "POST",
            success: function (resp) {
                if (resp.errno == "0") {
                    $(".now_user_pic").attr("src", resp.data.avatar_url)
                    $(".user_center_pic>img", parent.document).attr("src", resp.data.avatar_url)
                    $(".user_login>img", parent.document).attr("src", resp.data.avatar_url)
                } else {
                    alert(resp.errmsg)
                }
            }
        })
    })
})