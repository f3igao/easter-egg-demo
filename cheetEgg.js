// cheet('f l a t i r o n', () => {
//     console.log('flatiron easter egg has been unlocked');
// });
//
// cheet('↑ ↑ ↓ ↓ ← → ← → b a', () => {
//     console.log('konami code triggered');
// });

const easterEggs = {
  flatiron: 'f l a t i r o n',
  konami: 'up up down down left right left right b a'
};

cheet(easterEggs.flatiron);
cheet(easterEggs.konami);
cheet.done(function (sequence) {
  if (sequence === easterEggs.flatiron) {
    console.log('flatiron easter egg unlocked');
  } else if (sequence === easterEggs.konami){
    console.log('konami code triggered!');
  }
});
