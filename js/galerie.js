// *********************** Section Enlarge Image


function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  let plan = [
    'Lac Chibougamau',
    'Lac Bourbeau',
    'Lac Chibougamau',
    'Lac Chibougamau',
    'Lac Cavan',
    '',
    'Lac Bourbeau',
    'Lac Bourbeau',
    'Lac Opémiska',
    '',
    'Lac Chibougamau',
    '',
    '',
    'Lac Chibougamau',
    '',
    '',
    '',
    '',
    '',
    '',
    'Lac Ross',
    'Lac Oreille',
    '',
    'Lac Ross',
    '',
    'Lac Chibougamau',
    '',
    '',
    'Lac Chibougamau',
    'Lac Gilman',
    'Lac Merrill',
    '',
    '',
	'Lac Gilman',
	'Lac Bourbeau',
	'Lac Gilman',
  'Lac Ross',
  'Lac Gilman'
  ];
  let accroche = [
    'Zénitude de la Baie McKenzie',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
	'',
	'',
	''
  ];
  document.getElementById("plan").innerHTML = plan[element.alt - 1];
  document.getElementById("accroche").innerHTML = accroche[element.alt - 1];
}

