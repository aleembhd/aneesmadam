const students = [
  { rollNumber: "23WJ1A0401", name: "ADAPA CHANDRAHAS", parentPhone: "9912035449", parentName: "", studentPhone: "9542084547" },
  { rollNumber: "23WJ1A0402", name: "AIELA NITHIN", parentPhone: "9392478441", parentName: "", studentPhone: "9989652316" },
  { rollNumber: "23WJ1A0404", name: "AKULA MANASA", parentPhone: "9581931064", parentName: "", studentPhone: "7989854805" },
  { rollNumber: "23WJ1A0405", name: "ALETI RISHITHA", parentPhone: "8008404960", parentName: "", studentPhone: "8008404961" },
  { rollNumber: "23WJ1A0406", name: "ALLI RAMCHARAN", parentPhone: "9676955515", parentName: "", studentPhone: "7816029799" },
  { rollNumber: "23WJ1A0407", name: "ALWALA NAVYA", parentPhone: "9885193055", parentName: "", studentPhone: "8688662990" },
  { rollNumber: "23WJ1A0408", name: "AMARAVAJI SHIVAMANI", parentPhone: "9441463797", parentName: "", studentPhone: "7337267237" },
  { rollNumber: "23WJ1A0409", name: "AMGOTH NAVEEN", parentPhone: "9849229202", parentName: "", studentPhone: "7815842703" },
  { rollNumber: "23WJ1A0410", name: "AMGOTH SANGEETHA", parentPhone: "8317598738", parentName: "", studentPhone: "9014644784" },
  { rollNumber: "23WJ1A0411", name: "ANDAKER SNIGDHA BHARGAVI", parentPhone: "7396599051", parentName: "", studentPhone: "9959272922" },
  { rollNumber: "23WJ1A0412", name: "AREPALLY DILEEP", parentPhone: "9948609114", parentName: "", studentPhone: "8106488420" },
  { rollNumber: "23WJ1A0413", name: "ARLA SRUTHI", parentPhone: "9553243206", parentName: "", studentPhone: "9392822257" },
  { rollNumber: "23WJ1A0414", name: "ARUKALA RANJITH", parentPhone: "9948092277", parentName: "", studentPhone: "8688309559" },
  { rollNumber: "23WJ1A0415", name: "ARUMULLA SAI KUMAR", parentPhone: "9490355347", parentName: "", studentPhone: "9989787347" },
  { rollNumber: "23WJ1A0416", name: "AVUDODDI RAMESH", parentPhone: "9963711264", parentName: "", studentPhone: "9603622914" },
  { rollNumber: "23WJ1A0417", name: "BADAVATH ANJI", parentPhone: "8367284539", parentName: "", studentPhone: "8978853159" },
  { rollNumber: "23WJ1A0418", name: "BAIKANI NIKHITHA", parentPhone: "9951384650", parentName: "", studentPhone: "8309737254" },
  { rollNumber: "23WJ1A0419", name: "BAIRI SOWMYA", parentPhone: "9441991371", parentName: "", studentPhone: "7989317799" },
  { rollNumber: "23WJ1A0420", name: "BANAVATH ARAVIND", parentPhone: "9000115688", parentName: "", studentPhone: "6309844788" },
  { rollNumber: "23WJ1A0421", name: "BANDARAI DEVENDAR", parentPhone: "9989522168", parentName: "", studentPhone: "7569507336" },
  { rollNumber: "23WJ1A0422", name: "BANDAYYA RAMYA", parentPhone: "8099387130", parentName: "", studentPhone: "9133052578" },
  { rollNumber: "23WJ1A0423", name: "BANDI BHARGAV RAM", parentPhone: "9494259727", parentName: "", studentPhone: "6281532173" },
  { rollNumber: "23WJ1A0424", name: "BANOTH SHYAM", parentPhone: "9849517483", parentName: "", studentPhone: "9502841476" },
  { rollNumber: "23WJ1A0425", name: "BANOTH SOWMYA", parentPhone: "8919727403", parentName: "", studentPhone: "6302560294" },
  { rollNumber: "23WJ1A0427", name: "BASAMPELLI ADHARSH", parentPhone: "9951468855", parentName: "", studentPhone: "7207003968" },
  { rollNumber: "23WJ1A0428", name: "BATTU ROHINI", parentPhone: "9949642713", parentName: "", studentPhone: "9100181632" },
  { rollNumber: "23WJ1A0429", name: "BAZARU SAI RISHIK", parentPhone: "9000441201", parentName: "", studentPhone: "8520850689" },
  { rollNumber: "23WJ1A0430", name: "BEGARI NARSIMULU", parentPhone: "9100860264", parentName: "", studentPhone: "8897104235" },
  { rollNumber: "23WJ1A0431", name: "BELIDE LAHARI", parentPhone: "9652662929", parentName: "", studentPhone: "8074061907" },
  { rollNumber: "23WJ1A0432", name: "BHONGIR THANUJA", parentPhone: "9603809885", parentName: "", studentPhone: "9398685622" },
  { rollNumber: "23WJ1A0433", name: "BHUKYA BLESSAN", parentPhone: "9949591237", parentName: "", studentPhone: "8978169213" },
  { rollNumber: "23WJ1A0434", name: "BHUKYA UDAYKUMAR", parentPhone: "9963667548", parentName: "", studentPhone: "6305653620" },
  { rollNumber: "23WJ1A0435", name: "BHUKYA VARUN KUMAR", parentPhone: "9705083480", parentName: "", studentPhone: "9573575820" },
  { rollNumber: "23WJ1A0436", name: "BOLLI RISHIKANTH", parentPhone: "6281146557", parentName: "", studentPhone: "7989390016" },
  { rollNumber: "23WJ1A0437", name: "BOMMERA JAHNAVI", parentPhone: "9666570175", parentName: "", studentPhone: "8519995499" },
  { rollNumber: "23WJ1A0438", name: "BUDIDHA REVANTH", parentPhone: "9948381624", parentName: "", studentPhone: "7730989198" },
  { rollNumber: "23WJ1A0439", name: "BUDIDHA SRISHANTH", parentPhone: "8008787605", parentName: "", studentPhone: "7893371950" },
  { rollNumber: "23WJ1A0440", name: "BUDIGE SHASHI VARDHAN", parentPhone: "7013645684", parentName: "", studentPhone: "9014047289" },
  { rollNumber: "23WJ1A0441", name: "CHAKALI CHANDU", parentPhone: "9848389600", parentName: "", studentPhone: "7569925129" },
  { rollNumber: "23WJ1A0442", name: "CHALLAPALLI VIVEK", parentPhone: "9989821022", parentName: "", studentPhone: "7893158647" },
  { rollNumber: "23WJ1A0443", name: "CHEGONI AKHILA", parentPhone: "9963161999", parentName: "", studentPhone: "8977267765" },
  { rollNumber: "23WJ1A0444", name: "CHENGOLI GOVARDHAN", parentPhone: "9989070965", parentName: "", studentPhone: "7702389780" },
  { rollNumber: "23WJ1A0445", name: "CHEPURI LAXMI SAHITHI", parentPhone: "9849255681", parentName: "", studentPhone: "8639068683" },
  { rollNumber: "23WJ1A0446", name: "CHETTI ARUN SAI", parentPhone: "9550545997", parentName: "", studentPhone: "7842309979" },
  { rollNumber: "23WJ1A0447", name: "CHILUKANI POOLITHA REDDY", parentPhone: "9441927579", parentName: "", studentPhone: "6302886500" },
  { rollNumber: "23WJ1A0448", name: "CHINDAM SAI CHARAN", parentPhone: "9849808655", parentName: "", studentPhone: "9949253111" },
  { rollNumber: "23WJ1A0449", name: "CHINNOLLA AJAY REDDY", parentPhone: "9963216430", parentName: "", studentPhone: "9542924932" },
  { rollNumber: "23WJ1A0450", name: "CHITYALA KARTHIK REDDY", parentPhone: "9603885412", parentName: "", studentPhone: "9398662524" },
  { rollNumber: "23WJ1A0451", name: "DANDU SWETHA", parentPhone: "9014178213", parentName: "", studentPhone: "8520837001" },
  { rollNumber: "23WJ1A0452", name: "DASARI DIVYA", parentPhone: "9912291438", parentName: "", studentPhone: "8522820930" },
  { rollNumber: "23WJ1A0453", name: "DASARI SHIVA KUMAR", parentPhone: "97041396654", parentName: "", studentPhone: "9505322747" },
  { rollNumber: "23WJ1A0454", name: "DEPAVATH VAMSHI KRISHNA", parentPhone: "8247025042", parentName: "", studentPhone: "7993602102" },
  { rollNumber: "23WJ1A0455", name: "DEVARAKONDA SAI CHARAN", parentPhone: "9848991705", parentName: "", studentPhone: "7337281705" },
  { rollNumber: "23WJ1A0456", name: "DEVIREDDY KALPANA", parentPhone: "9542889718", parentName: "", studentPhone: "7287961709" },
  { rollNumber: "23WJ1A0457", name: "DONKANA SAMPATH KUMAR", parentPhone: "7382154453", parentName: "", studentPhone: "7382286772" },
  { rollNumber: "22WJ1A0435", name: "BHUKYA ESHWAR", parentPhone: "9866069965", parentName: "", studentPhone: "9347000619" },
  { rollNumber: "22WJ1A0419", name: "B CHARAN", parentPhone: "#ERROR1", parentName: "", studentPhone: "#ERROR1" },
  { rollNumber: "24WJSA0401", name: "ALUGAM VINAY", parentPhone: "7731909621", parentName: "", studentPhone: "7386409908" },
  { rollNumber: "24WJSA0402", name: "AVULA SATHWIK", parentPhone: "9849036904", parentName: "", studentPhone: "7989788981" },
  { rollNumber: "24WJSA0403", name: "B NITHISHA", parentPhone: "9951133178", parentName: "", studentPhone: "9652771003" },
  { rollNumber: "24WJSA0404", name: "BHUKYA DHARANI", parentPhone: "9182259213", parentName: "", studentPhone: "8555883006" },
  { rollNumber: "24WJSA0405", name: "BITLA POOJA", parentPhone: "7702342208", parentName: "", studentPhone: "8978288151" },
  { rollNumber: "24WJSA0406", name: "BODA SUPRAJ KUMAR", parentPhone: "9676902730", parentName: "", studentPhone: "8500387539" },
  { rollNumber: "24WJSA0407", name: "DHARAVATH POOJA", parentPhone: "6303753049", parentName: "", studentPhone: "7396055699" },
  { rollNumber: "24WJSA0408", name: "GOWRISETTY HARSHA VADDHAN", parentPhone: "7285917050", parentName: "", studentPhone: "7842262009" },

];
   
   let messageLogs = [];
   
   // FACULTY CONFIGURATION
   // Change this value when deploying to a different faculty
   const FACULTY_NAME = "Md_Anees";
   const DISPLAY_FACULTY_NAME = "Md.Anees";
   
   // Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyCs1Wgew-Y1hcY8xIUm9uFagdeByDTDGU0",
    authDomain: "collegeapp-59309.firebaseapp.com",
    projectId: "collegeapp-59309",
    storageBucket: "collegeapp-59309.firebasestorage.app",
    messagingSenderId: "298826677970",
    appId: "1:298826677970:web:3989fed84dd5bb4d73f70b"
  };
  
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   // Get a reference to the database service
   const database = firebase.database();
   
   // Replace localStorageDatabase with firebaseDatabase
   const firebaseDatabase = {
     saveMessage: function (log) {
       // Always save under the configured faculty name
       return database.ref(`faculty/${FACULTY_NAME}`).push(log);
     },
     getAllMessages: function () {
       return database.ref(`faculty/${FACULTY_NAME}`).once('value')
         .then(snapshot => {
           const messages = [];
           snapshot.forEach(childSnapshot => {
             messages.push(childSnapshot.val());
           });
           return messages;
         });
     },
     cleanupOldMessages: function () {
       const oneMonthAgo = new Date();
       oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
       
       return database.ref(`faculty/${FACULTY_NAME}`).once('value')
         .then(snapshot => {
           const updates = {};
           snapshot.forEach(childSnapshot => {
             const message = childSnapshot.val();
             if (new Date(message.timestamp) <= oneMonthAgo) {
               updates[childSnapshot.key] = null;
             }
           });
           return database.ref(`faculty/${FACULTY_NAME}`).update(updates);
         });
     },
     clearAllLogs: function () {
       return database.ref(`faculty/${FACULTY_NAME}`).remove();
     }
   };
   
   document.addEventListener('DOMContentLoaded', function () {
     fetchMessagesFromServer();
     periodicCleanup();
     setupEventListeners();
   });
   
   function fetchMessagesFromServer() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         messageLogs = messages;
         updateMessageLogs();
       })
       .catch(error => console.error('Error fetching messages:', error));
   }
   
   function periodicCleanup() {
     firebaseDatabase.cleanupOldMessages()
       .then(() => console.log('Old messages cleaned up'))
       .catch(error => console.error('Error cleaning up messages:', error));
   }
   
   function setupEventListeners() {
     const searchBtn = document.getElementById('searchBtn');
     if (searchBtn) searchBtn.addEventListener('click', toggleSearch);
   
     const whatsappParentBtn = document.getElementById('whatsappParentBtn');
     if (whatsappParentBtn) {
       whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
     }
   
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     if (sendCustomMessageBtn) {
       sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
     }
   
     const printBtn = document.getElementById('printBtn');
     if (printBtn) printBtn.addEventListener('click', openPrintModal);
   
     const closeModalBtn = document.getElementById('closeModal');
     if (closeModalBtn) closeModalBtn.addEventListener('click', closePrintModal);
   
     const printPreviewBtn = document.getElementById('printPreviewBtn');
     if (printPreviewBtn) printPreviewBtn.addEventListener('click', showPrintPreview);
   
     const clearLogsBtn = document.getElementById('clearLogsBtn');
     if (clearLogsBtn) clearLogsBtn.addEventListener('click', clearAllLogs);
   
     // Initialize date inputs with current date range
     const today = new Date();
     const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
   
     const startDateInput = document.getElementById('startDate');
     const endDateInput = document.getElementById('endDate');
     if (startDateInput) startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
     if (endDateInput) endDateInput.value = today.toISOString().split('T')[0];
   
     const exportLogsBtn = document.getElementById('exportLogsBtn');
     if (exportLogsBtn) exportLogsBtn.addEventListener('click', exportMessageLogs);
   
     const studentsBtn = document.getElementById('studentsBtn');
     if (studentsBtn) studentsBtn.addEventListener('click', openStudentsPage);
   
     // Add event listener for the new print button
     const newPrintBtn = document.getElementById('newPrintBtn');
     if (newPrintBtn) newPrintBtn.addEventListener('click', openPrintModal);
   
     const allParentsBtn = document.getElementById('allParentsBtn');
     if (allParentsBtn) allParentsBtn.addEventListener('click', toggleBulkMessageForm);
   
     const bulkMessageContent = document.getElementById('bulkMessageContent');
     if (bulkMessageContent) {
       bulkMessageContent.addEventListener('input', saveBulkMessage);
       loadBulkMessage(); // Load the saved message when the page loads
     }
  
     const dialNumberBtn = document.getElementById('dialNumberBtn');
     if (dialNumberBtn) dialNumberBtn.addEventListener('click', openDialPad);
   }
   
   function toggleSearch() {
     const profileCard = document.getElementById('profileCard');
     if (profileCard.style.display === 'none') {
       searchStudent();
     } else {
       profileCard.style.display = 'none';
     }
   }
   
   function toggleWhatsAppParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
       customMessageArea.style.display = 'block';
     } else {
       customMessageArea.style.display = 'none';
     }
   }
   
   function searchStudent() {
     const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
     const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
     const profileCard = document.getElementById('profileCard');
   
     // Hide the profile card first
     profileCard.style.display = 'none';
   
     if (student) {
       document.getElementById('studentName').textContent = student.name;
       document.getElementById('studentRoll').textContent = student.rollNumber;
       document.getElementById('parentName').textContent = student.parentName || 'Not available';
       document.getElementById('parentPhone').textContent = student.parentPhone;
       document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';
   
       profileCard.style.display = 'block';
       profileCard.classList.add('fade-in');
     } else {
       alert('Student not found. Please check the roll number and try again.');
     }
   }
   
   function toggleBulkMessageForm() {
     const bulkMessageForm = document.getElementById('bulkMessageForm');
     if (bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '') {
       bulkMessageForm.style.display = 'block';
       bulkMessageForm.classList.add('fade-in');
       document.getElementById('bulkMessageContent').value = ''; // Clear previous message
     } else {
       bulkMessageForm.style.display = 'none';
     }
   }
   
   function toggleCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     if (crProfiles.style.display === 'none') {
       showCRProfiles();
       crProfiles.style.display = 'block';
       crProfiles.classList.add('fade-in');
     } else {
       crProfiles.style.display = 'none';
     }
   }
   
   function showCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     crProfiles.innerHTML = ''; // Clear existing profiles
   
     const crs = [
      { name: 'YASHWANTH SAI', rollNumber: '22WJ1A04X9', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'SANTHOSH', rollNumber: '22WJ1A04Z1', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'PUSHPA SHREE', rollNumber: '22WJ1A04W4', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
      { name: 'ANUSHA', rollNumber: '22WJ1A04W3', email: '', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    ];
   
     crs.forEach(cr => {
       const profileCard = document.createElement('div');
       profileCard.className = 'profile-card cr-card';
       profileCard.innerHTML = `
         <div class="cr-info">
           <h3>${cr.name}</h3>
           <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
           <p><strong>Email:</strong> ${cr.email}</p>
           <button onclick="callCR('${cr.rollNumber}')">Call</button>
           <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
         </div>
       `;
       crProfiles.appendChild(profileCard);
     });
   }
   
   function openPrintModal() {
     document.getElementById('printModal').style.display = 'block';
   }
   
   function closePrintModal() {
     document.getElementById('printModal').style.display = 'none';
   }
   
   function filterData() {
     const startDate = new Date(document.getElementById('startDate').value);
     const endDate = new Date(document.getElementById('endDate').value);
     endDate.setHours(23, 59, 59, 999); // Set to end of day

     // Change this to use faculty-specific path
     return firebase.database().ref(`faculty/${FACULTY_NAME}`).once('value')
       .then(snapshot => {
         const messages = [];
         snapshot.forEach(childSnapshot => {
           const message = childSnapshot.val();
           const messageDate = new Date(message.timestamp);
           
           // Ensure recipient is always 10 digits
           if (message.recipient && message.recipient.startsWith('+91')) {
             message.recipient = message.recipient.slice(3);
           }
           
           if (messageDate >= startDate && messageDate <= endDate) {
             messages.push(message);
           }
         });
         
         // Sort messages by timestamp (newest first)
         messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
         
         return messages;
       });
   }
   
   function generatePrintableTable(data) {
    let tableHtml = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p>Message Logs Report</p>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Parent Name</th>
            <th style="width: 25%;">Message</th>
            <th>Status</th>
            <th>Platform</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    let currentDate = '';
    data.forEach(log => {
      const date = new Date(log.timestamp);
      const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const highlightClass = dateString !== currentDate ? 'highlight' : '';
      currentDate = dateString;
  
      const formattedPhone = log.recipient ? log.recipient.slice(-10) : 'N/A';
      tableHtml += `
        <tr class="${highlightClass}">
          <td>${dateString}</td>
          <td>${log.sender || 'N/A'}</td>
          <td>${formattedPhone}</td>
          <td>${log.studentName || 'N/A'}</td>
          <td>${log.studentRoll || 'N/A'}</td>
          <td>${log.parentName || 'N/A'}</td>
          <td style="width: 25%;">${log.message || 'N/A'}</td>
          <td>${log.status || 'N/A'}</td>
          <td>${log.platform || 'N/A'}</td>
          <td>${log.duration || 'N/A'}</td>
        </tr>
      `;
    });
  
    tableHtml += `
        </tbody>
      </table>
      <div style="text-align: center; margin-top: 20px;">
        <!-- <p>© 2024 Croxton Technologies. All rights reserved.</p> -->
      </div>
    `;
  
    return tableHtml;
  }
   
   function showPrintPreview() {
     filterData().then(filteredData => {
       const printContent = generatePrintableTable(filteredData);
       const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
       const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  
       // Open a new window for the print preview
       const printWindow = window.open('', '_blank');
       printWindow.document.write(`
         <html>
           <head>
             <title>Message Logs ${startDate} to ${endDate}</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 margin: 0;
                 padding: 20px;
               }
               .header, .footer {
                 text-align: center;
                 margin-bottom: 20px;
               }
               table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
               }
               th, td {
                 border: 1px solid #ddd;
                 padding: 8px;
                 text-align: left;
                 font-size: 12px;
               }
               th {
                 background-color: #f2f2f2;
                 font-weight: bold;
               }
               .highlight {
                 background-color: #ffffd0;
               }
               td:nth-child(7) {
                 width: 25%;
                 word-break: break-word;
               }
               @media print {
                 @page {
                   size: A4 landscape;
                   margin: 10mm;
                 }
                 body {
                   padding: 0;
                 }
                 .no-print {
                   display: none;
                 }
               }
             </style>
           </head>
           <body>
             <div class="header">
             
               <p>Date Range: ${startDate} to ${endDate}</p>
             </div>
             ${printContent}
             <div class="footer">
               <p>© 2024 Croxton Technologies Hyderabad India. All rights reserved.</p>
             </div>
             <div class="no-print" style="text-align: center; margin-top: 20px;">
               <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
               <button onclick="downloadCSV()" style="background-color: #008CBA; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Download CSV</button>
             </div>
             <script>
               function downloadCSV() {
                 const rows = document.querySelectorAll('table tr');
                 let csv = [];
                 for (let i = 0; i < rows.length; i++) {
                   let row = [], cols = rows[i].querySelectorAll('td, th');
                   for (let j = 0; j < cols.length; j++) {
                     let data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ');
                     data = data.replace(/"/g, '""');
                     row.push('"' + data + '"');
                   }
                   csv.push(row.join(','));
                 }
                 let csvContent = csv.join('\\n');
                 let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                 let link = document.createElement('a');
                 if (link.download !== undefined) {
                   let url = URL.createObjectURL(blob);
                   link.setAttribute('href', url);
                   link.setAttribute('download', 'Message_Logs_${startDate}_to_${endDate}.csv');
                   link.style.visibility = 'hidden';
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
                 }
               }
               window.onload = function() {
                 // Automatically open print dialog when the page loads
                 window.print();
               }
             </script>
           </body>
         </html>
       `);
       printWindow.document.close();
  
       // Hide the modal
       document.getElementById('printModal').style.display = 'none';
     });
   }
   
   function updateMessageLogs() {
     const logsContainer = document.getElementById('messageLogs');
     logsContainer.innerHTML = '';
   
     // Only show the most recent message
     if (messageLogs.length > 0) {
       const mostRecentLog = messageLogs[messageLogs.length - 1];
       const logEntry = document.createElement('p');
       const timestamp = new Date(mostRecentLog.timestamp);
       const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
       logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
       logEntry.classList.add('fade-in');
       logsContainer.appendChild(logEntry);
     }
   
     // Add a message indicating there are more logs if applicable
     if (messageLogs.length > 1) {
       const moreLogsMessage = document.createElement('p');
       moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
       moreLogsMessage.style.fontStyle = 'italic';
       moreLogsMessage.style.color = '#666';
       logsContainer.appendChild(moreLogsMessage);
     }
   }
   
   function clearAllLogs() {
     if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
       firebaseDatabase.clearAllLogs()
         .then(() => {
           messageLogs = [];
           updateMessageLogs();
           alert("All message logs have been cleared.");
         })
         .catch(error => {
           console.error('Error clearing logs:', error);
           alert("An error occurred while clearing logs. Please try again.");
         });
     }
   }
   
   function callParent() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (parentPhone) {
       const startTime = new Date();
       window.location.href = `tel:${parentPhone}`;
       
       // Create and show popup after 10 seconds
       setTimeout(() => {
         const popup = document.createElement('div');
         popup.style.position = 'fixed';
         popup.style.left = '50%';
         popup.style.top = '50%';
         popup.style.transform = 'translate(-50%, -50%)';
         popup.style.backgroundColor = '#ffffff';
         popup.style.padding = '30px';
         popup.style.borderRadius = '10px';
         popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
         popup.style.zIndex = '1000';
         popup.style.fontFamily = 'Arial, sans-serif';
         popup.style.textAlign = 'center';
         popup.innerHTML = `
           <h3 style="margin-top: 0; color: #333;">Call Status</h3>
           <p style="margin-bottom: 20px; color: #666;">Was the call answered?</p>
           <button id="yesBtn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">Yes</button>
           <button id="noBtn" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">No</button>
         `; 
         document.body.appendChild(popup);
   
         document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
         document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));
   
         function handleCallResponse(wasAnswered) {
           const endTime = new Date();
           const durationInSeconds = Math.round((endTime - startTime) / 1000);
           let durationString;
           
           if (durationInSeconds >= 60) {
             const minutes = Math.floor(durationInSeconds / 60);
             const seconds = durationInSeconds % 60;
             durationString = `${minutes} min${minutes > 1 ? 's' : ''} ${seconds} sec${seconds !== 1 ? 's' : ''}`;
           } else {
             durationString = `${durationInSeconds} sec${durationInSeconds !== 1 ? 's' : ''}`;
           }
           
           // Log the call
           const log = {
             sender: DISPLAY_FACULTY_NAME,
             recipient: parentPhone,
             studentName: studentName,
             studentRoll: studentRoll,
             parentName: parentName,
             message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
             timestamp: new Date().toISOString(),
             status: wasAnswered ? 'answered' : 'not answered',
             platform: 'Phone',
             duration: wasAnswered ? durationString : 'N/A'
           };
           firebaseDatabase.saveMessage(log)
             .then(() => fetchMessagesFromServer())
             .catch(error => console.error('Error saving message:', error));
           document.body.removeChild(popup);
         }
       }, 10000);
     } else {
       alert('Parent phone number not available.');
     }
   }
   
   function callStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       window.location.href = `tel:${studentPhone}`;
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function whatsappParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     customMessageArea.style.display = 'block';
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
   }
   
   function whatsappStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent('Hello, this is a message from your faculty.');
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the WhatsApp message
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: 'WhatsApp message sent to student',
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function sendCustomWhatsAppMessage() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     const customMessage = document.getElementById('customMessageContent').value;
     
     if (parentPhone && customMessage.trim() !== '') {
       // Format the phone number with country code
       const formattedPhone = `+91${parentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent(customMessage);
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the custom WhatsApp message
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: customMessage,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
       
       // Clear and hide the custom message area
       document.getElementById('customMessageContent').value = '';
       document.getElementById('customMessageArea').style.display = 'none';
     } else {
       alert('Please enter a message and ensure parent phone number is available.');
     }
   }
   
   function exportMessageLogs() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         const today = new Date();
         const dateString = today.toISOString().split('T')[0];
         const csvContent = "data:text/csv;charset=utf-8,"
           + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
           + messages.map(e => {
             return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
           }).join("\n");
   
         const encodedUri = encodeURI(csvContent);
         const link = document.createElement("a");
         link.setAttribute("href", encodedUri);
         link.setAttribute("download", `message_logs_${dateString}.csv`);
         document.body.appendChild(link);
         link.click();
       })
       .catch(error => console.error('Error exporting logs:', error));
   }
   
   function callCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       window.location.href = `tel:${cr.studentPhone}`;
     } else {
       alert('Phone number not available for this CR.');
     }
   }
   
   function whatsappCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
       window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
     } else {
       alert('WhatsApp number not available for this CR.');
     }
   }
   
   function openStudentsPage() {
     window.open('students.html', '_blank');
   }
   
   function sendBulkWhatsAppMessage(parentPhones, message) {
     const encodedMessage = encodeURIComponent(message);
     const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
     window.open(whatsappUrl, '_blank');
   }
   
   function sendBulkSMSMessage(parentPhones, message) {
     const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
     window.location.href = smsUrl;
   }
   
   function sendBulkMessage(group) {
     const messageTextArea = document.getElementById('bulkMessageContent');
     const message = messageTextArea.value;
     if (message.trim() === '') {
       alert('Please enter a message.');
       return;
     }
   
     let parentPhones = students.map(student => student.parentPhone);
     let startIndex, endIndex;
   
     switch (group) {
       case 'first':
         startIndex = 0;
         endIndex = 25;
         break;
       case 'second':
         startIndex = 25;
         endIndex = 50;
         break;
       case 'third':
         startIndex = 50;
         endIndex = parentPhones.length;
         break;
     }
   
     parentPhones = parentPhones.slice(startIndex, endIndex);
     const phoneNumbers = parentPhones.join(',');
   
     // Open SMS app with pre-filled message for bulk sending
     window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
   
     // Log the bulk message to Firebase
     const bulkLog = {
       sender: DISPLAY_FACULTY_NAME,
       recipients: parentPhones,
       message: message,
       timestamp: new Date().toISOString(),
       status: 'sent',
       platform: 'SMS (Bulk)',
       group: group
     };
   
     // Save bulk message log
     firebaseDatabase.saveMessage(bulkLog)
       .then(() => console.log('Bulk message logged successfully'))
       .catch(error => console.error('Error saving bulk message:', error));
   
     // Log individual messages
     parentPhones.forEach(phone => {
       const student = students.find(s => s.parentPhone === phone);
       const log = {
         sender: DISPLAY_FACULTY_NAME,
         recipient: phone,
         studentName: student ? student.name : 'N/A',
         studentRoll: student ? student.rollNumber : 'N/A',
         parentName: student ? student.parentName : 'N/A',
         message: message,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'SMS',
         bulkGroup: group
       };
       firebaseDatabase.saveMessage(log)
         .then(() => console.log('Individual message logged successfully'))
         .catch(error => console.error('Error saving individual message:', error));
     });
   
     // Fetch updated messages
     fetchMessagesFromServer();
   
     alert(`Bulk message sent to ${group} group (${parentPhones.length} recipients)`);
   }
   
   // Add this function to save the message to local storage
   function saveBulkMessage() {
     const message = document.getElementById('bulkMessageContent').value;
     localStorage.setItem('bulkMessage', message);
   }
  
   // Add this function to load the message from local storage
   function loadBulkMessage() {
     const message = localStorage.getItem('bulkMessage') || '';
     document.getElementById('bulkMessageContent').value = message;
   }
  
   function openDialPad(event) {
     // Get the parent profile card of the clicked button
     const profileCard = event.target.closest('.profile-card');
    
     // Extract information from this specific card
     const studentPhone = profileCard.querySelector('#studentPhone').textContent;
     const studentName = profileCard.querySelector('#studentName').textContent;
     const studentRoll = profileCard.querySelector('#studentRoll').textContent;
     const parentName = profileCard.querySelector('#parentName').textContent;
  
     localStorage.setItem('dialpadInfo', JSON.stringify({
       phone: studentPhone,
       studentName: studentName,
       studentRoll: studentRoll,
       parentName: parentName
     }));
  
     window.location.href = 'dialpad.html';
   }
  
   // Add this function to add sample data (for testing purposes)
   // document.addEventListener('DOMContentLoaded', addSampleData);

// Add this showMessageLogs function to your script.js
function showMessageLogs() {
  // Hide other sections
  hideAllSections();
  
  // Show message logs section
  document.getElementById('messageLogs').style.display = 'block';
  
  // Update active tab in navbar
  updateActiveTab('messages');
  
  // Load/refresh message logs
  loadMessageLogs();
}

// Helper function to hide all sections
function hideAllSections() {
  // Hide profile card
  document.getElementById('profileCard').style.display = 'none';
  
  // Hide bulk message form if it exists
  if (document.getElementById('bulkMessageForm')) {
    document.getElementById('bulkMessageForm').style.display = 'none';
  }
  
  // Hide message form
  if (document.getElementById('messageForm')) {
    document.getElementById('messageForm').style.display = 'none';
  }
  
  // Hide CR profiles
  if (document.getElementById('crProfiles')) {
    document.getElementById('crProfiles').style.display = 'none';
  }
}

// Function to update active tab in the navbar
function updateActiveTab(activeTab) {
  // Remove active class from all tabs
  document.querySelectorAll('.nav-item').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Add active class to selected tab
  if (activeTab === 'home') {
    document.querySelector('.nav-item:nth-child(1)').classList.add('active');
  } else if (activeTab === 'messages') {
    document.querySelector('.nav-item:nth-child(2)').classList.add('active');
  } else if (activeTab === 'students') {
    document.querySelector('.nav-item:nth-child(3)').classList.add('active');
  }
}

// Load message logs from Firebase
function loadMessageLogs() {
  const logsContainer = document.getElementById('logsContent');
  
  // Clear existing logs display
  logsContainer.innerHTML = '';
  
  // Get logs from Firebase using faculty-specific path
  firebaseDatabase.getAllMessages()
    .then(logs => {
      if (logs.length === 0) {
        // Display a message if no logs exist
        logsContainer.innerHTML = '<p class="no-logs">No message logs found.</p>';
        return;
      }
      
      // Sort logs by timestamp (newest first)
      logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      // Create log entries
      logs.forEach(log => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        
        const formattedDate = new Date(log.timestamp).toLocaleString();
        
        logEntry.innerHTML = `
          <div class="log-header">
            <span class="log-recipient">${log.recipient || 'N/A'}</span>
            <span class="log-timestamp">${formattedDate}</span>
          </div>
          <div class="log-message">${log.message || 'N/A'}</div>
        `;
        
        logsContainer.appendChild(logEntry);
      });
    })
    .catch(error => {
      console.error('Error loading message logs:', error);
      logsContainer.innerHTML = '<p class="error">Error loading messages. Please try again later.</p>';
    });
}

// Function to show home screen (main search interface)
function showHomeScreen() {
  hideAllSections();
  updateActiveTab('home');
  
  // Optional: Clear search field
  document.getElementById('rollNumber').value = '';
}

// Add event listener for the home tab
document.addEventListener('DOMContentLoaded', function() {
  // Set up click events for bottom navbar
  const homeTab = document.querySelector('.nav-item:nth-child(1)');
  homeTab.addEventListener('click', function(e) {
    e.preventDefault();
    showHomeScreen();
  });
  
  // Initial setup
  showHomeScreen();
  
  // Set up clear logs button
  const clearLogsBtn = document.getElementById('clearLogsBtn');
  clearLogsBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to clear all message logs?')) {
      localStorage.removeItem('messageLogs');
      loadMessageLogs();
    }
  });
});