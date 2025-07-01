import EventEmitter from 'events';

const customEmitter=new EventEmitter();

//1. on:listen/register for an event
//2. once:listen/register for an event
//3. emit: emit/call an event

//register
customEmitter.on('response',(name,id)=>{
    console.log(`user:${name} id:${id}`)
})
//call
customEmitter.emit('response',"Srinivas",20)
customEmitter.emit('response',"Ram",18)