const moment = require('moment');

const SEVERITY_LEVEL = {
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

    _log(severity, ...args) {
        console.log(args.length)
        console[severity.type](`${severity.emoji} [${severity.text} : ${moment().format('yyyy-mm-dd hh:mm')}] ${args}`);
    }
}

exports.default = new Logger();