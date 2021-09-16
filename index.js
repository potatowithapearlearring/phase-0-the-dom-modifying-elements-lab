const element = document.createElement('div');
document.body.appendChild(element);

element.style.backgroundColor = '#27647B';
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

const newHeader = document.createElement('h1')
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "Josh is the champion"
document.body.appendChild(newHeader) 