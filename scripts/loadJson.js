$(() => {
    $("#load-json").click(() => {
      // Clear form, message & warning before loading json
      clearForm();
    
      //Fetch data from JSON file.
      fetch(`${window.location.href}/sample.json`)
      .then((response) => response.json())
      .then((response) => {
          name= response.name;
          email=response.email;
          Charname=response.Charname

          //display on form
          $("#name").val(response.name);
          $("#email").val(response.email);
          $('#Charname').val(response.Charname);
          $('#role').val(response.role);
          $('world').val(response.world);
          $('birthday').val(response.birthday);    
        });
    });
  });
// });
