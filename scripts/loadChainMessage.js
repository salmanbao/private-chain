function loadChainMessage() {
	var abi =
	eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"init","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_msg","type":"string"}],"name":"sendMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_of","type":"address"}],"name":"getMessage","outputs":[{"name":"_msg","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_of","type":"address"}],"name":"clearMessage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"string"}],"name":"strcmp","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"}]);
	var instance = abi.at("0x7e6a594567e7e98c2af9d1ad5c0b835829e68673");
	return instance;
}
