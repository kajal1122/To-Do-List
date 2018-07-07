const SubmitButton=document.querySelector('.submit');
SubmitButton.addEventListener('click',()=>{
  const task=document.querySelector('.task').value;
  const li=document.createElement('li');
  const removeButton=document.createElement('button');
  const ul=document.querySelector('.ul');
  li.innerHTML=task;
  removeButton.innerHTML='remove';
  removeButton.className="removeButton";
  removeButton.addEventListener('click',()=>{
     removeButton.parentNode.parentNode.removeChild(removeButton.parentNode);



  });


  li.appendChild(removeButton);
  ul.appendChild(li);
  document.querySelector('.task').value="";



});
