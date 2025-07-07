const events = require("events")

let EventsEmitter = new events.EventEmitter();

EventsEmitter.on("CustomEvent", (message, user) =>
    console.log(`Hey ${user} kudoo's ${message}`)
);

EventsEmitter.emit('CustomEvent', 'Coding world', 'Bhaskar');
EventsEmitter.emit('CustomEvent', 'Holiday Journey in Maldives', 'Mr. Reddy');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    if (input === 'exit') {
        EventsEmitter.emit('CustomEvent', 'Goodbye!', " Mr.Reddy")
        process.exit()
    }
    EventsEmitter.emit('CustomEvent', input, 'terminal')

}

)
