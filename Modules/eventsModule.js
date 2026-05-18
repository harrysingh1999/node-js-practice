const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', () => {
  console.log('custom event called!')
} )

emitter.on('eventWithArgs', (e) => {
  console.log('custom event with es called!', e)
} )

// Event or change happened in our event class or Event triggering..... and Emit must be placed after the event listener........
emitter.emit('messageLogged')

// Event Arguments..................

emitter.emit('eventWithArgs', { id:1, url: 'test.com' } )