/**
 * Global const's
 */
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/**
 * First function.
 * First get value from input;
 * Verify if user doesn't click on 'cancel' or click on 'ok' with empty field.
 * Create li with the value and structure of HTML.
 * So add event listener in TODO.
*/
 function newTodo() {
  var newTODO = prompt("New TODO:");

  if(newTODO == null) return;
  if(newTODO == '') alert('Please, you need write a TODO.')
  else{
    var contentTODO = document.createTextNode(newTODO);
    var closeTODO = document.createElement("SPAN");
    var li = document.createElement("li");

    var closeX = document.createTextNode("\u00D7");

    closeTODO.className = "closeTODO";

    closeTODO.appendChild(closeX);
    li.appendChild(contentTODO);
    li.appendChild(closeTODO);

    list.appendChild(li);

    itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + 1;
    uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + 1;

    list.addEventListener('click', clickEvents, false);
    list.addEventListener('dblclick', clickEvents, false);
    list.addEventListener('mouseover', clickEvents, false);
  }
}

/**
 * Here happens the program event management.
 * - One click in the TODO, mark as check
 * - One click in the close TODO button:
 *   if to be checked, so delete it and subtract one in item count,
 *   if not to be checked, delete it and subtract one in item count and in unchecked count
 * - Two click, unchecked the TODO and subtract one in unchecked count
 * - On mouse hover in TODO, change background color of TODO and also icon check appears
 */
function clickEvents(event){
  if(event.type === 'click'){
    if(event.target.tagName === 'SPAN'){
      if(event.target.classList.contains('closeTODO')){
        if(event.target.parentElement.classList.contains('checked')){
          event.target.parentElement.style.display = 'none';
          itemCountSpan.textContent = parseInt(itemCountSpan.textContent) - 1;
        }
        else{
          event.target.parentElement.style.display = 'none';
          uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) - 1;
          itemCountSpan.textContent = parseInt(itemCountSpan.textContent) - 1;
        }
      }
    }
    if(event.target.tagName === 'LI'){
      if(!event.target.classList.contains('checked')){
        event.target.classList.add('checked');
        uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) - 1;
      }
    }
  }

  if(event.type === 'dblclick'){
    if(event.target.tagName === 'LI'){
      event.target.classList.remove('checked');
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + 1;
    }
  }

  if(event.type === 'mouseover'){
    if(event.target.tagName === 'LI'){
      event.target.classList.add('icon');
    }
  }
}