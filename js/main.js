$(".button-enter").on("click", function () {
    $("#TitleScreen").hide();
    $("#SceneOne").show();
});

$(".button-fair").on("click", function () {
    $("#SceneOne").hide();
    $("#SceneOneEnd").show();
});

$(".button-real").on("click", function () {
    $("#SceneOne").hide();
    $("#SceneOneContinue").show();
});

$(".button-end").on("click", function () {
    $("#SceneOneEnd").hide();
    $("#SceneTwoAI").hide();
    $("#SceneTwoLocked").hide();
    $("#SceneThreeEnd").hide();
    $("#TitleScreen").show();
});

$(".button-Next-1").on("click", function () {
    $("#SceneOneContinue").hide();
    $("#SceneTwo").show();
});

$(".button-AI").on("click", function () {
    $("#SceneTwo").hide();
    $("#SceneTwoAI").show();
});

$(".button-lockedin").on("click", function () {
    $("#SceneTwo").hide();
    $("#SceneTwoLocked").show();
});

$(".button-cooked").on("click", function () {
    $("#SceneTwo").hide();
    $("#SceneTwoContinue").show();
});

$(".button-next-2").on("click", function () {
    $("#SceneTwoContinue").hide();
    $("#SceneThree").show();
});

$(".button-final").on("click", function () {
    $("#SceneThree").hide();
    $("#SceneThreeContinue").show();
});

$(".button-free").on("click", function () {
    $("#SceneThree").hide();
    $("#SceneThreeEnd").show();
});

$(".button-next-3").on("click", function () {
    $("#SceneThreeEnd").hide();
    $("#GameEnd").show();
});

$(".button-GameEnd").on("click", function () {
    $("#GameEnd").hide();
    $("#TitleScreen").show();
    $(document).unbind("keydown");
});