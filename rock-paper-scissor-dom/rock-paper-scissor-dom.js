const obj = {
  wins : 0,
  losses : 0,
  ties : 0
};

function reset(){
  obj.wins = 0;
  obj.losses = 0;
  obj.ties = 0;
  document.querySelector('.out').innerHTML = '';
  document.querySelector('.result').innerHTML = '';
  document.querySelector('.scores').innerHTML = `Wins : ${obj.wins} Losses : ${obj.losses} Ties : ${obj.ties}`;
}

function rock(){
  let user='rock';
  let r = Math.random();
  let comp = 'rock';
  if(r>=0 && r<1/3)
  {
    comp = 'rock'; 
  }
  else if(r>=1/3 && r<2/3)
  {
    comp = 'paper';
  }
  else{
    comp = 'scissors';
  }

  document.querySelector('.out').innerHTML = result(user, comp);
  document.querySelector('.result').innerHTML = `You chose <img src="${user}-emoji.png" class="resimg">.....Computer chose <img src="${comp}-emoji.png" class="resimg">.....`;
  document.querySelector('.scores').innerHTML = `Wins : ${obj.wins} Losses : ${obj.losses} Ties : ${obj.ties}`;
}

function paper(){
  let user='paper';
  let r = Math.random();
  let comp = 'paper';
  if(r>=0 && r<1/3)
  {
    comp = 'rock'; 
  }
  else if(r>=1/3 && r<2/3)
  {
    comp = 'paper';
  }
  else{
    comp = 'scissors';
  }

  document.querySelector('.out').innerHTML = result(user, comp);
  document.querySelector('.result').innerHTML = `You chose <img src="${user}-emoji.png" class="resimg">.....Computer chose <img src="${comp}-emoji.png" class="resimg">.....`;
  document.querySelector('.scores').innerHTML = `Wins : ${obj.wins} Losses : ${obj.losses} Ties : ${obj.ties}`;
}

function scissor(){
  let user='scissors';
  let r = Math.random();
  let comp = 'scissors';
  if(r>=0 && r<1/3)
  {
    comp = 'rock'; 
  }
  else if(r>=1/3 && r<2/3)
  {
    comp = 'paper';
  }
  else if(r>=2/3 && r<=1){
    comp = 'scissors';
  }

  document.querySelector('.out').innerHTML = result(user, comp);
  document.querySelector('.result').innerHTML = `You chose <img src="${user}-emoji.png" class="resimg">.....Computer chose <img src="${comp}-emoji.png" class="resimg">.....`;
  document.querySelector('.scores').innerHTML = `Wins : ${obj.wins} Losses : ${obj.losses} Ties : ${obj.ties}`;
}

function result(user, comp)
{
  console.log(user);
  console.log(comp);
  let res = 'Game tied';
  if(user == comp)
  {
    res = 'Game tied'; 
  }
  else if(user == 'rock' && comp == 'paper')
  {
    res = 'Computer won';
  }
  else if(user == 'rock' && comp == 'scissors')
  {
    res = 'You won';
  }
  else if(user == 'paper' && comp == 'rock')
  {
    res = 'You won';
  }
  else if(user == 'paper' && comp == 'scissors')
  {
    res = 'Computer won';
  }
  else if(user == 'scissors' && comp == 'rock')
  {
    res = 'Computer won';
  }
  else if(user == 'scissors' && comp == 'paper')
  {
    res = 'You won';
  }


  
  if(res == 'You won')
  {
    obj.wins+=1;
  }
  else if(res == 'Computer won')
  {
    obj.losses+=1;
  }
  else{
    obj.ties+=1;
  }
  return res;
}