function validate(date, format) {
  return dayjs(date, format).format(format) === date;
}



function get_dates_between() {
  var start_date = new Date($('[name="start"]').val());
  var end_date = new Date($('[name="finish"]').val());
  if (start_date>=end_date) {
    alert("Starting date must be smaller than the end date.");
    
  }
  var getDaysArray = function(s,e) {for(var a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};
  return getDaysArray(start_date, end_date)
}

function generate_dates_string(dates) {
  var date_string = "";
  $.each(dates, function(i, val) {
    date_string = date_string + dayjs(val).format(get_date_format()) + $('[name=separator]').val();
  })
  return date_string;
}

function get_date_format() {
  return $('#date_format_select').val();
}

function are_both_valid() {
  return ($('[name="start"]').hasClass('valid') && $('[name="finish"]').hasClass('valid'))
}


function input_changed() {
  var date_format = get_date_format();
  var is_valid = validate($(this).val(), date_format)

  if (is_valid) {
    $(this).addClass('valid');
  } else {
    $(this).removeClass('valid');
  }
  if (are_both_valid()) {
    var dates = get_dates_between();
    $('[name="result"]').val(generate_dates_string(dates));

  }
}



$(document).ready(function() {
  var start_input = $('[name="start"]');
  var end_input = $('[name="finish"]');
  start_input.on('change paste keyup', input_changed);
  end_input.on('change paste keyup', input_changed);
});
