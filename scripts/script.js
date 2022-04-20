$(document).ready(function () {
  // alert("page is ready");
  console.log("doc is ready");})

  $("#clear").click(() => {
    form.reset();
  });

  $("input[type=radio][name=callout]").change(function () {
    //if they say no, display the textbox

    //get value of the thing
    let callout = $("input[name=callout]:checked").val();

    //act accordingly
    if (callout === "No") {
      $("#divExplain").show();
    } else {
      $("#divExplain").hide();
    }
  });
