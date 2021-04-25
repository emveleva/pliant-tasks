function bestVelocity(arr) {
      if (arr.length < 3 ){
            console.log('error');
            return;
      }

      let bestSequence = [];
      let moreBest = false;
      let bestSum = 0;
      while (arr.length >= 3){
            sequence = [];
            let sum = 0;
            for (let i = 0; i < 3; i++){
                  sequence.push(arr[i])
                  sum += Number(arr[i]);
            }
            if (bestSum == sum){
                  moreBest = true;
            }
            if(bestSum <= sum){
                  bestSum = sum;
                  bestSequence = sequence;
            }
            arr.shift();
      }
      if (moreBest){
            console.log(bestSequence)
      } else {
            console.log(`{sequence: [${bestSequence}], sum: ${bestSum}}`)
      }
      }

// bestVelocity(['11', '14', '10', '12'])
// bestVelocity(['12', '9', '1', '5', '11', '5'])
// bestVelocity(['76', '80'])
bestVelocity(['76', '80', '81', '77', '83', '78', '80'])