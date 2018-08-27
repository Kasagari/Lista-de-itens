let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
    e.preventDefault();

    // get input value
    const newItem = document.getElementById('item').value;

    // create new li element 
    const li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    console.log(li);

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    const deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);

    document.getElementById('item').value = '';
}

// remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// filter items 
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}