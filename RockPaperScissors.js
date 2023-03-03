const getUserChoice = userChoice => {

    userChoice = userChoice.toLowerCase();
    
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors' || userChoice === 'bomb' ){
      return userChoice;
    }else{
      throw new Error('Error, enter either Rock, Paper or Scissors!!')
    }
    
    };
    
    const getComputerChoice = () => {
      let randomNumber = Math.floor(Math.random() * 4 );
      switch (randomNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors'
        case 3:
        return 'bomb'
      }
    }
    
    const determineWinner = (userChoice, computerChoice) =>{
    
      if(userChoice === computerChoice){
      return 'The game is a tie';
    }
    
    if(userChoice === 'bomb'){
      return 'You won!!';
    }
    
    if(computerChoice === 'bomb'){
      return 'Computer won!!';
    }
    
    
    
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'The computer won';
      }else{
        return 'You won!';
      }
    }
    
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'The computer won';
      }else{
        return 'You won!';
      }
    }
    
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'The computer won';
      }else{
        return 'You won!';
      }
    }
    
    
    
    
    }
    
    const playGame = () => {
       const userChoice = getUserChoice('paper');
       const computerChoice = getComputerChoice();
       console.log('You threw: ' + userChoice);
       console.log('The computer threw:' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    };
     
    playGame();
