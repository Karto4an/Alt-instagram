const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpusCount = os.cpus().length;
    console.log(`CPUs: ${cpusCount}`);
    console.log(`Master started`);
    for (let i = 0; i < cpusCount-1; i++) {
        const worker = cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker died!`);
        cluster.fork();
    });
}

if (cluster.isWorker) {
    require('./worker.js');
}
