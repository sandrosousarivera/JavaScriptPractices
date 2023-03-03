const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 6;
    }else if (day === 'wednesday') {
      return 7;
    }else if (day === 'thursday') {
      return 8;
    }else if (day === 'friday') {
      return 2;
    }else if (day === 'saturday') {
      return 5;
    }else if (day === 'sunday') {
      return 4;
    }else{
      return 'Error!';
    }
  };
  
  const getactualSleepHours = () => {
    return getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
  const actualSleepHours = getactualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  
  if (actualSleepHours === idealSleepHours){
    console.log ('You slept well this week, keep it up!');
  
  } else if (actualSleepHours > idealSleepHours){
    console.log ('You slept more than needed, you sloth!!');
  
  }else if (actualSleepHours < idealSleepHours){
    console.log ('You slept ' + (idealSleepHours - actualSleepHours) + ' hours less this week, go to bed, now!');
  }
  };
  
  calculateSleepDebt();
