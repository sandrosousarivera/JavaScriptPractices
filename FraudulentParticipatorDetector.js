let participantListOne = ['Mike', 'Tony', 'Sarah', 'Alfredo', 'Michael', 'Karen', 'Dylan', 'Chad'];

let participantListTwo = ['Anthony', 'Frank', 'Karen', 'Stephanie', 'Chad', 'Sophie'];

let fraudulentParticipant = [];

for (let i = 0; i < participantListOne.length; i++){
  for (let j = 0; j < participantListTwo.length; j++){
    if (participantListOne[i]===participantListTwo[j]){
      fraudulentParticipant.push(participantListOne[i]);
    }
  }

};
console.log( 'Caution, some people are trying to participate in the two sales, ' + fraudulentParticipant + ' ,these are the fraudulent ones!');
