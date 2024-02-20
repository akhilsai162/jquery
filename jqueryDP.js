$(document).ready(function () {
  //   $("#date").datepicker();

  //  To display previous month dates in the current month calendar.
  $("#date").datepicker({
    showOtherMonths: true, //This statement is used to display dates of previous month.
    selectOtherMonths: true, //This statement allows us to select dates of previous month.
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    // minDate: new Date(1996, 1, 5),
    // maxDate: new Date(2024, 1, 6),
    // numberOfMonths: 2, //this is used to how may months should display at a time.
  });
});
