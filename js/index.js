
function addBookmark() {
    const name = document.getElementById('bookmarkName').value;
    const url = document.getElementById('bookmarkUrl').value;
  
    if (!name || !url) {
      alert("Both fields are required.");
      return;
    }
  
    
    const table = document.getElementById('bookmarkTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
  
    
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
  
    cell1.textContent = name;
    cell2.textContent = url;
  
    
    const actions = document.createElement('div');
    actions.classList.add('actions');
  
    const visitButton = document.createElement('button');
    visitButton.textContent = 'Visit';
    visitButton.classList.add('visit');
    visitButton.onclick = () => window.open(url, '_blank');
    actions.appendChild(visitButton);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteBookmark(row);
    actions.appendChild(deleteButton);
  
    cell3.appendChild(actions);
  
    
    document.getElementById('bookmarkName').value = '';
    document.getElementById('bookmarkUrl').value = '';
  }
  
  
  function deleteBookmark(row) {
    row.remove();
  }
  