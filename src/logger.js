const moment = require('moment');

const SEVERITY_LEVEL = {
    'DEBUG': { type: 'log', emoji: '', text: 'DEBUG' },
    'INFO': { type: 'log', emoji: '🔵', text: 'INFO' },
    'WARN': { type: 'warn', emoji: '🟡', text: 'WARN' },
    'ERROR': { type: 'error', emoji: '🔴', text: 'ERROR' },
}

class Logger {
    severity = SEVERITY_LEVEL

    info(...args) {
        this._log(SEVERITY_LEVEL.INFO, args);
    }

    warn(...args) {
        this._log(SEVERITY_LEVEL.WARN, args);
    }

    error(...args) {
        this._log(SEVERITY_LEVEL.ERROR, args);
    }

    debug(...args) {
        this._log(SEVERITY_LEVEL.DEBUG, args);
    }

    _log(severity, ...args) {
        console[severity.type](`${severity.emoji} [${severity.text} : ${moment().format('DD-mm-yyyy hh:mm')}] ${args}`);
    }
}

module.exports = new Logger();