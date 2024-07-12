function fun1(){
  alert('Your password should contain,\n- Atleast one Uppercase letter\n- Atleast one Lowercase letter\n- Atleast one Special character\n- Atleast one number\n- Length must be minimum of 8 characters');
}
function toggleVisibility() 
{
  const inputField = document.querySelector('.input');
  if (inputField.type === "password") {
    inputField.type = "text";
  } else {
    inputField.type = "password";
  }
}
function check(){
  let str = document.querySelector('.input').value;
  let countUpper=0, countLower=0, countNum=0, countSpecial=0;
  for(let i=0;i<str.length;i++)
  {
    const x = str.charCodeAt(i);
    if(x>=65 && x<=90)
    {
      countUpper++; 
    }
    else if(x>=97 && x<=122)
    {
      countLower++;
    }
    else if(x>=48 && x<=57)
    {
      countNum++;
    }
    else{
      if(str[i] != ' ')
      {
        countSpecial++; 
      }
    }
  }
  if(countUpper >= 1 && countLower >= 1 && countNum >= 1 && countSpecial >= 1 && str.length >= 8)
  {
    if(str.length >= 8 && str.length <= 11)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password strength is good !!!!!';
      document.querySelector('.input').value = '';
    }
    else if(str.length >= 12 && str.length <= 15)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password strength is better !!!!!';
      document.querySelector('.input').value = '';
    }
    else if(str.length >= 16 && str.length <= 20)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password is strong !!!!!';
      document.querySelector('.input').value = '';
    }
    else if(str.length > 20)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password strength is very strong and secure !!!!!';
      document.querySelector('.input').value = '';
    }
  }
  else
  {
    if(str.length < 8)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password should be a minimum of 8 characters';
      document.querySelector('.input').value = '';
    }
    else if(countUpper == 0)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password must contain atleast one Uppercase letter';
      document.querySelector('.input').value = '';
    }
    else if(countLower == 0)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password must contain atleast one Lowercase letter';
      document.querySelector('.input').value = '';
    }
    else if(countNum == 0)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password must contain atleast one Number';
      document.querySelector('.input').value = '';
    }
    else if(countSpecial == 0)
    {
      document.querySelector('.out').classList.add('-put');
      document.querySelector('.out').innerHTML = 'Your password must contain atleast one Special Character';
      document.querySelector('.input').value = '';
    }
  }
}