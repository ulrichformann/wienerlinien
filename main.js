const request = require('request');

module.exports = class Wienerlinien {

	constructor(API_KEY) {
		this.API_KEY = API_KEY;
		this.baseUrl = 'https://www.wienerlinien.at/ogd_realtime';
	}

	monitor(rbl, activateTrafficInfo, callback) {

		if (activateTrafficInfo.constructor === Function && callback === undefined) {
			callback = activateTrafficInfo;
			activateTrafficInfo = undefined;
		}

		this.rblString = `${this.baseUrl}/monitor?sender=${this.API_KEY}`;

		if (isArray(rbl)) {
			for (var i = 0; i < rbl.length; i++) {
				this.rblString += `&rbl=${rbl[i]}`;
			}
		} else {
			this.rblString += `&rbl=${rbl}`;
		}

		if (activateTrafficInfo !== undefined) {
			if (isArray(activateTrafficInfo)) {
				for (var i = 0; i < activateTrafficInfo.length; i++) {
					this.rblString += `&activateTrafficInfo=${activateTrafficInfo[i]}`;
				}
			} else {
				this.rblString += `&activateTrafficInfo=${activateTrafficInfo}`;
			}
		}

		console.log(this.rblString);

		return new Promise((resolve, reject) => {
			request(this.rblString, (err, res, body) => {
				if (!err) {
					resolve(JSON.parse(body).data);
				} else {
					reject(err);
				}
			});
		});
	}
};

// helper functions
function isArray(input) {
	return input.constructor === Array;
}
