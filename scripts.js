const flatNumbers = {
  3: ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311'],
  4: ['401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411'],
  5: ['501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511'],
  6: ['601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611'],
  7: ['701', '702', '703', '704', '705', '706', '707', '708', '709', '710', '711'],
  8: ['801', '802', '803', '804', '805', '806', '807', '808', '809', '810', '811'],
  9: ['901', '902', '903', '904', '905', '906', '907', '908', '909', '910', '911'],
  10: ['1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010', '1011'],
  11: ['1101', '1102', '1103', '1104', '1105', '1106', '1107', '1108', '1109', '1110', '1111'],
  12: ['1201', '1202', '1203', '1204', '1205', '1206', '1207', '1208', '1209', '1210', '1211'],
  13: ['1301', '1302', '1303', '1304', '1305', '1306', '1307', '1308', '1309', '1310', '1311'],
  14: ['1401', '1402', '1403', '1404', '1405', '1406', '1407', '1408', '1409', '1410', '1411'],
  15: ['1501', '1502', '1503', '1504', '1505', '1506', '1507', '1508', '1509', '1510', '1511'],
  16: ['1601', '1602', '1603', '1604', '1605', '1606', '1607', '1608', '1609', '1610', '1611'],
  17: ['1701', '1702', '1703', '1704', '1705', '1706', '1707', '1708', '1709', '1710', '1711','1712'],
  18: ['1801', '1802', '1803', '1804', '1805', '1806', '1807', '1808', '1809', '1810']
};
// Show the floors menu
function showFloors() {
  document.getElementById('main-features').style.display = 'none';
  document.getElementById('floor-selector').style.display = 'block';
}

// Function to handle floor selection
function openFloor(floorNumber) {
  document.getElementById('floor-selector').style.display = 'none';
  document.getElementById('flat-selector').style.display = 'block';

  // Update the floor number in the title
  document.getElementById('floor-number').textContent = floorNumber;

  // Generate apartment buttons dynamically
  const flatButtonsContainer = document.getElementById('flat-buttons');
  flatButtonsContainer.innerHTML = ''; // Clear existing buttons

  flatNumbers[floorNumber].forEach(flat => {
    const button = document.createElement('button');
    button.textContent = `${flat}`;
    button.onclick = () => openFlat(floorNumber, flat);
    flatButtonsContainer.appendChild(button);
  });
}

// Function to go back to the main features
function goBack() {
  document.getElementById('main-features').style.display = 'block';
  document.getElementById('floor-selector').style.display = 'none';
}

// Function to go back to floors from flats
function goBackToFloors() {
  document.getElementById('floor-selector').style.display = 'block';
  document.getElementById('flat-selector').style.display = 'none';
}

// Function to handle flat selection and open the corresponding PDF
function openFlat(floorNumber, flatNumber) {
  // Generate the PDF file name in the format: (301_Azure Residence.pdf)
  const pdfFileName = `pdfs/${flatNumber}_Azure Residence.pdf`;
  window.open(pdfFileName, '_blank');
}

// Function to open Reception PDF
function showReception() {
  const pdfFileName = 'pdfs/reception.pdf';
  window.open(pdfFileName, '_blank');
}

// Function to open Facilities PDF
function showFacilities() {
  const pdfFileName = 'pdfs/facilities.pdf';
  window.open(pdfFileName, '_blank');
}