AjaxPush = function(listener, sender)
{
	this.listener = listener || "";
	this.sender = sender || "";
	this.state = false;
	this.timestamp = 0;
}

AjaxPush.prototype =
{
	connect: function(callback) {
		var that = this;
		var status = false;

		$.ajax({ url: this.listener, dataType: 'json',
			data: { timestamp: this.timestamp },
			success: function(data)
			{
				if (!that.state)
					console.info("Connected!");

				status = true;
				this.state = true;
				that.timestamp = data["timestamp"];
				callback(data);
			},
			complete: function(data)
			{
				// if a connection problem occurs, try to reconnect each 1 second
				if (!status)
				{
					console.info("The connection has been lost!, trying to reconnect ...");
					setTimeout(function(){ that.connect(callback); }, 1000);
				}
				// send a new ajax request when this request is finished
				else
					that.connect(callback);

				that.state = (data.status == 200) ? true: false;
			}
		});
	},

	doRequest: function(data, callback) {
		$.ajax({ url: this.sender, data: data,
			success: function() { callback(); }
		});
	}
}