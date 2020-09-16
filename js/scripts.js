var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

var yxy = 12;
var redo = function(val) {
  yxy = val;
  document.querySelector('table').innerHTML = '<tr id="top-row"></tr>';
  document.querySelector('#top-row').innerHTML = '';
  appendToTopRow('<th>&times;</th>');
  for (var y = 1; y <= yxy; y++) {
    var arr = [('<th class="downth">' + y + '</th>')];
    appendToTopRow('<th>' + y + '</th>');
    for (var x = 1; x <= yxy; x++) {
      arr.push('<td>' + (x * y) + '</td>');
    }
    appendRow(arr);
  }
};
window.onload = function() {
  document.querySelector('#yxy').value = yxy;
  redo(yxy);
}
function appendToTopRow(str) {
  document.querySelector('#top-row').innerHTML += '    ' + str + "\n";
}
function appendRow(tds) {
  var content = '';
  for (var y = 0; y < tds.length; y++) {
    content += tds[y] + "\n";
  }
  document.querySelector('#table').innerHTML += content;
}
