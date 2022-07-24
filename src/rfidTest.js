
navigator.usb
	.requestDevice({ filters: [] })
	.then(function (device) {
		console.log(device);
	});

// Get all connected USB devices the website has been granted access to.
navigator.usb.getDevices().then(devices => {
  devices.forEach(device => {
    console.log(device.productName);      // "Arduino Micro"
    console.log(device.manufacturerName); // "Arduino LLC"
  });
})

navigator.usb.getDevices().then((devices) => {
	console.log(`Total devices: ${devices.length}`);
	devices.forEach((device) => {
		console.log(
			`Product name: ${device.productName}, serial number ${device.serialNumber}`
		);
	});
});
