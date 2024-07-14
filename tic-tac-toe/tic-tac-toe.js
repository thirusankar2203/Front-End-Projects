let play1 = 0;
  let play2 = 0;
  let tie = 0;
  let count = 0;    //if count is even, User1 else, User2.
  let p1 = [];      //Array for storing player1 values.
  let p2 = [];      //Array for storing player2 values.
  let flag = 0;

  function scoreReset(){
    count = 0;
    p1 = [];
    p2 = [];
    flag = 0;
    play1 = 0;
    play2 = 0;
    tie = 0;
    document.querySelector('.out').innerHTML = '';
    document.querySelector('.b1').innerHTML = '🤩';
    document.querySelector('.b2').innerHTML = '🤩';
    document.querySelector('.b3').innerHTML = '🤩';
    document.querySelector('.b4').innerHTML = '🤩';
    document.querySelector('.b5').innerHTML = '🤩';
    document.querySelector('.b6').innerHTML = '🤩';
    document.querySelector('.b7').innerHTML = '🤩';
    document.querySelector('.b8').innerHTML = '🤩';
    document.querySelector('.b9').innerHTML = '🤩';
    document.querySelector('.s1').innerHTML = `Mr.X : 0`;
    document.querySelector('.s2').innerHTML = `Mr.O : 0`;
    document.querySelector('.s3').innerHTML = `Tie : 0`;
  }
  
  function resetGame() {
    count = 0;
    p1 = [];
    p2 = [];
    flag = 0;
    document.querySelector('.out').innerHTML = '';
    document.querySelector('.b1').innerHTML = '🤩';
    document.querySelector('.b2').innerHTML = '🤩';
    document.querySelector('.b3').innerHTML = '🤩';
    document.querySelector('.b4').innerHTML = '🤩';
    document.querySelector('.b5').innerHTML = '🤩';
    document.querySelector('.b6').innerHTML = '🤩';
    document.querySelector('.b7').innerHTML = '🤩';
    document.querySelector('.b8').innerHTML = '🤩';
    document.querySelector('.b9').innerHTML = '🤩';
  }

  function button1() {
    if (document.querySelector('.b1').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b1'); 
        document.querySelector('.b1').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b1');
        document.querySelector('.b1').innerHTML = '⭕';
        document.getElementById('soundO').play();
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button2() {
    if (document.querySelector('.b2').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b2'); 
        document.querySelector('.b2').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b2');
        document.querySelector('.b2').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button3() {
    if (document.querySelector('.b3').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b3'); 
        document.querySelector('.b3').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b3');
        document.querySelector('.b3').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button4() {
    if (document.querySelector('.b4').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b4'); 
        document.querySelector('.b4').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b4');
        document.querySelector('.b4').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button5() {
    if (document.querySelector('.b5').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b5'); 
        document.querySelector('.b5').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b5');
        document.querySelector('.b5').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button6() {
    if (document.querySelector('.b6').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b6'); 
        document.querySelector('.b6').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b6');
        document.querySelector('.b6').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button7() {
    if (document.querySelector('.b7').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b7'); 
        document.querySelector('.b7').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b7');
        document.querySelector('.b7').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button8() {
    if (document.querySelector('.b8').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b8'); 
        document.querySelector('.b8').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b8');
        document.querySelector('.b8').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function button9() {
    if (document.querySelector('.b9').innerHTML === '🤩') {
      if (count % 2 == 0) {
        p1.push('b9'); 
        document.querySelector('.b9').innerHTML = '❌';
        document.getElementById('soundX').play();
      } else {
        p2.push('b9');
        document.querySelector('.b9').innerHTML = '⭕';
        document.getElementById('soundO').play();
      }
      count++;
      check();
    }
  }

  function check() {
    if (count >= 5 && flag == 0) {
      if (p1.length >= 3) {
        if (p1.includes('b1') && p1.includes('b2') && p1.includes('b3')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b1') && p1.includes('b4') && p1.includes('b7')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b2') && p1.includes('b5') && p1.includes('b8')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b4') && p1.includes('b5') && p1.includes('b6')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b3') && p1.includes('b6') && p1.includes('b9')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b7') && p1.includes('b8') && p1.includes('b9')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b1') && p1.includes('b5') && p1.includes('b9')) {
          console.log('Player1 wins');
          flag = 1;
        } else if (p1.includes('b3') && p1.includes('b5') && p1.includes('b7')) {
          console.log('Player1 wins');
          flag = 1;
        }
      }

      if (p2.length >= 3) {
        if (p2.includes('b1') && p2.includes('b2') && p2.includes('b3')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b1') && p2.includes('b4') && p2.includes('b7')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b2') && p2.includes('b5') && p2.includes('b8')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b4') && p2.includes('b5') && p2.includes('b6')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b3') && p2.includes('b6') && p2.includes('b9')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b7') && p2.includes('b8') && p2.includes('b9')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b1') && p2.includes('b5') && p2.includes('b9')) {
          console.log('Player2 wins');
          flag = 2;
        } else if (p2.includes('b3') && p2.includes('b5') && p2.includes('b7')) {
          console.log('Player2 wins');
          flag = 2;
        }
      }

      if (flag === 1) {
        document.querySelector('.out').innerHTML = 'Player 1 wins!';
        play1++;
        document.getElementById('won').play();
        setTimeout(resetGame, 4000);
        document.querySelector('.s1').innerHTML = `Mr.X : ${play1}`;
        document.querySelector('.s2').innerHTML = `Mr.0 : ${play2}`;
        document.querySelector('.s3').innerHTML = `Tie : ${tie}`;
      } else if (flag === 2) {
        document.querySelector('.out').innerHTML = 'Player 2 wins!';
        play2++;
        document.getElementById('won').play();
        setTimeout(resetGame, 4000);
        document.querySelector('.s1').innerHTML = `Mr.X : ${play1}`;
        document.querySelector('.s2').innerHTML = `Mr.O : ${play2}`;
        document.querySelector('.s3').innerHTML = `Tie : ${tie}`;
      } else if (count === 9) {
        document.querySelector('.out').innerHTML = 'It\'s a tie!';
        tie++;
        document.getElementById('tied').play();
        setTimeout(resetGame, 4000);
        document.querySelector('.s1').innerHTML = `Mr.X : ${play1}`;
        document.querySelector('.s2').innerHTML = `Mr.O : ${play2}`;
        document.querySelector('.s3').innerHTML = `Tie : ${tie}`;
      }
    }
  }