const lyrics = [
    ['cow', 'moo'],
    ['pig', 'oink'],
    ['duck', 'quack']
  ]
  
  for (const lyric of lyrics) {
    console.log(`Old MACDONALD had a farm
  E-I-E-I-O
  And on his farm he had a ${lyric[0]}
  E-I-E-I-O
  With a ${lyric[1]} ${lyric[1]} here
  And a ${lyric[1]} ${lyric[1]} there
  Here a ${lyric[1]}, there a ${lyric[1]}
  Everywhere a ${lyric[1]} ${lyric[1]}
  Old MacDonald had a farm
  E-I-E-I-O
  `)
  }
  
  const bingos = [
    {action: '', bingo: 'B-I-N-G-O'},
    {action: '(clap)', bingo: '-I-N-G-O'},
    {action: '(clap)-(clap)', bingo: '-N-G-O'},
    {action: '(clap)-(clap)-(clap)', bingo: '-G-O'},
    {action: '(clap)-(clap)-(clap)-(clap)', bingo: '-O'},
    {action: '(clap)-(clap)-(clap)-(clap)-(clap)', bingo: ''}
  ]
  for (const bingo of bingos) {
    console.log(`There was a farmer who had a dog,
  And Bingo was his name-o.
  ${bingo.action} ${bingo.bingo}
  ${bingo.action} ${bingo.bingo}
  ${bingo.action} ${bingo.bingo}
  And Bingo was his name-o.`)
  }
  
  const days = [
    'first',
    'second',
    'third',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth'
  ]
  
  const gifts = [
    '12 Drummers of Drumming',
    'Eleven Pipers Piping',
    'Ten Lords a Leaping',
    'Nine Ladies Dancing',
    'Eight Maids a Milking',
    'Seven Swans a Swimming',
    'Six Geese a Laying',
    'Five Golden Rings',
    'Four Calling Birds',
    'Three French Doves',
    'Two Turtle Doves',
    'a Partridge in a Pear Tree'
  ]
  console.log('12 Days of Christmas')
  for (const day of days) {
    console.log(`On the ${day} of Christmas my true love gave to me: `)
  
    for (let i = 11 - days.indexOf(day); i < 12; i++) {
      if (i === 11 && days.indexOf(day) > 0) {
        console.log(` and ${gifts[i]}`)
      } else {
        console.log(gifts[i])
      }
    }
  }